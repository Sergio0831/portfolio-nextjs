'use client';

import { MenuProvider } from '@/context/MenuContext';
import classes from './Header.module.scss';
import NavButton from '../Header/NavButton';
import Menu from '../Header/Menu';
import { Link } from 'react-scroll';
import Image from 'next/image';

const Header = () => {
	return (
		<header className={classes.header} id='home'>
			<MenuProvider>
				<NavButton />
				<Menu />
			</MenuProvider>
			<div className={classes.hero}>
				<div className={classes.hero__text}>
					<h2 className={classes.hero__heading}>Sergejs Ivcenko</h2>
					<h3 className={classes.hero__subheading}>Front-End Web Developer</h3>
					<div className={classes.hero__links}>
						<Link
							className='btn btn-medium'
							smooth={true}
							duration={500}
							spy={true}
							to='contact'
							tabIndex={0}
						>
							Contact Me
						</Link>
						<a
							className='btn btn-medium btn-outline'
							href='/Sergejs_Ivcenko_CV.pdf'
							download
						>
							Resume
							<svg className={classes.hero__icon}>
								<use xlinkHref='/images/sprite.svg#icon-cloud'></use>
							</svg>
						</a>
					</div>
				</div>
				<div className={classes.hero__image}>
					<Image
						src='/images/myportrait.jpg'
						alt='Sergejs Ivcenko'
						placeholder='empty'
						fill={true}
						priority={true}
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;
