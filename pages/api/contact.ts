import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

const Handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method == "POST") {
		const { name, email, message } = req.body;

		if (
			!email ||
			!email.includes("@") ||
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

		let client;

		try {
			client = await MongoClient.connect(process.env.MONGODB_URI as string);
		} catch (error) {
			res.status(500).json({ message: "Could not connect to database" });
			return;
		}

		const db = client.db();

		try {
			const result = await db.collection("messages").insertOne(newMessage);
			newMessage.id = result.insertedId.toString();
			console.log(result, newMessage);
		} catch (error) {
			client.close();
			res.status(500).json({ message: "Storing message failed" });
		}

		client.close();

		res.status(201).json({
			message: "Successfully stored message!",
			messageData: newMessage,
		});
	}
};

export default Handler;
