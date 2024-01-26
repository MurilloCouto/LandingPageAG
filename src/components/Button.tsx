import style from "./Button.module.scss";

interface ButtonProps {
	text: string;
	type: "button" | "submit" | "reset" | undefined;
}

export function Button({ text, type }: ButtonProps) {
	return (
		<button type={type} className={style.button}>
			{text}
		</button>
	);
}
