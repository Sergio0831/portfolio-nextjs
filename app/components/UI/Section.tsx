'use client';

import clsx from 'clsx';
import classes from './Section.module.scss';
import { usePathname } from 'next/navigation';

export type SectionProps = {
	id?: string;
	title: string;
	subtitle: string;
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
			<h2 className={classes.section__title}>{title}</h2>
			<h3 className={classes.section__subtitle}>{subtitle}</h3>
			<div className={classes.section__center}>{children}</div>
		</section>
	);
};

export default Section;
