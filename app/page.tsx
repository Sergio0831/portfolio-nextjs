import dynamic from 'next/dynamic';
import Header from './components/Layout/Header';
const About = dynamic(() => import('./components/Sections/About'));
const Projects = dynamic(() => import('./components/Sections/Projects'));
const Skills = dynamic(() => import('./components/Sections/Skills'));

export const metadata = {
	title: 'Home | Sergejs Ivcenko',
	description: 'Sergejs Ivcenko Front-End Web Developer Portfolio',
	keywords:
		'web developer, nextjs, html, css, scss, front-end, javascript, angular',
};

const Home = () => {
	return (
		<>
			<Header />
			<main>
				<About />
				<Projects />
				<Skills />
			</main>
		</>
	);
};

export default Home;
