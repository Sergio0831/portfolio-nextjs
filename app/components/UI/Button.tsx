import { motion } from 'framer-motion';
import clsx from 'clsx';

type ButtonProps = {
	type: 'button' | 'submit' | 'reset' | undefined;
	className?: string;
	name: string;
	children?: React.ReactNode;
	large?: boolean;
	small?: boolean;
	outline?: boolean;
	block?: boolean;
	round?: boolean;
	disabled?: boolean;
	ariaLabel: string;
	handleClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const Button = ({
	type,
	className,
	children,
	large,
	small,
	name,
	outline,
	block,
	round,
	handleClick,
	ariaLabel,
	disabled,
}: ButtonProps) => {
	const classes = clsx(
		{
			btn: true,
			'btn-large': large,
			'btn-small': small,
			'btn-outline': outline,
			'btn-block': block,
			'btn-round': round,
			'btn-disabled': disabled,
		},
		className,
	);

	return (
		<motion.button
			className={classes}
			type={type}
			disabled={disabled}
			onClick={handleClick}
			name={name}
			whileTap={!disabled ? { scale: 0.95 } : undefined}
			transition={{ duration: 0.1 }}
			aria-label={ariaLabel}
		>
			{children}
		</motion.button>
	);
};

export default Button;
