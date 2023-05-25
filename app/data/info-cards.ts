type InfoCard = {
	id: number;
	icon: string;
	title: string;
	description: string;
};

const infoCards: InfoCard[] = [
	{
		id: 1,
		icon: 'code',
		title: 'Web Development',
		description:
			'I write well-designed, testable, and efficient code by using the best software development practices. With my knowledge of programming languages such as HTML, CSS, JavaScript, and various frameworks, I can create dynamic and interactive websites that meet the needs. I build responsive websites that are optimized for different devices.',
	},
	{
		id: 2,
		icon: 'diamond',
		title: 'Web Design',
		description:
			"I have a keen eye for design and I'm always up to date with the latest design trends and best practices to ensure my designs are up-to-date and modern. Whether I'm building a brand new website from scratch or redesigning an existing one, I create beautiful and user-friendly website.",
	},
	{
		id: 3,
		icon: 'seo',
		title: 'SEO',
		description:
			'I use various techniques and tools to optimize website load times, enhance page speed, and improve overall website functionality. I also conduct thorough keyword research and implement SEO strategies to improve search engine rankings and increase website traffic.',
	},
];

export default infoCards;
