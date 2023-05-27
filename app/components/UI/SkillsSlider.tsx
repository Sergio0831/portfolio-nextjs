'use client';

import { slides } from '@/data/slides';
import classes from './SkillsSlider.module.scss';
import Slider from 'react-slick';
import '../../styles/slick-slider.scss';
import { SkillsSliderArrow } from './SkillsSliderArrow';

const SkillsSlider = () => {
	const settings = {
		slidesToShow: 6,
		infinite: true,
		slidesToScroll: 2,
		nextArrow: <SkillsSliderArrow type='next' />,
		prevArrow: <SkillsSliderArrow type='prev' />,
		responsive: [
			{
				breakpoint: 960,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	};

	return (
		<Slider {...settings}>
			{slides.map((slide) => (
				<div key={slide.icon}>
					<div className={classes.slide}>
						<svg>
							<use xlinkHref={`/images/sprite.svg#icon-${slide.icon}`}></use>
						</svg>
						<p>{slide.title}</p>
					</div>
				</div>
			))}
		</Slider>
	);
};

export default SkillsSlider;
