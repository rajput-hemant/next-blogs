import Image from "next/image";
import Link from "next/link";

import { FeaturedPostsProps } from "../homepage/featured-posts";

export type PostItemProps = {
	post: FeaturedPostsProps["posts"][0];
};

const PostItem = ({ post }: PostItemProps) => {
	const { title, image, excerpt, date, slug } = post;

	const formattedDate = new Date(date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	const imagePath = `/images/posts/${slug}/${image}`;

	return (
		// post
		<li className="shadow-md bg-zinc-800 text-center">
			<Link href="">
				{/* image */}
				<div className="w-full max-h-80 overflow-hidden">
					<Image src={imagePath} alt={title} width={300} height={200} />
				</div>
				{/* content */}
				<div className="p-4">
					<h3 className="mx-0 my-2 text-2xl text-zinc-200">{title}</h3>
					<time className="italic text-zinc-400">{formattedDate}</time>
					<p className="leading-6 text-zinc-300">{excerpt}</p>
				</div>
			</Link>
		</li>
	);
};

export default PostItem;
