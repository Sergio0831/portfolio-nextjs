'use client';

import { motion } from 'framer-motion';
import classes from './InfoCard.module.scss';
import { fadeInUp } from '@/utilities/animations';

type InfoCardProps = {
	icon: string;
	title: string;
	description: string;
};

const InfoCard = ({ icon, title, description }: InfoCardProps) => {
	return (
		<motion.article className={classes.card} variants={fadeInUp}>
			<svg className={classes.card__icon}>
				<use xlinkHref={`/images/sprite.svg#icon-${icon}`}></use>
			</svg>
			<h4 className={classes.card__title}>{title}</h4>
			<p className={classes.card__desc}>{description}</p>
		</motion.article>
	);
};

export default InfoCard;
