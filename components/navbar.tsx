'use client';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { ModeToggle } from './theme-switch';
import { Button } from './ui/button';
import { InstagramIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ArticleMetadata } from '@/lib/types';

export default function NavBar(props: { articles: ArticleMetadata[] }) {
	const [articles, setArticles] = useState(props.articles);
	useEffect(() => {
		setArticles(props.articles);
	}, [props]);
	return (
		<div className='my-5'>
			<NavigationMenu className='justify-between'>
				<NavigationMenuList>
					{/* title of the website */}

					<NavigationMenuItem>
						<Link href='/'>
							<NavigationMenuLink className='bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent font-bold text-3xl'>
								opa.
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>

					{/* other navbar items will go here */}

					{/* 
                    item that links to an index of articles 
                    additionally, this may be a dropdown with quick access to some articles
                */}

					<NavigationMenuItem>
						<NavigationMenuTrigger>Learn</NavigationMenuTrigger>

						<NavigationMenuContent>
							<div className='p-4 w-[400px] md:w-[500px] lg:w-[600px] '>
								<NavigationMenuLink asChild>
									<Link
										className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
										href='/articles'
									>
										<div className='mb-2 mt-4 text-lg font-medium'>
											See All Articles
										</div>
									</Link>
								</NavigationMenuLink>

								<h1 className='py-4 w-full text-center text-xl'>
									Quick Links
								</h1>
								<ul className='grid gap-3 md:grid-cols-2'>
									{articles.map((articleMetadata) => (
										<ListItem
											key={articleMetadata.title}
											title={articleMetadata.title}
											href={`/articles/pages/${articleMetadata.fileName}`}
										>
											{articleMetadata.description}
										</ListItem>
									))}
								</ul>
							</div>
						</NavigationMenuContent>
					</NavigationMenuItem>

					{/* 
                    item linking to an about page
                	*/}
					<NavigationMenuItem>
						<Link href='/about' legacyBehavior passHref>
							<NavigationMenuLink
								className={navigationMenuTriggerStyle()}
							>
								About
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					{/* 
                    item linking to some contact information    
                */}
				</NavigationMenuList>
				<NavigationMenuList>
					<NavigationMenuItem>
						<Link href='https://www.youtube.com'>
							<Button variant='outline' size='icon'>
								<InstagramIcon />
							</Button>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<ModeToggle />
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
}

const ListItem = React.forwardRef<
	React.ElementRef<'a'>,
	React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
						className
					)}
					{...props}
				>
					<div className='text-sm font-medium leading-none'>
						{title}
					</div>
					<p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = 'ListItem';
