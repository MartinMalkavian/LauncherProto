import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AddAccountStateType } from "interface/accountSliceTypes";
import Input from "./ui/Input";
import Buttons from "./ui/Buttons";
import { accountTitle } from "validation/accountValidation";
import useAddAccount from "hooks/useAccount";

export default function AccountTitle({
	updateAddAccountState,
}: {
	updateAddAccountState: (state?: AddAccountStateType) => void;
}) {
	const { t } = useTranslation();

	const {
		focused,
		inputText,
		focusHandler,
		onInputChangeHandler,
		submitTitle,
		onCancelHandler,
	} = useAddAccount(updateAddAccountState);

	const [error, setError] = useState("");
	const submitValidationHandler = () => {
		if (!accountTitle(inputText)) {
			setError("Название должно содержать 5-20 английских символов и/или букв");
			return;
		}
		submitTitle();
	};

	return (
		<form onSubmit={submitValidationHandler}>
			<div className="accountAddBlock">
				<div className="titleText title">{t("account_enter_title")}</div>
				<Input
					title={t("account_title")}
					focusHandler={focusHandler}
					onInputChange={onInputChangeHandler}
					inputValue={inputText}
				>
					<span>{t("account_title_modal")}</span>
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
