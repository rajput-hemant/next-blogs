import PostItem from "./post-item";
import { FeaturedPostsProps } from "../homepage/featured-posts";

export type PostGridProps = {
	posts: FeaturedPostsProps["posts"];
};

const PostGrid = ({ posts }: PostGridProps) => {
	return (
		// grid
		<ul className="list-none m-0 px-6 grid grid-cols-1 gap-24 content-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{posts.map((post) => (
				<PostItem key={post.slug} post={post} />
			))}
		</ul>
	);
};

export default PostGrid;
