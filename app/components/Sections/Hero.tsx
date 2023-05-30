'use client';

import Image from 'next/image';
import { Link } from 'react-scroll';
import classes from './Hero.module.scss';

const Hero = () => {
	return (
		<section id='home' className={classes.hero}>
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
					src='/images/portrait.jpg'
					alt='Sergejs Ivcenko'
					placeholder='empty'
					fill={true}
					priority={true}
					sizes='(min-width: 960px) 50vw, (min-width: 480px) 50vw, 100vw'
				/>
			</div>
		</section>
	);
};

export default Hero;
