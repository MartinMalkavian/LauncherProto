import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { useAccount, useAccountLogin } from "hooks/useAccount";
import { AddAccountStateType } from "interface/accountSliceTypes";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Account from "./Account";
import MessageModal from "components/MessageModal";

type PropsType = {
	addAccountHandler: (state: AddAccountStateType) => void;
};

export default function AccountList({ addAccountHandler }: PropsType) {
	const { t } = useTranslation();
	const { accountList, updateAccountList } = useAccount(t);
	const { msg, checkAccountStatus } = useAccountLogin(t);

	const handleDrop = (droppedItem: any) => {
		if (!droppedItem.destination) return;

		var updatedList = [...accountList];
		const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
		updatedList.splice(droppedItem.destination.index, 0, reorderedItem);

		updateAccountList(updatedList);
	};

	return (
		<div className="accountListBlock">
			<div
				className="addAccountBtn title"
				onClick={() => addAccountHandler("code")}
			>
				{t("account_add_btn")} <FontAwesomeIcon icon={faUserPlus} />
			</div>
			<DragDropContext onDragEnd={handleDrop}>
				<Droppable droppableId="accountList">
					{(provided) => (
						<div
							className="accountList tinyScrollbar"
							{...provided.droppableProps}
							ref={provided.innerRef}
						>
							{accountList.map((account, index) => (
								<Draggable
									key={account.id}
									draggableId={account.title}
									index={index}
								>
									{(provided) => (
										<div
											ref={provided.innerRef}
											{...provided.dragHandleProps}
											{...provided.draggableProps}
											className={`accountBlock${
												account.status >= 1 ? " online" : ""
											}${account.banStatus > 1 ? " banned" : ""}`}
										>
											<Account
												key={account.id}
												accountLoginHandler={checkAccountStatus}
												account={account}
											/>
										</div>
									)}
								</Draggable>
							))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
			{!msg ? null : <MessageModal message={msg} />}
		</div>
	);
}
