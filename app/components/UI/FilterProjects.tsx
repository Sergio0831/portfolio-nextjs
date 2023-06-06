'use client';

import { useState } from 'react';
import FilterDropdown from './FilterDropdown';
import ProjectsGrid from './ProjectsGrid';
import { ProjectFront } from '@/types/types';

type FilterProjectsProps = {
	projects: ProjectFront[];
};

const FilterProjects = ({ projects }: FilterProjectsProps) => {
	const tagsArray: string[] = [];
	const [isOpen, setOpen] = useState(false);
	const [filtered, setFiltered] = useState(projects);
	const [selectedItem, setSelectedItem] = useState<string | null>(null);
	projects.map((project) => project.tags.map((tag) => tagsArray.push(tag)));
	const newTags = ['All', ...new Set(tagsArray)];

	const handleToggleDropdown = () => setOpen((prev) => !prev);

	const handleCloseDropdown = () => setOpen(false);

	const handleFilterProjects = (e: React.MouseEvent<HTMLButtonElement>) => {
		const name = e.currentTarget.name;
		if (selectedItem === name) {
			setSelectedItem(null);
		}
		if (name === 'All') {
			setFiltered(projects);
			setSelectedItem(null);
			setOpen(false);
		} else {
			setSelectedItem(name);
			const newProjects = projects.filter((project) =>
				project.tags.some((tag) => tag === name),
			);
			setFiltered(newProjects);
			setOpen(false);
		}
	};

	return (
		<>
			{' '}
			<FilterDropdown
				newTags={newTags}
				selectedItem={selectedItem}
				isOpen={isOpen}
				onToggleDropdown={handleToggleDropdown}
				onFilterProjects={handleFilterProjects}
				onCloseDropdown={handleCloseDropdown}
			/>
			<ProjectsGrid projects={filtered} />
		</>
	);
};

export default FilterProjects;
