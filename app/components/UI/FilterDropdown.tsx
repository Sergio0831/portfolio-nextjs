import classes from './FilterDropdown.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { useRef } from 'react';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import { itemsVariants, listAnimation } from '@/utilities/dropDownAnimations';

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
	const listRef = useRef<HTMLUListElement>(null);
	useOnClickOutside(listRef, onCloseDropdown);

	return (
		<div className={classes.dropdown}>
			<motion.button
				whileTap={{ scale: 0.97 }}
				type='button'
				className={classes.dropdown__header}
				onClick={onToggleDropdown}
				aria-label='Dropdown'
			>
				{selectedItem || newTags[0]}
				<motion.svg
					viewBox='0 0 512 512'
					animate={{
						rotate: isOpen ? 180 : 0,
						transition: {
							duration: 0.2,
							delay: isOpen ? 0 : 0.5,
						},
					}}
				>
					<path d='M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z' />
				</motion.svg>
			</motion.button>
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.ul
						className={classes.dropdown__body}
						ref={listRef}
						tabIndex={-1}
						animate='visible'
						{...listAnimation}
					>
						{newTags.map((item, index) => (
							<motion.li
								key={item}
								initial='hidden'
								animate='visible'
								exit='hidden'
								variants={itemsVariants}
								custom={(index + 0.5) * 0.1}
							>
								<button
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
								</button>
							</motion.li>
						))}
					</motion.ul>
				)}
			</AnimatePresence>
		</div>
	);
};

export default FilterDropdown;
