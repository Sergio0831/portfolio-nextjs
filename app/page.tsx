import { Metadata } from 'next';
import dynamic from 'next/dynamic';
const Hero = dynamic(() => import('./components/Sections/Hero'));
const About = dynamic(() => import('./components/Sections/About'));
const Projects = dynamic(() => import('./components/Sections/Projects'));
const Skills = dynamic(() => import('./components/Sections/Skills'));
const Contact = dynamic(() => import('./components/Sections/Contact'));

export const metadata: Metadata = {
	title: 'Home | Sergejs Ivcenko',
	description: 'Sergejs Ivcenko Front-End Web Developer Portfolio',
	keywords:
		'web developer, nextjs, html, css, scss, front-end, javascript, angular',
};

const Home = () => {
	return (
		<main>
			<Hero />
			<About />
			<Projects />
			<Skills />
			<Contact />
		</main>
	);
};

export default Home;
