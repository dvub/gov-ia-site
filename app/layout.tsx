import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ThemeProvider from '@/components/theme-provider';
import NavBar from '@/components/navbar';
import { Analytics } from '@vercel/analytics/react';
import Footer from '@/components/footer/footer';
import { readdirSync } from 'fs';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const r = async () => {
		const base = './app/articles/pages';
		const files = readdirSync(base);
		const articles = files.filter((x) => !x.endsWith('.tsx'));
		for (const article of articles) {
			// console.log(article);
			const { metadata } = await import(`${base}/${article}/page.mdx`);
			console.log(metadata);
		}
	};
	r();

	// https://stackoverflow.com/questions/59812003/tailwindcss-fixed-sticky-footer-on-the-bottom
	return (
		<html lang='en' suppressHydrationWarning>
			<Analytics />
			<body
				className={`${inter.className} mx-[5vw] flex flex-col h-screen`}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<NavBar />
					<div className='MAIN_CONTENT text-xl mt-12 mb-52'>
						{children}
					</div>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
