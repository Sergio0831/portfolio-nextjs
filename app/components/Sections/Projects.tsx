import Section from '../UI/Section';
import classes from './Projects.module.scss';
import Project from '../UI/Project';
import { getProjects } from '@/utilities/getProjects';
import Link from 'next/link';

const Projects = () => {
	const projects = getProjects().filter((project) => project.newProject);

	return (
		<Section
			className={classes.projects}
			id='works'
			title='My Projects'
			subtitle='Check out of some my projects...'
		>
			<div className={classes.projects__grid}>
				{projects &&
					projects.map((project) => <Project key={project.id} {...project} />)}
			</div>

			<Link href='/projects' className='btn btn-large'>
				All Projects
			</Link>
		</Section>
	);
};

export default Projects;
