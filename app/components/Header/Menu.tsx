'use client';

import clsx from 'clsx';
import { useMenuState } from '@/context/MenuContext';
import classes from './Menu.module.scss';
import Nav from './Nav';

const Menu = () => {
	const { isOpen } = useMenuState();
	const menuClasses = clsx({
		[classes.menu__bg]: true,
		[classes.show]: isOpen,
	});

	return (
		<div className={menuClasses}>
			<Nav />
		</div>
	);
};

export default Menu;
