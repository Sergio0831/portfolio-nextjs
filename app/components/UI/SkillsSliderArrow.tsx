'use client';

import clsx from 'clsx';
import Button from './Button';
import classes from './SkillsSliderArrow.module.scss';

type SkillsSliderArrowsProps = {
	type: 'prev' | 'next';
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const SkillsSliderArrow = ({
	onClick,
	type,
}: SkillsSliderArrowsProps) => {
	const buttonClasses = clsx({
		[classes.arrow]: true,
		[classes.arrow__next]: type === 'next',
		[classes.arrow__prev]: type === 'prev',
	});

	return (
		<Button
			round
			className={buttonClasses}
			aria-label={type === 'next' ? 'Next Slide' : 'Prev Slide'}
			type='button'
			handleClick={onClick}
		>
			<svg>
				<use xlinkHref='/images/sprite.svg#icon-chevron'></use>
			</svg>
		</Button>
	);
};
