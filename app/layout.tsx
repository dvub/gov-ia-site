'use client';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ThemeProvider from '@/components/theme-provider';
import NavBar from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${inter.className} mx-[5vw]`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<NavBar />
					<div className='MAIN_CONTENT my-12'>{children}</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
