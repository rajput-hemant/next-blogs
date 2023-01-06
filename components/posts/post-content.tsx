import Image from "next/image";
import { Prism } from "react-syntax-highlighter";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import PostHeader from "./post-header";
import { PostDetailPageProps } from "../../pages/posts/[slug]";

const PostContent = ({ posts }: PostDetailPageProps) => {
	const imagePath = `/images/posts/${posts.slug}/${posts.image}`;

	/**
	 * Custom components for markdown
	 */
	const customComponents = {
		/**
		 * this will be used to replace the img tag to next/image tag for better performance
		 */
		// img: ({ alt, src }: any) => {
		// 	return (
		// 		<Image
		// 			src={`/images/posts/${posts.slug}/${src}`}
		// 			alt={alt}
		// 			height={300}
		// 			width={600}
		// 		/>
		// 	);
		// },

		/**
		 * this will replace all p tags with img tag as its first child with next/image tag
		 */
		p: ({ children, node }: any) => {
			if (node.children[0].tagName === "img") {
				const {
					properties: { alt, src },
				} = node.children[0];

				return (
					<Image
						src={`/images/posts/${posts.slug}/${src}`}
						alt={alt}
						height={300}
						width={600}
						// priority={true}
						className="mx-auto my-4 w-full max-w-xl"
					/>
				);
			}
			return <p>{children}</p>;
		},

		/**
		 * this will replace all code tags with prism component with syntax highlighting
		 */
		code: ({ className, children }: any) => {
			return (
				<Prism style={atomDark} language={className.substring(9)}>
					{children[0]}
				</Prism>
			);
		},
	};

	return (
		<article className="w-[95%] max-w-5xl mx-auto my-8 text-xl bg-zinc-200 rounded-md p-4">
			<PostHeader title={posts.title} image={imagePath} />
			<ReactMarkdown components={customComponents}>
				{posts.content}
			</ReactMarkdown>
		</article>
	);
};

export default PostContent;
