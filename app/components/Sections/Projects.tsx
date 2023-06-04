import Section from '../UI/Section';
import classes from './Projects.module.scss';
import { getProjects } from '@/utilities/getProjects';
import Link from 'next/link';
import ProjectsGrid from '../UI/ProjectsGrid';

const Projects = () => {
	const projects = getProjects().filter((project) => project.newProject);

	return (
		<Section
			className={classes.projects}
			id='works'
			title='My Projects'
			subtitle='Check out of some my projects...'
		>
			<ProjectsGrid projects={projects} />

			<Link href='/projects' className='btn btn-large'>
				All Projects
			</Link>
		</Section>
	);
};

export default Projects;
