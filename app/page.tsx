'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useLayoutEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';

export default function Home() {
	const [mobile, setMobile] = useState(false);
	// possible optimization??
	useLayoutEffect(() => {
		setMobile(isMobile);
	});

	return (
		<main>
			<div className='mb-12'>
				<h1 className='bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent font-bold text-4xl '>
					Online Privacy Awareness
				</h1>
				{/* TODO: possible subheader here */}
			</div>
			<div className='text-xl lg:max-w-[50%] md:max-w-[75%] max-w-[90%]'>
				{mobile && (
					<p>
						Spreading awareness on issues of online privacy and
						personal data in the digital age.
					</p>
				)}
				{!mobile && (
					<p>
						This project aims to spread awareness on the many issues
						of online privacy and personal data in the digital age.
						Furthermore, (for American readers) this project seeks
						to educate people on online privacy in relation to the
						Fourth Amendment, such as how your government is
						currently able to access and handle your data, as well
						as the constitutionality of these methods.
					</p>
				)}

				<Button variant='outline' className='my-5' size='lg'>
					<Link href='/about'> More</Link>
				</Button>
			</div>
			<div className='mb-12 w-full text-right'>
				<h1 className='bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent font-bold text-4xl '>
					New to Online Privacy?
				</h1>
				{/* TODO: possible subheader here */}
			</div>
		</main>
	);
}
