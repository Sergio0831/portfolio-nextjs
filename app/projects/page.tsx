import FilterProjects from '@/components/UI/FilterProjects';
import Section from '@/components/UI/Section';
import { getProjects } from '@/utilities/getProjects';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Projects | Sergejs Ivcenko',
	description: 'Explore my works',
	keywords:
		'react, nextjs, html, css, scss, framer-motion, figma, prisma, javascript, angular',
};

const ProjectsPage = () => {
	const projects = getProjects().sort((a, b) => b.number - a.number);

	return (
		<main>
			<Section
				title='This Is My Works'
				subtitle='Take a look around and explore all works'
			>
				<FilterProjects projects={projects} />
			</Section>
		</main>
	);
};

export default ProjectsPage;
