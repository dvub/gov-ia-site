'use client';
import NavBar from '@/components/navbar';
import { BrowserView, isMobile, MobileView } from 'react-device-detect';

export default function Home() {
	return (
		<main>
			<div>
				<div>
					<div className='my-5'>
						<h1 className='bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent font-bold text-4xl '>
							Online Privacy Awareness
						</h1>
						{/* TODO: possible subheader here */}
					</div>
					<div className='text-xl max-w-[90%]'>
						{isMobile && (
							<p>
								Spreading awareness on the many issues of online
								privacy and personal data in the digital age.
							</p>
						)}
						{!isMobile && (
							<p>
								This project aims to spread awareness on the
								many issues of online privacy and personal data
								in the digital age. Furthermore, (for American
								readers) this project seeks to educate people on
								online privacy in relation to the Fourth
								Amendment, such as how the government has been
								and is currently able to access your data, as
								well as the constitutionality of these methods.
								<b>
									The goal of this project is to encourage as
									many as possible to not only be more mindful
									of their online activity and digital
									footprint, but also to choose
									privacy-focused tech alternatives.
								</b>{' '}
								We wish to achieve these goals in a free,
								accessible, and open-source way. If you wish to
								contribute to this project, see this page
								(todo).
							</p>
						)}
					</div>
				</div>
			</div>
		</main>
	);
}
