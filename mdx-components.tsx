import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		a: ({ children, href }) => (
			<Link href={href!} className='underline'>
				{children}
			</Link>
		),
		p: ({ children }) => <p className='my-3'>{children}</p>,
		h1: ({ children }) => (
			<h1 className='text-3xl my-5 font-bold bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent '>
				{children}
			</h1>
		),
		h2: ({ children }) => (
			<h2 className='text-2xl my-5 font-bold'>{children}</h2>
		),
		ul: ({ children }) => <ul className='list-disc text-xs'>{children}</ul>,

		/*
		a: ({ children, href }) => (
			<Link href={href} className='underline text-red-500'>
				{children}
			</Link>
		),
		*/
		...components,
	};
}
