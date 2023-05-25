'use client';

import clsx from 'clsx';
import classes from './Nav.module.scss';
import { useMenuState } from '@/context/MenuContext';
import navLinks from '@/data/nav-links';
import { Link as ScrollLink } from 'react-scroll';

const Nav = () => {
	const { handleCloseMenu, isOpen } = useMenuState();
	const navItemClasses = clsx({
		[classes.nav__item]: true,
		[classes.in]: isOpen,
	});

	const navClasses = clsx({
		[classes.nav]: true,
		[classes.show]: isOpen,
	});

	return (
		<nav className={navClasses}>
			<ul className={classes.nav__list}>
				{navLinks.map((link) => {
					const { href } = link;

					return (
						<li className={navItemClasses} key={href}>
							<ScrollLink
								className={classes.nav__link}
								activeClass={classes.active}
								onClick={handleCloseMenu}
								smooth={true}
								duration={500}
								spy={true}
								to={href}
								tabIndex={isOpen ? 0 : -1}
							>
								{href}
							</ScrollLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Nav;
