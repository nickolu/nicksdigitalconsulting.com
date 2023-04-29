// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ChatOpenAI } from "langchain/chat_models/openai";
import {
  HumanChatMessage,
  SystemChatMessage,
  AIChatMessage,
} from "langchain/schema";

const chat = new ChatOpenAI({ temperature: 0 });

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  
  const { input } = req?.body?.params || { input: "" };
  let inputString = "";
  console.log(input)
  if (Array.isArray(input)) {
    inputString = input.join("\n ");
  } else {
    inputString = input;
  }
  console.log(inputString);
  chat
    .call([
      new SystemChatMessage(
        `You are ActionJSONGeneratorBot, you produce JSON that describes an action a user wants to take. 
        The user say any random thing, and you have to decide the most likely out of a given set of actions 
        the user wants to take, and output that as JSON. These are the available actions: ["Contact", "About", "Services", "Joke", "Random"].
        If there is no good match, you should output "Random".`
      ),
      new HumanChatMessage("I'm just checking out Nick's website"),
      new AIChatMessage('{"action": "Random"}'),
      new HumanChatMessage("I'd like to get in touch with Nick"),
      new AIChatMessage('{"action": "Contact"}'),
      new HumanChatMessage("I'd like to find out more about Nick"),
      new AIChatMessage('{"action": "About"}'),
      new HumanChatMessage(inputString),
    ])
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).end();
    });
}
