import { Github } from 'lucide-react';
import PrivacyNote from './privacy-note';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function Footer() {
	return (
		<div className='FOOTER h-auto pb-5 text-muted-foreground flex w-full '>
			<div className='w-[50%]'>
				<div className='flex'>
					<p className='max-w-[75%] text-sm'>
						This project is open-source! (That means you can see, or
						even request changes, to the code of this website)
					</p>
					<Button variant='outline' size='icon' className=''>
						<Link href='TODO'>
							<Github />
						</Link>
					</Button>
				</div>
			</div>
			<PrivacyNote />
		</div>
	);
}
