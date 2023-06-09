'use client';

import Section from '../UI/Section';
import classes from './Skills.module.scss';
import SkillsSlider from '../UI/SkillsSlider';

const Skills = () => {
	return (
		<Section
			title='My Skills'
			subtitle='Here are the technologies and tools I use.'
			className={classes.skills}
			id='skills'
		>
			<SkillsSlider />
		</Section>
	);
};

export default Skills;
