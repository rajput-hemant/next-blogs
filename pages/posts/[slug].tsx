import Head from "next/head";

import PostContent from "../../components/posts/post-content";
import { getPostData, getPostsFiles } from "../../lib/post-utils";

export type PostDetailPageProps = {
	posts: {
		slug: string;
		title: string;
		image: string;
		excerpt: string;
		date: string;
		content: string;
	};
};

const PostDetailPage = ({ posts }: PostDetailPageProps) => {
	return (
		<>
			<Head>
				<title>{posts.title}</title>
				<meta name="description" content={posts.excerpt} />
			</Head>
			<PostContent posts={posts} />;
		</>
	);
};

export const getStaticProps = (context: any) => {
	const { slug } = context.params;

	const postData = getPostData(slug);

	return {
		props: {
			posts: postData,
		},
		revalidate: 600,
	};
};

export const getStaticPaths = () => {
	const postFilenames = getPostsFiles();

	const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

	return {
		paths: slugs.map((slug) => ({ params: { slug } })),
		fallback: false,
	};
};

export default PostDetailPage;
