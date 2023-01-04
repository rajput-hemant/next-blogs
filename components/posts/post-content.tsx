import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import PostHeader from "./post-header";
import { DUMMY_POSTS } from "../../pages";

const PostContent = () => {
	const imagePath = `/images/posts/${DUMMY_POSTS[0].slug}/${DUMMY_POSTS[0].image}`;

	return (
		<article className="w-[95%] max-w-5xl mx-auto my-8 text-xl bg-zinc-200 rounded-md p-4">
			<PostHeader title={DUMMY_POSTS[0].title} image={imagePath} />
			<ReactMarkdown>{DUMMY_POSTS[0].content}</ReactMarkdown>
		</article>
	);
};

export default PostContent;
