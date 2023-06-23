import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AddAccountStateType } from "interface/accountSliceTypes";
import Buttons from "./ui/Buttons";
import Input from "./ui/Input";
import { accountCode } from "validation/accountValidation";
import useAddAccount from "hooks/useAccount";

type PropsType = {
	updateAddAccountState: (state?: AddAccountStateType) => void;
};

export default function AccountCode({ updateAddAccountState }: PropsType) {
	const { t } = useTranslation();

	const {
		focused,
		inputText,
		focusHandler,
		onInputChangeHandler,
		onCancelHandler,
		submitCode,
	} = useAddAccount(updateAddAccountState);

	const [error, setError] = useState("");

	const submitValidationHandler = () => {
		if (!accountCode(inputText)) {
			setError(
				"Код-пароль должен состоять из 6 английских символов и/или букв"
			);
			return;
		}
		submitCode();
	};

	return (
		<form onSubmit={submitValidationHandler}>
			<div className="accountAddBlock">
				<div className="titleText title">{t("account_enter_code")}</div>
				<Input
					title={t("account_code")}
					focusHandler={focusHandler}
					onInputChange={onInputChangeHandler}
					inputValue={inputText}
				>
					<span>
						{t("account_code_modal_0")}{" "}
						<a href="https://cerberus-games.com/">
							{t("account_code_modal_1")}
						</a>{" "}
						{t("account_code_modal_2")}{" "}
						<a href="https://cerberus-games.com/">
							{t("account_code_modal_3")}
						</a>
						.
					</span>
				</Input>
				<div className="errorBlock smallText">{error ? error : null}</div>
				<Buttons
					isFocused={inputText || focused ? true : false}
					onCancelHandler={onCancelHandler}
					onSubmitHandler={submitValidationHandler}
				/>
			</div>
		</form>
	);
}
