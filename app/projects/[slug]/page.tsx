import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { ProjectSingle } from '../../types/types';

const getProject = (slug: string): ProjectSingle => {
	const folder = path.join(process.cwd(), 'works');
	const file = `${folder}/${slug}.md`;
	const content = fs.readFileSync(file, 'utf-8');
	const { data } = matter(content);

	return {
		title: data.title,
		description: data.description,
		github: data.github,
		demo: data.demo,
		imageSingleProject: data.imageSingleProject,
	};
};

type ProjectPageProps = {
	params: {
		slug: string;
	};
};

const ProjectPage = ({ params }: ProjectPageProps) => {
	const { slug } = params;
	const project = getProject(slug);
	return <h2>{project.title}</h2>;
};

export default ProjectPage;
