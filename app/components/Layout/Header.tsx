'use client';

import { usePathname } from 'next/navigation';
import { MenuProvider } from '@/context/MenuContext';
import classes from './Header.module.scss';
import NavButton from '../Header/NavButton';
import Menu from '../Header/Menu';
import Logo from '../Header/Logo';

const Header = () => {
	const pathname = usePathname();

	return (
		<header className={classes.header}>
			<Logo />
			{pathname === '/' && (
				<MenuProvider>
					<NavButton />
					<Menu />
				</MenuProvider>
			)}
		</header>
	);
};

export default Header;
