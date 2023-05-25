import classes from './Footer.module.scss';

type FooterProps = {};

const Footer = () => {
	const date: number = new Date().getFullYear();

	return (
		<footer className={classes.footer}>
			<div className={classes.social_icons}>
				<a
					href='https://www.linkedin.com/in/ivcenko/'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='Go to Linkedin page'
				>
					<svg className={classes.hero__icon}>
						<use xlinkHref='/images/sprite.svg#icon-linkedin'></use>
					</svg>
				</a>
				<a
					href='https://github.com/Sergio0831'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='Go to GitHub page'
				>
					<svg className={classes.hero__icon}>
						<use xlinkHref='/images/sprite.svg#icon-github'></use>
					</svg>
				</a>
			</div>
			<p className={classes.footer__copyright}>
				&copy; {date}, Designed & Coded by Sergejs Ivcenko
			</p>
		</footer>
	);
};

export default Footer;
