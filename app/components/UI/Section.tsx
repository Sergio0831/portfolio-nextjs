import clsx from 'clsx';
import classes from './Section.module.scss';

export type SectionProps = {
	id: string;
	title: string;
	subtitle: string;
	className: string;
	children: React.ReactNode;
};

const Section = ({
	id,
	title,
	subtitle,
	children,
	className,
}: SectionProps) => {
	const sectionClasses = clsx(
		{
			[classes.section]: true,
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
