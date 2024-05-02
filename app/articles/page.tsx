import { Badge } from '@/components/ui/badge';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { fetchArticleMetadata } from '@/lib/types';
import Link from 'next/link';

export default async function Articles() {
	const metadatas = await fetchArticleMetadata();

	return (
		<>
			<h1 className='text-3xl font-bold'>All Articles</h1>
			<p className='mb-10'>
				Thanks for stopping by! You can find <i>all</i> of our articles
				here.
			</p>
			<div className='my-5 grid gap-3 md:grid-cols-2'>
				{metadatas.map((metadata) => {
					return (
						<Link
							href={`/articles/pages/${metadata.fileName}`}
							key={metadata.title}
						>
							<Card className='my-3'>
								<CardHeader>
									<CardTitle>{metadata.title}</CardTitle>
									<CardDescription>
										{metadata.description}
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className='flex gap-3 my-3'>
										{metadata.tags.map((tag) => {
											return <Badge>{tag}</Badge>;
										})}
									</div>
								</CardContent>
								<CardFooter className='text-sm'>
									By {metadata.author}
								</CardFooter>
							</Card>
						</Link>
					);
				})}
			</div>
		</>
	);
}
