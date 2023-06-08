import { MotionProps, Variants } from 'framer-motion';

export const iconVariants: MotionProps = {
	variants: {
		visible: (custom) => ({
			rotate: custom,
			transition: {
				duration: 0.2,
				delay: custom,
			},
		}),
	},
	animate: 'visible',
};

export const listAnimation: MotionProps = {
	variants: {
		hidden: {
			height: 0,
			opacity: 0,
			transition: {
				delay: 0.6,
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
	},
};

export const itemsVariants: Variants = {
	hidden: (custom: number) => ({
		opacity: 0,
		translateX: -20,
		filter: 'blur(20px)',
		transition: {
			delay: custom,
			duration: 0.2,
		},
	}),
	visible: (custom: number) => ({
		opacity: 1,
		translateX: 0,
		filter: 'blur(0px)',
		transition: {
			delay: custom,
			duration: 0.2,
		},
	}),
};
