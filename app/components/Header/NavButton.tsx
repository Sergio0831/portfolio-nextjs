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
			<div className={navigationClasses}>&nbsp;</div>
			<div className={navigationClasses}>&nbsp;</div>
			<div className={navigationClasses}>&nbsp;</div>
			&nbsp;
		</button>
	);
};

export default NavButton;
