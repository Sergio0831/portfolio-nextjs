import { stagger, useAnimate } from 'framer-motion';
import { useEffect } from 'react';

const staggerDropdownItems = stagger(0.08, { startDelay: 0.1 });

export const useDropdownAnimation = (isOpen: boolean) => {
	const [scope, animate] = useAnimate();

	useEffect(() => {
		// Animate icon
		animate(
			'svg',
			{ rotate: isOpen ? 0 : -180 },
			{ duration: 0.2, delay: isOpen ? 0 : 0.6 },
		);

		// Animate dropdown body
		animate(
			'ul',
			{
				height: isOpen ? '35rem' : '0',
				opacity: isOpen ? 1 : 0,
			},
			{
				type: 'spring',
				bounce: 0,
				duration: 0.5,
				delay: isOpen ? 0 : 0.6,
			},
		);

		// Animate dropdown item
		animate(
			'li',
			isOpen
				? {
						opacity: 1,
						scale: 1,
						filter: 'blur(0px)',
				  }
				: {
						opacity: 0,
						scale: 0.3,
						filter: 'blur(20px)',
				  },
			{
				duration: 0.2,
				delay: staggerDropdownItems,
			},
		);
	}, [isOpen, animate]);

	return scope;
};
