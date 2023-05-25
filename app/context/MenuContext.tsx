'use client';

import React, {
	createContext,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';

interface MenuContextType {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	handleCloseMenu: () => void;
}

type MenuProviderProps = {
	children: React.ReactNode;
};

const MenuContext = createContext<MenuContextType>({
	isOpen: false,
	setIsOpen: () => {},
	handleCloseMenu: () => {},
});

export const MenuProvider = ({ children }: MenuProviderProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleCloseMenu = () => {
		setIsOpen(false);
	};

	/* Close menu when esc key pressed */
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				handleCloseMenu();
			}
		};

		if (isOpen) {
			document.addEventListener('keydown', handleKeyDown);
		} else {
			document.removeEventListener('keydown', handleKeyDown);
		}

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [isOpen]);

	/* Remove scroll when menu open */
	useEffect(() => {
		const bodyElement = document.body;
		if (isOpen) {
			bodyElement.classList.add('disable-scroll');
		} else {
			bodyElement.classList.remove('disable-scroll');
		}

		return () => {
			bodyElement.classList.remove('disable-scroll');
		};
	}, [isOpen]);

	const contextValue = useMemo(() => {
		return {
			handleCloseMenu,
			isOpen,
			setIsOpen,
		};
	}, [isOpen]);

	return (
		<MenuContext.Provider value={contextValue}>{children}</MenuContext.Provider>
	);
};

export const useMenuState = () => {
	return useContext(MenuContext);
};
