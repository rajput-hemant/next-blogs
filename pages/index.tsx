import Hero from "../components/homepage/hero";
import FeaturedPosts from "../components/homepage/featured-posts";

export const DUMMY_POSTS = [
	{
		title: "Getting Started with Next.js",
		image: "getting-started-nextjs.png",
		excerpt:
			"Next.js is the React Framework for Production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR and SSG.",
		date: "2022-02-10",
		slug: "getting-started-with-nextjs",
		content: "# Getting Started",
	},
	{
		title: "Getting Started with Next.js",
		image: "getting-started-nextjs.png",
		excerpt:
			"Next.js is the React Framework for Production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR and SSG.",
		date: "2022-02-10",
		slug: "getting-started-with-nextjs",
		content: "# Getting Started",
	},
	{
		title: "Getting Started with Next.js",
		image: "getting-started-nextjs.png",
		excerpt:
			"Next.js is the React Framework for Production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR and SSG.",
		date: "2022-02-10",
		slug: "getting-started-with-nextjs",
		content: "# Getting Started",
	},
	{
		title: "Getting Started with Next.js",
		image: "getting-started-nextjs.png",
		excerpt:
			"Next.js is the React Framework for Production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR and SSG.",
		date: "2022-02-10",
		slug: "getting-started-with-nextjs",
		content: "# Getting Started",
	},
	{
		title: "Getting Started with Next.js",
		image: "getting-started-nextjs.png",
		excerpt:
			"Next.js is the React Framework for Production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR and SSG.",
		date: "2022-02-10",
		slug: "getting-started-with-nextjs",
		content: "# Getting Started",
	},
	{
		title: "Getting Started with Next.js",
		image: "getting-started-nextjs.png",
		excerpt:
			"Next.js is the React Framework for Production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR and SSG.",
		date: "2022-02-10",
		slug: "getting-started-with-nextjs",
		content: "# Getting Started",
	},
];

const HomePage = () => {
	return (
		<>
			<Hero />
			<FeaturedPosts posts={DUMMY_POSTS} />
		</>
	);
};

export default HomePage;
