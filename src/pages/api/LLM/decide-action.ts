// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ChatOpenAI } from "langchain/chat_models/openai";
import {
  HumanChatMessage,
  SystemChatMessage,
  AIChatMessage,
  BaseChatMessage,
} from "langchain/schema";

const chat = new ChatOpenAI({ temperature: 0 });

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { input } = req?.body?.params || { input: "" };
  let inputString = "";
  console.log("input1", input);
  if (Array.isArray(input)) {
    inputString = input.join("\n ");
  } else {
    inputString = input;
  }
  console.log("input", inputString);
  chat
    .call([
      new SystemChatMessage(
        `You are ActionJSONGeneratorBot, you produce JSON that describes an action a user wants to take. 
        The user say any random thing, and you have to decide the most likely out of a given set of actions 
        the user wants to take, and output that as JSON. These are the available actions: ["contact", "about", "services", "joke", "random"]. 
        If there is no good match, you should output "about".`
      ),
      new HumanChatMessage("I'm just checking out Nick's website"),
      new AIChatMessage('{"action": "about"}'),
      new HumanChatMessage("I'd like to get in touch with Nick"),
      new AIChatMessage('{"action": "contact"}'),
      new HumanChatMessage("I'd like to find out more about Nick"),
      new AIChatMessage('{"action": "about"}'),
      new HumanChatMessage("asfjaovijasvsef"),
      new AIChatMessage('{"action": "random"}'),
      new HumanChatMessage(inputString),
    ])
    .then((response) => {
      console.log("response", response);
      res.status(200).json(response);
    })
    .catch((error) => {
      console.error(error);
      res.status(200).json(new AIChatMessage('{"action": "error"}'));
    });
}
