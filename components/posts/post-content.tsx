import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import PostHeader from "./post-header";
import { PostDetailPageProps } from "../../pages/posts/[slug]";

const PostContent = ({ posts }: PostDetailPageProps) => {
	const imagePath = `/images/posts/${posts.slug}/${posts.image}`;

	return (
		<article className="w-[95%] max-w-5xl mx-auto my-8 text-xl bg-zinc-200 rounded-md p-4">
			<PostHeader title={posts.title} image={imagePath} />
			<ReactMarkdown>{posts.content}</ReactMarkdown>
		</article>
	);
};

export default PostContent;
