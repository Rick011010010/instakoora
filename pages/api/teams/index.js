import { connectToDatabase } from "../../../util/mongodb";
import { Timestamp } from "mongodb";




export default async function handler(req, res) {
  
  const { method, body,query } = req;

  const { db } = await connectToDatabase();

  if (method === "GET") {
    const user=query.user
    try {
      const teams = await db
        .collection("teams")
        .find({email:user})
        .sort({ timestamp: -1 })
        .toArray();
      res.status(200).json(teams);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (method === "POST") {
    try {
      const teams = await db
        .collection("teams")
        .insertOne({ ...body, timestamp: new Timestamp() });
      res.status(201).json(teams);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}