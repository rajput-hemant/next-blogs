import { getAllPosts } from "../../lib/post-utils";
import AllPosts from "../../components/posts/all-posts";

export type AllPostsPageProps = {
	posts: {
		slug: string;
		title: string;
		image: string;
		excerpt: string;
		date: string;
	}[];
};

const AllPostsPage = ({ posts }: AllPostsPageProps) => {
	return <AllPosts posts={posts} />;
};

export const getStaticProps = () => {
	const allPosts = getAllPosts();

	return {
		props: {
			posts: allPosts,
		},
		revalidate: 60,
	};
};

export default AllPostsPage;
