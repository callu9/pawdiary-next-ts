"use client";

import { OverlayContext } from "@/hooks/useOverlay";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { JSX, ReactNode, useState } from "react";

function OverlayProvider({ children }: { children: React.ReactNode }) {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [overlay, setOverlay] = useState<JSX.Element | undefined>();
	return (
		<OverlayContext value={{ setIsOpen, setOverlay }}>
			{children}
			{isOpen && overlay}
		</OverlayContext>
	);
}

function QueryProvider({ children }: { children: ReactNode }) {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools initialIsOpen />
		</QueryClientProvider>
	);
}

export default function ProviderLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<OverlayProvider>
			<QueryProvider>{children}</QueryProvider>
		</OverlayProvider>
	);
}
