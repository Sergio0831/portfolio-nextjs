import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { ProjectProps } from '@/types/types';

export const getProjects = (): ProjectProps[] => {
	const folder = path.join(process.cwd(), 'works');
	const files = fs.readdirSync(folder);

	// Get data from each file
	const projects = files.map((fileName, index) => {
		const fileContents = fs.readFileSync(path.join(folder, fileName), 'utf-8');
		const { data } = matter(fileContents);
		return {
			slug: fileName.replace('.md', ''),
			id: index,
			title: data.title,
			newProject: data.new,
			tags: data.tags,
			imageFront: data.imageFront,
		};
	});

	return projects;
};
