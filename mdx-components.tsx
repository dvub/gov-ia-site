import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import { Children } from 'react';
import { Url } from 'url';

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		h1: ({ children }) => <h1 className='text-3xl'>{children}</h1>,
		ul: ({ children }) => <ul className='list-disc text-xs'>{children}</ul>,
		a: ({ children, href }) => (
			<Link href={href} className='underline text-red-500'>
				{children}
			</Link>
		),
		...components,
	};
}
