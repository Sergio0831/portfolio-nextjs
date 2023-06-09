'use client';

import clsx from 'clsx';
import { Variants, motion } from 'framer-motion';
import classes from './Section.module.scss';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { container, fadeInUp, lineAnimation } from '@/utilities/animations';

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
				initial={'hidden'}
				whileInView={'show'}
				viewport={{ once: true, amount: 1 }}
				transition={{ staggerChildren: 0.5 }}
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
				<motion.h2 className={classes.section__title} variants={fadeInUp}>
					{title}
				</motion.h2>
				<motion.h3 className={classes.section__subtitle} variants={fadeInUp}>
					{subtitle}
				</motion.h3>
			</motion.div>
			<div className={classes.section__center}>{children}</div>
		</section>
	);
};

export default Section;
