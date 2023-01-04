import Image from "next/image";
import Link from "next/link";

import { PostGridProps } from "./posts-grid";

export type PostItemProps = {
	post: PostGridProps["posts"][0];
};

const PostItem = ({ post }: PostItemProps) => {
	const { title, image, excerpt, date, slug } = post;

	const formattedDate = new Date(date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	const imagePath = `/images/posts/${slug}/${image}`;
	const linkPath = `/posts/${slug}`;

	return (
		// post
		<li className="shadow-xl shadow-zinc-600 bg-zinc-800 text-center rounded-xl duration-100 active:scale-95">
			<Link href={linkPath}>
				{/* image */}
				<div className="w-full max-h-80 overflow-hidden p-2">
					<Image
						src={imagePath}
						alt={title}
						width={600}
						height={200}
						className="rounded-xl shadow-md shadow-gray-700 h-60 text-white"
					/>
				</div>
				{/* content */}
				<div className="p-4">
					<h3 className="mx-0 my-2 text-2xl text-zinc-200">{title}</h3>
					<time className="italic text-zinc-400 m-6">{formattedDate}</time>
					<p className="leading-6 text-zinc-300 px-4 py-8">{excerpt}</p>
				</div>
			</Link>
		</li>
	);
};

export default PostItem;
