import Image from "next/image";

const Hero = () => {
	return (
		// hero
		<section className="text-center px-0 py-8 bg-gradient-to-b from-zinc-900 to-zinc-800">
			{/* image */}
			<div className="w-80 h-80 rounded-full overflow-hidden bg-zinc-700 m-auto shadow-md">
				<Image
					src="/images/profile.png"
					alt="Profile Picture"
					width={300}
					height={300}
					className="object-cover w-full h-full"
				/>
			</div>
			<h1 className="text-6xl mx-0 my-4 text-zinc-400">
				Hi, I&apos;m Hemant Rajput
			</h1>
			<p className="text-2xl text-zinc-200 w-[90%] max-w-2xl m-auto">
				I am currently learing ReactJS and NextJs for Web Development and
				Flutter for Mobile App Development.
			</p>
		</section>
	);
};

export default Hero;
