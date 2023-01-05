const ContactForm = () => {
	return (
		// contact
		<section className="mx-auto my-8 rounded-md bg-zinc-300 w-[90%] max-w-4xl p-4 shadow-md text-2xl">
			<h1 className="text-4xl my-4 text-center">How can I help you?</h1>
			{/* form */}
			<form action="">
				{/* controls */}
				<div className="flex flex-wrap gap-4">
					{/* control */}
					<div className="flex-grow">
						<label
							htmlFor="email"
							className="block font-oswald font-bold mt-2 ml-0 mb-1 mr-0"
						>
							Your Email
						</label>
						<input
							type="email"
							id="email"
							required
							className="p-1 rounded-md w-full border border-gray-400 bg-zinc-100 resize-none"
						/>
					</div>
					{/* control */}
					<div className="flex-grow">
						<label
							htmlFor="name"
							className="block font-oswald font-bold mt-2 ml-0 mb-1 mr-0"
						>
							Your Name
						</label>
						<input
							type="text"
							id="name"
							required
							className="p-1 rounded-md w-full border border-gray-400 bg-zinc-100 resize-none"
						/>
					</div>
				</div>
				{/* control */}
				<div className="flex-grow">
					<label
						htmlFor="message"
						className="block font-oswald font-bold mt-2 ml-0 mb-1 mr-0"
					>
						Your Message
					</label>
					<textarea
						name=""
						id=""
						rows={5}
						className="p-1 rounded-md w-full border border-gray-400 bg-zinc-100 resize-none"
					></textarea>
				</div>
				{/* actions */}
				<div className="mt-4 text-right">
					<button className="p-2 bg-purple-800 rounded-md text-white shadow hover:bg-purple-900">
						Send Message
					</button>
				</div>
			</form>
		</section>
	);
};

export default ContactForm;
