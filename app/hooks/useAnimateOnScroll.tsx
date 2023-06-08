import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const useAnimateOnScroll = (thresh = 0.4) => {
	const controls = useAnimation();
	const [element, inView] = useInView({
		threshold: thresh,
		rootMargin: '-100px 0px',
	});

	useEffect(() => {
		if (inView) {
			controls.start('show');
		}
	}, [controls, inView]);

	return { element, inView, controls };
};

export default useAnimateOnScroll;
