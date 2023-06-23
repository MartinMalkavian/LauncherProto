import "./exceptions.scss";
import Button from "components/ui/Button";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store";
import { removeFromFilesExceptions } from "store/slices/optionsSlice";

export default function FilesExceptionList() {
	const { t } = useTranslation();
	const { files } = useSelector((state: RootState) => state.options);
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const removeHandler = (fileId: number) => {
		dispatch(removeFromFilesExceptions({ fileId }));
	};

	const addHandler = () => {};

	const saveHandler = () => {
		navigate("/options");
	};

	return (
		<div className="ExceptionListBlock">
			<div className="title">{t("files_exception_title")}</div>
			<div className="files text">
				{files.map((file, index) => (
					<div className="file" key={`file_${index}`}>
						<div>{file}</div>
						<div className="removeFileBtn">
							<FontAwesomeIcon
								icon={faXmark}
								onClick={() => removeHandler(index)}
							/>
						</div>
					</div>
				))}
			</div>
			<div className="buttons">
				<div className="add">
					<Button onClick={addHandler}>{t("add_btn")}</Button>
				</div>
				<div className="save">
					<Button onClick={saveHandler}>{t("save_btn")}</Button>
				</div>
			</div>
		</div>
	);
}
