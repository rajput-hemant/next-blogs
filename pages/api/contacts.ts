import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method == "POST") {
		const { name, email, message } = req.body;

		if (
			!email ||
			!email.include("@") ||
			!name ||
			name.trim() === "" ||
			!message ||
			message.trim() === ""
		) {
			res.status(422).json({ message: "Invalid Input" });
			return;
		}

		// Store in a Database
		const newMessage: { [key: string]: string } = {
			email,
			name,
			message,
		};

		res
			.status(201)
			.json({
				message: "Successfully stored message!",
				messageData: newMessage,
			});
	}
};
