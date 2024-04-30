import { Github } from 'lucide-react';
import PrivacyNote from './privacy-note';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function Footer() {
	return (
		<div className='FOOTER h-auto pb-5 text-muted-foreground '>
			<div className='w-full flex justify-center'>
				<h1>Thanks for checking out OPA.</h1>
			</div>

			<div className='my-5 flex gap-5'>
				<Button variant='outline' size='icon' className=''>
					<Link href='https://github.com/dvub/gov-ia-site'>
						<Github />
					</Link>
				</Button>
				<p className='text-sm'>
					We care about providing information in a free and accessible
					way. Therefore, this project is open-source! (That means you
					can see, or even request changes to the code of this
					website)
				</p>
			</div>
			<PrivacyNote />
		</div>
	);
}
