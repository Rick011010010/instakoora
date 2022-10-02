import { connectToDatabase } from "../../../util/mongodb";
import { Timestamp } from "mongodb";




export default async function handler(req, res) {
  
  const { method, body } = req;

  const { db } = await connectToDatabase();

  if (method === "GET") {
    try {
      const players = await db
        .collection("players")
        .find()
        .sort({ timestamp: -1 })
        .toArray();
      res.status(200).json(players);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (method === "POST") {
    try {
      const players = await db
        .collection("players")
        .insertOne({ ...body, timestamp: new Timestamp() });
      res.status(201).json(players);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}