import Hero from "../components/homepage/hero";
import { getFeaturedPost } from "../lib/post-utils";
import FeaturedPosts from "../components/homepage/featured-posts";

const HomePage = ({
	posts,
}: {
	posts: {
		slug: string;
		title: string;
		image: string;
		excerpt: string;
		date: string;
	}[];
}) => {
	return (
		<>
			<Hero />
			<FeaturedPosts posts={posts} />
		</>
	);
};

export const getStaticProps = () => {
	const featuredPost = getFeaturedPost();

	return {
		props: {
			posts: featuredPost,
		},
	};
};

export default HomePage;
