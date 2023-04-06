import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import prisma from "../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    //Check if user is signed in
    const session = await getServerSession(req, res, authOptions);
    if (!session)
      return res.status(401).json({ message: "Please sign in to make a post" });

    //Find User
    const user = await prisma.user.findUnique({
      where: { email: session?.user?.email },
    });

    const title: string = req.body.title;

    //Check Title
    if (title.length > 300)
      return res.status(403).json({ message: "Please write a shorter post" });
    if (!title.length)
      return res.status(403).json({ message: "Post cannot be empty" });

    //Create Post
    try {
      const result = await prisma.post.create({
        data: {
          title,
          userId: user.id,
        },
      });
      res.status(200).json(result);
    } catch (error) {
      res
        .status(403)
        .json({ error: "There was an error while creating your post" });
    }
  }
}
