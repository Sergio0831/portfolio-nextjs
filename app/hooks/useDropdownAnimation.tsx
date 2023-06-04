import { stagger, useAnimate } from 'framer-motion';
import { useEffect } from 'react';

const staggerDropdownItems = stagger(0.08, { startDelay: 0.08 });

export const useDropdownAnimation = (isOpen: boolean) => {
	const [scope, animate] = useAnimate();

	useEffect(() => {
		// Animate icon
		animate('svg', { rotate: isOpen ? -180 : 0 }, { duration: 0.2 });

		// Animate dropdown body
		animate(
			'ul',
			{
				clipPath: isOpen
					? 'inset(-1% -1% -1% -1% round 5px)'
					: 'inset(10% 50% 90% 50% round 5px)',
			},
			{
				type: 'spring',
				bounce: 0,
				duration: 0.5,
			},
		);

		animate(
			'li',
			isOpen
				? { opacity: 1, scale: 1, filter: 'blur(0px)' }
				: { opacity: 0, scale: 0.3, filter: 'blur(20px)' },
			{
				duration: 0.2,
				delay: isOpen ? staggerDropdownItems : 0,
			},
		);
	}, [isOpen, animate]);

	return scope;
};
