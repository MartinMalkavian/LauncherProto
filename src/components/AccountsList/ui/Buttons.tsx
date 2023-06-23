import { memo } from "react";
import Button from "components/ui/Button";
import { useTranslation } from "react-i18next";

type PropsType = {
	isFocused: boolean;
	onSubmitHandler?: () => void;
	onCancelHandler?: () => void;
};

export default memo(function Buttons({
	isFocused,
	onSubmitHandler,
	onCancelHandler,
}: PropsType) {
	const { t } = useTranslation();

	return (
		<div className="button">
			{isFocused ? (
				<Button
					style={{
						height: 40,
						width: "100%",
					}}
					onClick={onSubmitHandler}
				>
					{t("account_accept_btn")}
				</Button>
			) : (
				<Button
					style={{
						height: 40,
						width: "100%",
						background: "#2f2f2f",
						color: `#e5e5e5`,
					}}
					hoverStyle={{
						color: "black",
					}}
					hoverColor="#e5e5e5"
					onClick={onCancelHandler}
				>
					{t("account_cancel_btn")}
				</Button>
			)}
		</div>
	);
});
