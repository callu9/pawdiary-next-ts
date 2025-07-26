import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import ProviderLayout from "@/layouts/ProviderLayout";

export const metadata: Metadata = {
	title: "발도장",
	description: "반려동물과 함께하는 여정을 기록하는 발도장",
};

const pretendard = localFont({
	src: [
		{
			path: "../../public/fonts/Pretendard-Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "../../public/fonts/Pretendard-SemiBold.woff2",
			weight: "600",
			style: "normal",
		},
		{
			path: "../../public/fonts/Pretendard-Bold.woff2",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--font-pretendard",
	display: "swap",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko" className={pretendard.variable}>
			<body className="text-16-m">
				<ProviderLayout>{children}</ProviderLayout>
			</body>
		</html>
	);
}
