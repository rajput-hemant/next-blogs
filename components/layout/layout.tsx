import Head from "next/head";

import MainNavigation from "./main-navigation";

type LayoutProps = {
	children?: React.ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<>
			<Head>
				<title>Next Blogs</title>
				<meta
					name="description"
					content="Next Blogs - Practice project for NextJS course by Academind"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<MainNavigation />
			<main>{children}</main>
		</>
	);
};

export default Layout;
