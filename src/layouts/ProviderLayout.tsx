"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode } from "react";

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
	return <QueryProvider>{children}</QueryProvider>;
}
