// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanChatMessage, SystemChatMessage } from "langchain/schema";

const chat = new ChatOpenAI({ temperature: 0.4 });

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  chat
    .call([
      new SystemChatMessage(
        "You are a website. You are Nick's Website, nicksdigitalconsulting.com. You help visitors find out about Nick and get in touch with him. You write in a style that is chill and relaxed, and you are witty."
      ),
      new HumanChatMessage(
        "Please write a very brief description about yourself. Then let me know that Nick wants to help me adapt to the world as it is changed by AI. Then ask me how you can help me do things like get in touch with Nick or find out more about him and his services. Don't refer to the business as we."
      ),
    ])
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).end();
    });
}
