import { ChangeEvent, useEffect, useState } from "react";

import Notification from "../ui/notification";

const sendContactData = async (contactDetails: { [key: string]: string }) => {
	const resposnse = await fetch("/api/contact", {
		method: "POST",
		body: JSON.stringify(contactDetails),
		headers: {
			"Content-Type": "application/json",
		},
	});

	const data = await resposnse.json();

	if (!resposnse.ok) {
		throw new Error(data.message || "Something went wrong!");
	}
};

const ContactForm = () => {
	const [enteredEmail, setEnteredEmail] = useState("");
	const [enteredName, setEnteredName] = useState("");
	const [enteredMessage, setEnteredMessage] = useState("");
	const [reqStatus, setReqStatus] = useState("");

	/**
	 * to clear the notification after 3 seconds
	 */
	useEffect(() => {
		if (reqStatus === "success" || reqStatus === "error") {
			const timer = setTimeout(() => {
				setReqStatus("");
			}, 3000);

			return () => clearTimeout(timer);
		}
	}, [reqStatus]);

	const sendMessageHandler = async (event: ChangeEvent<HTMLFormElement>) => {
		event.preventDefault();

		setReqStatus("pending");

		try {
			await sendContactData({
				email: enteredEmail,
				name: enteredName,
				message: enteredMessage,
			});

			setReqStatus("success");
			setEnteredEmail("");
			setEnteredName("");
			setEnteredMessage("");
		} catch (error) {
			setReqStatus("error");
		}
	};

	let notification;

	if (reqStatus === "pending") {
		notification = {
			status: "pending",
			title: "Sending message...",
			message: "Your message is on its way!",
		};
	}

	if (reqStatus === "success") {
		notification = {
			status: "success",
			title: "Success!",
			message: "Message sent successfully!",
		};
	}

	if (reqStatus === "error") {
		notification = {
			status: "error",
			title: "Error!",
			message: "Something went wrong!",
		};
	}

	return (
		// contact
		<section className="mx-auto my-8 rounded-md bg-zinc-300 w-[90%] max-w-4xl p-4 shadow-md text-2xl">
			<h1 className="text-4xl my-4 text-center">How can I help you?</h1>
			{/* form */}
			<form action="" onSubmit={sendMessageHandler}>
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
							value={enteredEmail}
							onChange={(event) => setEnteredEmail(event.target.value)}
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
							value={enteredName}
							onChange={(event) => setEnteredName(event.target.value)}
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
						value={enteredMessage}
						onChange={(event) => setEnteredMessage(event.target.value)}
					></textarea>
				</div>
				{/* actions */}
				<div className="mt-4 text-right">
					<button className="p-2 bg-purple-800 rounded-md text-white shadow hover:bg-purple-900">
						Send Message
					</button>
				</div>
			</form>
			{notification && (
				<Notification
					status={notification.status}
					title={notification.title}
					message={notification.message}
				/>
			)}
		</section>
	);
};

export default ContactForm;
