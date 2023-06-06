import { ProjectFront } from '@/types/types';
import Project from './Project';
import classes from './ProjectsGrid.module.scss';

type ProjectsGridProps = {
	projects: ProjectFront[];
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
