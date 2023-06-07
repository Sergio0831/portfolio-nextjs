import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { ProjectSingle } from '../../types/types';
import Section from '@/components/UI/Section';
import Link from 'next/link';
import classes from './page.module.scss';
import Image from 'next/image';

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
	const { title, description, demo, github, imageSingleProject } =
		getProject(slug);
	return (
		<main className={classes.project}>
			<Link
				href={'/projects'}
				className={classes.project__back}
				aria-label='Back to projects page'
				prefetch={false}
			>
				<svg>
					<use xlinkHref='/images/sprite.svg#icon-arrow'></use>
				</svg>
			</Link>
			<Section title={title}>
				<div className={classes.project__content}>
					<p className={classes.project__description}>{description}</p>
					<div className={classes.project__links}>
						<Link
							href={github}
							rel='noreferrer noopener'
							target='_blank'
							className={classes.project__github}
							prefetch={false}
						>
							<svg>
								<use xlinkHref='/images/sprite.svg#icon-github-round'></use>
							</svg>
							Source
						</Link>
						<Link
							href={demo}
							rel='noreferrer noopener'
							target='_blank'
							className={classes.project__demo}
							prefetch={false}
						>
							Visit demo
							<svg>
								<use xlinkHref='/images/sprite.svg#icon-visit'></use>
							</svg>
						</Link>
					</div>
				</div>
				<div className={classes.project__img}>
					<Image
						src={imageSingleProject}
						alt={title}
						placeholder='empty'
						fill={true}
						loading='lazy'
						sizes=' (max-width: 960px) 100vw, 100vw'
					/>
				</div>
			</Section>
		</main>
	);
};

export default ProjectPage;
