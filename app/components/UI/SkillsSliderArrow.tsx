'use client';

import clsx from 'clsx';
import Button from './Button';
import classes from './SkillsSliderArrow.module.scss';

type SkillsSliderArrowsProps = {
	type: 'prev' | 'next';
	disableNext?: boolean;
	disablePrev?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const SkillsSliderArrow = ({
	onClick,
	type,
	disableNext,
	disablePrev,
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
			ariaLabel={type === 'next' ? 'Next Slide' : 'Prev Slide'}
			disabled={type === 'next' ? disableNext : disablePrev}
			type='button'
			handleClick={onClick}
			name={type === 'next' ? 'Next' : 'Prev'}
		>
			<svg>
				<use xlinkHref='/images/sprite.svg#icon-chevron'></use>
			</svg>
		</Button>
	);
};
