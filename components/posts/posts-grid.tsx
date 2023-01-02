import PostItem from "./post-item";
import { FeaturedPostsProps } from "../homepage/featured-posts";

type PostGridProps = {
	posts: FeaturedPostsProps["posts"];
};

const PostGrid = ({ posts }: PostGridProps) => {
	return (
		// grid
		<ul className="list-none m-0 p-0 grid grid-cols-2 gap-6 content-center md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
			{posts.map((post) => (
				<PostItem key={post.slug} post={post} />
			))}
		</ul>
	);
};

export default PostGrid;
