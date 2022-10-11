import { connectToDatabase } from "../../../util/mongodb";
import { ObjectId } from "mongodb";


export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  const { db } = await connectToDatabase();

  if (method === "PUT") {
    try {
      await db.collection("teams").fieldToUpdate({ _id: new ObjectId(id) });
      res.status(200).json({ message: "your team card has been updated!!" });
    } catch (error) {
      res.status(500).json(error);
    }
  }
} 