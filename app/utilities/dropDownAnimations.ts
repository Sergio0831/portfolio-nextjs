import { MotionProps, Variants } from 'framer-motion';

export const listAnimation: MotionProps = {
	variants: {
		hidden: {
			height: 0,
			opacity: 0,
			transition: {
				delay: 0.6,
				staggerChildren: 0.1,
			},
		},
		visible: {
			height: '35rem',
			opacity: 1,
		},
	},
	initial: 'hidden',
	animate: 'visible',
	exit: 'hidden',
	transition: {
		type: 'spring',
		bounce: 0,
		duration: 0.5,
		staggerChildren: 0.1,
	},
};

export const itemsVariants: Variants = {
	hidden: {
		opacity: 0,
		translateX: -20,
		filter: 'blur(20px)',
	},
	visible: {
		opacity: 1,
		translateX: 0,
		filter: 'blur(0px)',
	},
	exit: {
		opacity: 0,
		translateX: -20,
		filter: 'blur(20px)',
	},
};
