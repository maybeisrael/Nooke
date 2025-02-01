import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../api/mongodb"; // Ensure the correct path

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and Password are required" });
    }

    console.log("Received Data:", { email, password });

    const client = await clientPromise;
    const db = client.db("Gunner"); // Your database name
    const collection = db.collection("users"); // Collection name

    const result = await collection.insertOne({ email, password });

    return res.status(201).json({ message: "User saved successfully!", data: result });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error saving user:", error.message);
      res.status(500).json({ error: error.message });
    } else {
      console.error("An unknown error occurred:", error);
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
  
}
