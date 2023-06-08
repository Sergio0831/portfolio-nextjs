'use client';

import { motion } from 'framer-motion';
import classes from './InfoCard.module.scss';

type InfoCardProps = {
	icon: string;
	title: string;
	description: string;
	index: number;
};

const InfoCard = ({ icon, title, description, index }: InfoCardProps) => {
	return (
		<motion.article
			className={classes.card}
			initial={{ opacity: 0, y: 50 }}
			whileInView={{
				opacity: 1,
				y: 0,
				transition: {
					duration: 0.8,
					delay: 0.3 * index,
				},
			}}
			viewport={{ once: true, amount: 'some', margin: '-200px' }}
		>
			<svg className={classes.card__icon}>
				<use xlinkHref={`/images/sprite.svg#icon-${icon}`}></use>
			</svg>
			<h4 className={classes.card__title}>{title}</h4>
			<p className={classes.card__desc}>{description}</p>
		</motion.article>
	);
};

export default InfoCard;
