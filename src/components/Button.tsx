import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, className }: ButtonProps) {
	return <button className={className}>{children}</button>;
}
