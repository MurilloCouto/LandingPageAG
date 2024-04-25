import style from "./Button.module.scss";

interface ButtonProps {
    text: string;
    type: "button" | "submit" | "reset" | undefined;
    disabled?: boolean;
    className?: string;
}

export function Button({ text, type, disabled, className }: ButtonProps) {
    const buttonClass = disabled ? style.disabledButton : style.button;

    return (
        <button type={type} className={`${buttonClass} ${className}`}>
            {text}
        </button>
    );
}
