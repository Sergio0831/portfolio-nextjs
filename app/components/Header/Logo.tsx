'use client';

import React from 'react';
import classes from './Logo.module.scss';
import Link from 'next/link';

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
