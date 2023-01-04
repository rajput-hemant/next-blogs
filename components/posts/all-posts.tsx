import PostGrid from "./posts-grid";
import { PostGridProps } from "./posts-grid";

type AllPostsProps = {
	posts: PostGridProps["posts"];
};

const AllPosts = ({ posts }: AllPostsProps) => {
	return (
		// posts
		<section className="w-[90%] mx-auto">
			<h1 className="text-4xl p-8 text-zinc-800 text-center md:text-6xl">
				All Posts
			</h1>
			<PostGrid posts={posts} />
		</section>
	);
};

export default AllPosts;
