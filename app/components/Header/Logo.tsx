'use client';

import React from 'react';
import classes from './Logo.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import logoPaths from '@/data/logoPaths';

const logoVariants = {
	hidden: {
		//opacity: 0,
		pathLength: 0,
		fill: 'none',
	},
	visible: {
		//opacity: 1,
		pathLength: 1,
		fill: 'currentColor',
		transition: {
			duration: 2,
			ease: 'easeInOut',
		},
	},
};

const Logo = () => {
	return (
		<h1 className={classes.logo}>
			<Link href={'/'} rel='noopener noreferrer' aria-label='Logo'>
				Sergejs
			</Link>
		</h1>
	);
};

export default Logo;
