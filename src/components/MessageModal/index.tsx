import ModalPortal from "components/ModalPortal";
import Button from "components/ui/Button";
import CustomIcons from "components/ui/CustomIcons";
import { MessageModalType } from "interface/messageModalTypes";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

type PropsType = {
	message: MessageModalType;
	cancelCallback?: () => void;
};

export default function MessageModal({ message, cancelCallback }: PropsType) {
	const { t } = useTranslation();
	const [visible, setVisible] = useState(true);

	const { title, icon, description, buttons } = message;

	const closeHandler = () => {
		setVisible(false);
		if (cancelCallback) {
			cancelCallback();
		}
	};

	useEffect(() => {
		setVisible(true);
	}, [message]);

	if (!visible || !message) {
		return <></>;
	}

	return (
		<ModalPortal>
			<section id="MessageModal">
				<div className="MessageModalBlock">
					<div className="header">
						<div className="icon">
							<CustomIcons icon={icon} />
						</div>
						<div className="messageTitle title">{title}</div>
					</div>
					<div className="body subTitle">{description}</div>
					<div className="bottom">
						<Button onClick={closeHandler}>{t("error_ban_close")}</Button>
						{buttons.map((button, index) => (
							<Button
								key={`messageBtn${index}`}
								onClick={() => button.onClickHandler(button.params)}
							>
								{button.title}
							</Button>
						))}
					</div>
				</div>
			</section>
		</ModalPortal>
	);
}
