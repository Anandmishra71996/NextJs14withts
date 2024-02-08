import Prompt from "@models/prompt";
import connectToDB from "@utils/db";
import { NextApiRequest, NextApiResponse } from "next";

export const GET = async (req: Request) => {
  try {
    await connectToDB();
    let Prompts = await Prompt.find();
    return new Response(JSON.stringify(Prompts), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
