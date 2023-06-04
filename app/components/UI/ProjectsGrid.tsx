import { ProjectProps } from '@/types/types';
import Project from './Project';
import classes from './ProjectsGrid.module.scss';

type ProjectsGridProps = {
	projects: ProjectProps[];
};

const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
	return (
		<div className={classes.projects__grid}>
			{projects &&
				projects.map((project) => <Project key={project.id} {...project} />)}
		</div>
	);
};

export default ProjectsGrid;
