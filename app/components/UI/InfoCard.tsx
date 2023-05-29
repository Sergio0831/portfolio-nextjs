import classes from './InfoCard.module.scss';

type InfoCardProps = {
	icon: string;
	title: string;
	description: string;
};

const InfoCard = ({ icon, title, description }: InfoCardProps) => {
	return (
		<article className={classes.card}>
			<svg className={classes.card__icon}>
				<use xlinkHref={`/images/sprite.svg#icon-${icon}`}></use>
			</svg>
			<h4 className={classes.card__title}>{title}</h4>
			<p className={classes.card__desc}>{description}</p>
		</article>
	);
};

export default InfoCard;
