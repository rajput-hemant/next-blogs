import PostGrid from "../posts/posts-grid";

export type FeaturedPostsProps = {
	posts: {
		title: string;
		image: string;
		excerpt: string;
		date: string;
		slug: string;
	}[];
};

const FeaturedPosts = ({ posts }: FeaturedPostsProps) => {
	return (
		// latest
		<section className="w-11/12 mx-auto my-8">
			<h2 className="text-4xl text-center text-zinc-800 md:text-6xl mb-8">
				Featured Posts
			</h2>
			<PostGrid posts={posts} />
		</section>
	);
};

export default FeaturedPosts;
