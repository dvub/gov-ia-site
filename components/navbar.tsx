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
import React from 'react';
import { cn } from '@/lib/utils';
export default function NavBar() {
	const components: { title: string; href: string; description: string }[] = [
		{
			title: 'Why You Should Care about Online Privacy',
			href: '/TODO',
			description:
				'The importance of online privacy, and why you should care.',
		},
		{
			title: 'What is Online Privacy?',
			href: '/TODO',
			description: 'The basics of online privacy.',
		},
		{
			title: 'Online Privacy Tools',
			href: '/TODO',
			description:
				'Alternative options that help you stay safe and private online without compromising on usage.',
		},
		{
			title: 'Becoming Active',
			href: '/TODO',
			description:
				'How you can become involved with legislators on making change.',
		},
	];
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
							<ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
								{components.map((component) => (
									<ListItem
										key={component.title}
										title={component.title}
										href={component.href}
									>
										{component.description}
									</ListItem>
								))}
							</ul>
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
