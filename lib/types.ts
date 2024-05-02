import { readdirSync } from 'fs';

export type ArticleMetadata = {
	title: string;
	fileName: string;
	description: string;
	author: 'Casey' | 'Kaya';
	tags: string[];
};

// bloody brilliant that it works innit
export async function fetchArticleMetadata() {
	const res = readdirSync('./app/articles/pages');
	const metadatas: ArticleMetadata[] = [];
	for (const file of res) {
		const result = await import(`../app/articles/pages/${file}/page.mdx`);
		metadatas.push({ ...result.metadata, fileName: file });
	}
	return metadatas;
}
