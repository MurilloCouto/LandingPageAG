import style from "./Button.module.scss";

interface ButtonProps {
    text: string;
    type: "button" | "submit" | "reset" | undefined;
    disabled?: boolean;
    className?: string;
    onClick?: () => void;
}

export function Button({ text, type, disabled, className, onClick }: ButtonProps) {
    const buttonClass = disabled ? style.disabledButton : style.button;

    return (
        <button type={type} className={`${buttonClass} ${className}`} onClick={onClick}>
            {text}
        </button>
    );
}
