import { Variants } from 'framer-motion';

export const container: Variants = {
	show: {
		transition: {
			staggerChildren: 0.5,
		},
	},
};

export const fadeInUp: Variants = {
	hidden: { opacity: 0, y: 50 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
		},
	},
};

export const fadeIn: Variants = {
	hidden: { opacity: 0, scale: 0.7 },
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.5,
		},
	},
};

export const lineAnimation: Variants = {
	hidden: { opacity: 0, width: 0 },
	show: {
		opacity: 1,
		width: 100,
		transition: {
			duration: 0.8,
		},
	},
};
