'use client';

import clsx from 'clsx';
import classes from './NavButton.module.scss';
import { useMenuState } from '@/context/MenuContext';

const NavButton = () => {
	const { isOpen, setIsOpen } = useMenuState();

	const navigationClasses = clsx({
		[classes.navigation__icon]: true,
		[classes.show]: isOpen,
	});

	const handleButtonClick = () => {
		setIsOpen(!isOpen);
		console.log('hi');
	};

	return (
		<button
			type='button'
			aria-label='Navigation'
			className={classes.navigation__button}
			onClick={handleButtonClick}
		>
			<span className={navigationClasses}>&nbsp;</span>
			<span className={navigationClasses}>&nbsp;</span>
			<span className={navigationClasses}>&nbsp;</span>
			&nbsp;
		</button>
	);
};

export default NavButton;
