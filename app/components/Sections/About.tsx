'use client';

import Image from 'next/image';
import classes from './About.module.scss';
import infoCards from '@/data/info-cards';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { url } from '@/data/blurDataUrl';
import { container } from '@/utilities/animations';
const Section = dynamic(() => import('../UI/Section'));
const InfoCard = dynamic(() => import('../UI/InfoCard'));

const About = () => {
	return (
		<Section
			id='about'
			title='About Me'
			subtitle="Let me tell you who I'm."
			className={classes.about}
		>
			<div className={classes.about__info}>
				<div className={classes.about__image}>
					<Image
						src='/images/coding.svg'
						alt='Coder'
						placeholder='blur'
						blurDataURL={url}
						fill={true}
						loading='lazy'
						sizes='(min-width: 960px) 50vw, (min-width: 480px) 50vw, 100vw'
					/>
				</div>

				<div className={classes.about__me}>
					<h4> Hi there!</h4>
					<p>
						I&apos;m a passionate Front End Web Developer with experience in
						building websites and writing code. Before starting a career in web
						development, I used to work in the hospitality industry as a Head
						Chef, Sous Chef, and Chef, where I honed my leadership and
						management skills, creativity, ability to work under pressure,
						communication skills, business skills, discipline, and attention to
						detail.
					</p>
					<p>
						Now, I&apos;m fully dedicated to pursuing my passion for web
						development and am currently a student in the Front End Web
						Developer Traineeship at CDETB. I&apos;m always eager to learn and
						grow in the industry and stay up-to-date with the latest trends and
						technologies.
					</p>
					<p>
						My goal is to become an experienced front-end developer and work on
						challenging projects that allow me to use my creativity and
						problem-solving skills. I&apos;m excited to continue exploring new
						technologies and tools to build beautiful, responsive, and
						user-friendly websites.
					</p>
				</div>
			</div>

			<motion.div
				initial={'hidden'}
				whileInView={'show'}
				viewport={{ once: true, amount: 0.7 }}
				variants={container}
				className={classes.about__cards}
			>
				{infoCards &&
					infoCards.map((card) => (
						<InfoCard
							key={card.id}
							icon={card.icon}
							title={card.title}
							description={card.description}
						/>
					))}
			</motion.div>
		</Section>
	);
};

export default About;
