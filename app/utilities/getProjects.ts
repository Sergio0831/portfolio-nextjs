import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { ProjectFront } from '@/types/types';

export const getProjects = (): ProjectFront[] => {
	const folder = path.join(process.cwd(), 'works');
	const files = fs.readdirSync(folder);

	// Get data from each file
	const projects = files.map((fileName, index) => {
		const fileContents = fs.readFileSync(path.join(folder, fileName), 'utf-8');
		const { data } = matter(fileContents);
		return {
			slug: fileName.replace('.md', ''),
			id: index,
			number: data.number,
			title: data.title,
			newProject: data.new,
			tags: data.tags,
			imageFront: data.imageFront,
		};
	});

	return projects;
};
