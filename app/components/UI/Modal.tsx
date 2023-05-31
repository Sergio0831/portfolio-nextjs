import { motion } from 'framer-motion';
import classes from './Modal.module.scss';
import clsx from 'clsx';

type ModalProps = {
	message: string;
	type: 'error' | 'success';
};

const modalVariants = {
	hidden: {
		opacity: 0,
		scale: 0.8,
		translateX: '-300%',
	},
	visible: {
		opacity: 1,
		scale: 1,
		translateX: '-50%',
		transition: {
			duration: 0.5,
		},
	},
	exit: {
		opacity: 0,
		scale: 0.8,
		translateX: '-300%',
		transition: {
			duration: 0.5,
			ease: 'easeInOut',
		},
	},
};

const Modal = ({ message, type }: ModalProps) => {
	const modalClasses = clsx({
		[classes.modal]: true,
		[classes.modal__success]: type === 'success',
		[classes.modal__error]: type === 'error',
	});

	return (
		<motion.div
			className={modalClasses}
			variants={modalVariants}
			initial='hidden'
			animate='visible'
			exit='exit'
		>
			<p>{message}</p>
		</motion.div>
	);
};

export default Modal;
