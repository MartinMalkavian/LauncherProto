import Button from "components/ui/Button";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { accountTitle } from "validation/accountValidation";

type PropsType = {
	onClickHandler: (newTitle?: string, accountId?: number) => void;
	title: string;
	accountId: number;
};

export default function RenameAccount({
	onClickHandler,
	title,
	accountId,
}: PropsType) {
	const [focused, setFocused] = useState(false);
	const [inputText, setInputText] = useState("");
	const [error, setError] = useState("");

	const { t } = useTranslation();

	const inputRef = useRef<HTMLInputElement>(null);
	const titleRef = useRef<HTMLDivElement>(null);

	const onSubmitHandler = () => {
		if (!accountTitle(inputText)) {
			setError("Название должно содержать 5-20 английских символов и/или букв");
			return;
		}
		if (inputText !== "" && title !== inputText)
			onClickHandler(inputText, accountId);
		else onClickHandler();
	};

	const onCancelHandler = () => {
		onClickHandler();
	};

	/** */
	const inputTitleHandler = () => {
		if (!titleRef.current || !inputRef.current) {
			return;
		}

		titleRef.current.classList.add("small");
		inputRef.current.focus();
	};

	const inputFocusHandler = (value: boolean) => {
		if (!value && titleRef.current && !inputText) {
			titleRef.current.classList.remove("small");
		}
		setFocused(value);
	};

	return (
		<form onSubmit={onSubmitHandler}>
			<div className="ChangeTitleBlock">
				<div className={`inputBlock`}>
					<div
						className={`inputTitle subTitle`}
						ref={titleRef}
						onClick={inputTitleHandler}
					>
						Новый псевдоним
					</div>
					<input
						type="text"
						onBlur={() => inputFocusHandler(false)}
						value={inputText}
						onChange={(e) => setInputText(e.target.value)}
						className="subTitle"
						ref={inputRef}
					/>
				</div>
				<div className="errorBlock smallText">{error ? error : null}</div>

				<div className="button">
					{focused || inputText ? (
						<Button
							style={{
								height: 40,
								width: "100%",
							}}
							onClick={() => onSubmitHandler()}
						>
							{t("account_accept_btn")}
						</Button>
					) : (
						<Button
							style={{
								height: 40,
								width: "100%",
								background: "#1f1f1f",
								color: `#e5e5e5`,
							}}
							hoverStyle={{ color: "black" }}
							hoverColor="#e5e5e5"
							onClick={() => onCancelHandler()}
						>
							{t("account_cancel_btn")}
						</Button>
					)}
				</div>
			</div>
		</form>
	);
}
