'use client';
import NavBar from '@/components/navbar';

export default function Home() {
	return (
		<main className='p-5 w-screen'>
			<NavBar />

			<div className='my-24 flex justify-center'>
				<h1 className='bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent font-bold text-3xl'>
					Online Privacy Awareness
				</h1>
				<p></p>
			</div>
		</main>
	);
}
