type ProjectProps = {
	id: number;
	slug: string;
	title: string;
	description: string;
	newProject: boolean;
	number: number;
	github: string;
	demo: string;
	tags: string[];
	imageFront: string;
	imageSingleProject: string;
};

export type ProjectFront = Omit<
	ProjectProps,
	'description' | 'github' | 'demo' | 'imageSingleProject'
>;

export type ProjectSingle = Pick<
	ProjectProps,
	'title' | 'description' | 'github' | 'demo' | 'imageSingleProject'
>;
