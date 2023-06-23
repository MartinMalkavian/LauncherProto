import { useState } from "react";
import { TFunction } from "i18next";
import {
	AddAccountStateType,
	accountsSliceType,
} from "interface/accountSliceTypes";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import {
	accountAdd,
	accountListUpdate,
	accountLogoff,
	accountLogon,
} from "store/slices/accountsSlice";
import { MessageModalType } from "interface/messageModalTypes";
import {
	appUpdateMsg,
	checkAccountStatusUtil,
	disconnectMsg,
} from "utils/accountUtils";

export function useAccount(
	t: TFunction<"translation", undefined, "translation">
) {
	const dispatch = useDispatch();
	const accountList = useSelector((state: RootState) => state.accounts);

	const login = (accountId: number) => {
		dispatch(accountLogon(accountId));
	};

	const logoff = (accountId: number) => {
		dispatch(accountLogoff(accountId));
	};

	const updateAccountList = (list: accountsSliceType[]) => {
		dispatch(accountListUpdate(list));
	};

	return { accountList, updateAccountList, login, logoff };
}

export function useAccountLogin(
	t: TFunction<"translation", undefined, "translation">
) {
	const appStatus = useSelector((state: RootState) => state.app.status);
	const dispatch = useDispatch();
	const [msg, setMsg] = useState<MessageModalType | undefined>();

	const accountDisconnect = (account: accountsSliceType | undefined) => {
		if (account) {
			dispatch(accountLogoff(account.id));
			setMsg(undefined);
		}
	};

	const checkAccountStatus = (account: accountsSliceType) => {
		let message = undefined;
		if (account.status === 0) {
			if (appStatus === "update") {
				setMsg(appUpdateMsg(t));
				return;
			}

			if ((message = checkAccountStatusUtil(account, t))) {
				setMsg(message);
				return;
			}

			dispatch(accountLogon(account.id));
		}

		if (account.status > 0) {
			setMsg(disconnectMsg(t, accountDisconnect, account));
		}
	};

	return { msg, checkAccountStatus };
}

export default function useAddAccount(
	addAccountStateFn: (state?: AddAccountStateType) => void
) {
	const dispatch = useDispatch();
	const [focused, setFocused] = useState(false);
	const [inputText, setInputText] = useState("");

	const focusHandler = (isFocused: boolean) => {
		setFocused(isFocused);
	};

	const onInputChangeHandler = (value: string) => {
		setInputText(value);
	};

	const onCancelHandler = () => {
		addAccountStateFn();
	};

	const submitCode = () => {
		addAccountStateFn("title");
	};

	const submitTitle = () => {
		dispatch(accountAdd({ title: inputText }));
		addAccountStateFn();
	};

	return {
		focused,
		inputText,
		focusHandler,
		onInputChangeHandler,
		submitCode,
		submitTitle,
		onCancelHandler,
	};
}
