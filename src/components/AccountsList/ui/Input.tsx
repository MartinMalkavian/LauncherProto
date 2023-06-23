import { ChangeEvent, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

type PropsType = {
	children: JSX.Element;
	focusHandler: (value: boolean) => void;
	onInputChange: (value: string) => void;
	inputValue?: string;
	title: string;
};

export default function Input({
	children,
	focusHandler,
	onInputChange,
	inputValue,
	title,
}: PropsType) {
	const blockRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);
	const titleRef = useRef<HTMLDivElement>(null);
	const modalRef = useRef<HTMLDivElement>(null);

	const showModalHandler = () => {
		if (!modalRef.current) {
			return;
		}

		if (modalRef.current.classList.contains("show")) {
			modalRef.current.classList.remove("show");
		} else {
			modalRef.current.classList.add("show");
		}
	};

	const inputTitleHandler = () => {
		if (!titleRef.current || !inputRef.current) {
			return;
		}

		titleRef.current.classList.add("small");
		blockRef.current?.classList.add("focused");
		inputRef.current.focus();
	};

	const inputFocusHandler = (value: boolean) => {
		if (!value && titleRef.current && !inputValue) {
			titleRef.current.classList.remove("small");
			blockRef.current?.classList.remove("focused");
		}
		focusHandler(value);
	};

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		onInputChange(e.target.value);
	};

	const onInputSubmit = () => {};

	return (
		<div className="inputBlock" ref={blockRef}>
			<div
				className="inputTitle subTitle"
				onClick={inputTitleHandler}
				ref={titleRef}
			>
				{title}
			</div>
			<input
				type="text"
				name="text"
				onFocus={() => inputFocusHandler(true)}
				onBlur={() => inputFocusHandler(false)}
				value={inputValue}
				onChange={(e) => onChange(e)}
				ref={inputRef}
				onSubmit={() => onInputSubmit}
				autoComplete="off"
			/>
			<div className="subTitle" onMouseEnter={showModalHandler}>
				<FontAwesomeIcon icon={faInfoCircle} />
				<div
					className="LoginModal text"
					onMouseLeave={showModalHandler}
					ref={modalRef}
				>
					{children}
				</div>
			</div>
		</div>
	);
}
