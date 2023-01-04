import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDir = path.join(process.cwd(), "posts");

export const getPostsFiles = () => {
	return fs.readdirSync(postDir);
};

export const getPostData = (postIdentifier: string) => {
	const slug = postIdentifier.replace(/\.md$/, "");
	const filePath = path.join(postDir, `${slug}.md`);
	const fileContent = fs.readFileSync(filePath, "utf-8");
	const { data, content } = matter(fileContent);

	return {
		slug,
		...data,
		content,
	};
};

export const getAllPosts = () => {
	const postFiles = getPostsFiles();

	const allPosts = postFiles.map((filename) => getPostData(filename));

	const sortedPosts = allPosts.sort((postA, postB) =>
		// @ts-ignore
		postA.date > postB.date ? -1 : 1
	);

	return sortedPosts;
};

export const getFeaturedPost = () => {
	const allPosts = getAllPosts();
	// @ts-ignore
	return allPosts.filter((post) => post.isFeatured);
};
