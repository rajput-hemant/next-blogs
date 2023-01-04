import Image from "next/image";

type PostHeaderProps = {
	title: string;
	image: string;
};

const PostHeader = ({ title, image }: PostHeaderProps) => {
	return (
		<header className="pb-8 border-b-8 border-purple-500 mx-0 my-4 flex flex-col-reverse justify-between items-center gap-4 md:mx-0 md:my-8 md:flex-row md:items-end">
			<h1 className="text-4xl text-purple-800 m-0 text-center md:text-6xl">
				{title}
			</h1>
			<Image
				src={image}
				alt={title}
				width={200}
				height={150}
				className="object-cover w-52 h-40 rounded-md shadow-2xl"
			/>
		</header>
	);
};

export default PostHeader;
