import Link from "next/link";

import Logo from "./logo";

const MainNavigation = () => {
	return (
		// header
		<header className="w-full h-24 bg-zinc-900 flex justify-between items-center px-[10%] py-0">
			<Link href="/">
				<Logo />
			</Link>
			<nav>
				<ul className="list-none flex items-baseline m-0 p-0 md:gap-2">
					<li className="mx-4 my-0">
						<Link
							href="/posts"
							className="text-zinc-100 hover:text-zinc-400 active:to-zinc-400 font-bold md:text-2xl"
						>
							All Posts
						</Link>
					</li>
					<li className="mx-4 my-0">
						<Link
							href="/contact"
							className="text-zinc-100 hover:text-zinc-400 active:to-zinc-400 font-bold md:text-2xl"
						>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;
