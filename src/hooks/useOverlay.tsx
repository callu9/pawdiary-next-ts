import { createContext, JSX, useContext, useState } from "react";

interface OverlayContextProps {
	setIsOpen: (isOpen: boolean) => void;
	setOverlay: (overlay?: JSX.Element) => void;
}

export const OverlayContext = createContext<OverlayContextProps>({
	setIsOpen: () => {},
	setOverlay: () => {},
});

export function useOverlay() {
	const { setIsOpen, setOverlay } = useContext(OverlayContext);
	function handleClose() {
		setIsOpen(false);
		setOverlay();
	}
	function handleSetOverlay(modal: JSX.Element) {
		setIsOpen(true);
		setOverlay(modal);
	}
	return { close: handleClose, overlay: handleSetOverlay };
}
