import classes from './FilterDropdown.module.scss';
import { motion } from 'framer-motion';
import { useDropdownAnimation } from '@/hooks/useDropdownAnimation';
import { useRef } from 'react';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';

type FilterDropdownProps = {
	newTags: string[];
	selectedItem: null | string;
	isOpen: boolean;
	onToggleDropdown: () => void;
	onCloseDropdown: () => void;
	onFilterProjects: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const FilterDropdown = ({
	newTags,
	selectedItem,
	isOpen,
	onToggleDropdown,
	onCloseDropdown,
	onFilterProjects,
}: FilterDropdownProps) => {
	const scope = useDropdownAnimation(isOpen);
	const listRef = useRef<HTMLUListElement>(null);
	useOnClickOutside(listRef, onCloseDropdown);

	return (
		<div className={classes.dropdown} ref={scope}>
			<motion.button
				whileTap={{ scale: 0.97 }}
				type='button'
				className={classes.dropdown__header}
				onClick={onToggleDropdown}
				aria-label='Dropdown'
			>
				{selectedItem || newTags[0]}
				<svg viewBox='0 0 512 512' className={classes.dropdown__icon}>
					<path d='M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z' />
				</svg>
			</motion.button>

			<motion.ul className={classes.dropdown__body} ref={listRef}>
				{newTags.map((item) => (
					<motion.li key={item}>
						<motion.button
							aria-label={item}
							type='button'
							name={item}
							className={`${classes.dropdown__item} ${
								selectedItem === item ? classes.selected : null
							}`}
							onClick={onFilterProjects}
							tabIndex={isOpen ? 0 : -1}
						>
							{item}
						</motion.button>
					</motion.li>
				))}
			</motion.ul>
		</div>
	);
};

export default FilterDropdown;
