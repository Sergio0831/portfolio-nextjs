'use client';

import clsx from 'clsx';
import { Variants, motion } from 'framer-motion';
import classes from './Section.module.scss';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { container, fadeInUp } from '@/utilities/animations';

export type SectionProps = {
	id?: string;
	title: string;
	subtitle?: string;
	className?: string;
	children: React.ReactNode;
};

const Section = ({
	id,
	title,
	subtitle,
	children,
	className,
}: SectionProps) => {
	const pathname = usePathname();

	const sectionClasses = clsx(
		{
			[classes.section]: true,
			[classes.section__projects]: pathname === '/projects',
		},
		className,
	);

	return (
		<section className={sectionClasses} id={id}>
			<motion.div
				className={classes.section__center}
				viewport={{ once: true, amount: 'some', margin: '-200px' }}
				variants={container}
			>
				{pathname !== '/' && pathname !== '/projects' && (
					<Link
						href={'/projects'}
						className={classes.section__back}
						aria-label='Back to projects page'
						prefetch={false}
					>
						<svg>
							<use xlinkHref='/images/sprite.svg#icon-arrow'></use>
						</svg>
					</Link>
				)}
				<motion.h2
					initial='hidden'
					whileInView='show'
					variants={fadeInUp}
					className={classes.section__title}
				>
					{title}
				</motion.h2>
				<motion.h3
					initial='hidden'
					whileInView='show'
					variants={fadeInUp}
					className={classes.section__subtitle}
				>
					{subtitle}
				</motion.h3>
			</motion.div>
			<div className={classes.section__center}>{children}</div>
		</section>
	);
};

export default Section;
