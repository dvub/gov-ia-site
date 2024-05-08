import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About | OPA',
	description:
		'Online Privacy Awareness is a project started by 2 student for our goverment class. Learn more about the project here!',
};

export default function Page() {
	return (
		<main>
			<div className='my-5'>
				<h1 className='bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent font-bold text-4xl '>
					About
				</h1>
				{/* TODO: possible subheader here */}
			</div>
			<div className='text-xl lg:max-w-[50%] md:max-w-[75%] max-w-[90%]'>
				<p className='my-3'>
					Online Privacy Awareness is a project started by 2 students
					for our goverment class. We're Casey and Kaya, by the way.
				</p>
				<p className='my-3'>
					This project aims to spread awareness on the many issues of
					online privacy and personal data in the digital age.
					Furthermore, (for American readers) this project seeks to
					educate people on online privacy in relation to the Fourth
					Amendment, such as how the government has been and is
					currently able to access your data, as well as the
					constitutionality of these methods.
				</p>
				<p className='my-3'>
					<b>
						The goal of this project is to encourage as many as
						possible to not only be more mindful of their online
						activity and privacy but also to choose privacy-focused
						tech alternatives.
					</b>{' '}
					Beyond that, though, there's still a lot that can be done.
					Consider contacting your legislators, or contributing to a
					privacy project such as this one! Contributions are welcome.
				</p>
			</div>
		</main>
	);
}
