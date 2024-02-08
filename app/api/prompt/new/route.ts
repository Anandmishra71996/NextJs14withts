import Prompt from "@models/prompt";
import connectToDB from "@utils/db";
import { NextApiRequest, NextApiResponse } from "next";

export const POST = async (req: Request) => {
  let data = await (<any>req.json());
  console.log(data);
  let { prompt, userId, tag } = data;
  try {
    await connectToDB();
    let newPrompt = await Prompt.create({ prompt, tag, creator: userId });
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
