import Link from 'next/link';

export default function PrivacyNote() {
	return (
		<div className='text-muted-foreground '>
			<h1 className='text-md font-bold'>Privacy Notice</h1>
			<div className='text-sm '>
				<p>
					Part of the project was measuring the impact of our efforts,
					so in the context of an online campaign, that would most
					easily be measured with metrics. We know it's sort of
					hypocritical, but this website collects a little bit of
					information about how you use it. This website is deployed
					via Vercel and thus uses Vercel Analytics. You can learn
					more{' '}
					<Link
						href='https://vercel.com/analytics'
						className='underline'
					>
						here
					</Link>
					.
				</p>
			</div>
		</div>
	);
}
