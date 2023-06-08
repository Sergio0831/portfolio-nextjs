'use client';

import Image from 'next/image';
import classes from './Hero.module.scss';
import { Link as ScrollLink } from 'react-scroll';
import { url } from '@/data/blurDataUrl';
import { motion } from 'framer-motion';

const Hero = () => {
	return (
		<section id='home' className={classes.hero}>
			<div className={classes.hero__text}>
				<motion.h2
					initial={{ opacity: 0, translateY: 50 }}
					animate={{
						opacity: 1,
						translateY: 0,
						transition: {
							duration: 0.8,
						},
					}}
					className={classes.hero__heading}
				>
					Sergejs Ivcenko
				</motion.h2>
				<motion.h3
					initial={{ opacity: 0, translateY: 50 }}
					animate={{
						opacity: 1,
						translateY: 0,
						transition: {
							duration: 0.8,
							delay: 0.1,
						},
					}}
					className={classes.hero__subheading}
				>
					Front-End Web Developer
				</motion.h3>
				<motion.div
					className={classes.hero__links}
					initial={{ opacity: 0, scale: 0.3 }}
					animate={{
						opacity: 1,
						scale: 1,
						transition: {
							duration: 0.8,
							delay: 0.2,
						},
					}}
				>
					<ScrollLink
						className='btn btn-medium'
						smooth={true}
						duration={500}
						spy={true}
						to='contact'
						tabIndex={0}
					>
						Contact Me
					</ScrollLink>
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
				</motion.div>
			</div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: {
						duration: 1,
					},
				}}
				className={classes.hero__image}
			>
				<Image
					src='/images/portrait.jpg'
					alt='Sergejs Ivcenko'
					placeholder='blur'
					blurDataURL={url}
					fill={true}
					priority={true}
					sizes='(max-width: 480px) 50vw, (max-width: 960px) 50vw, 30vw'
				/>
			</motion.div>
		</section>
	);
};

export default Hero;
