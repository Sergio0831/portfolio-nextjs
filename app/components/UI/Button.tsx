import clsx from 'clsx';

type ButtonProps = {
	type: 'button' | 'submit' | 'reset' | undefined;
	className?: string;
	children?: React.ReactNode;
	large?: boolean;
	small?: boolean;
	outline?: boolean;
	block?: boolean;
	round?: boolean;
	rest?: Object;
	handleClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({
	type,
	className,
	children,
	large,
	small,
	outline,
	block,
	round,
	handleClick,
}: ButtonProps) => {
	const classes = clsx(
		{
			btn: true,
			'btn-large': large,
			'btn-small': small,
			'btn-outline': outline,
			'btn-block': block,
			'btn-round': round,
		},
		className,
	);

	return (
		<button className={classes} type={type} onClick={handleClick}>
			{children}
		</button>
	);
};

export default Button;
