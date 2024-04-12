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
export default function NavBar() {
	return (
		<>
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
							<p>hi</p>
						</NavigationMenuContent>
					</NavigationMenuItem>

					{/* 
                    item linking to an about page
                */}

					{/* 
                    item linking to some contact information    
                */}
				</NavigationMenuList>
				<NavigationMenuList className='flex items-center'>
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
		</>
	);
}
