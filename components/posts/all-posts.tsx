import PostGrid from "./posts-grid";
import { AllPostsPageProps } from "../../pages/posts";

const AllPosts = ({ posts }: AllPostsPageProps) => {
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
