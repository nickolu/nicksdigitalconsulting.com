// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';
import {ChatOpenAI} from 'langchain/chat_models/openai';
import {
  HumanChatMessage,
  SystemChatMessage,
  AIChatMessage,
} from 'langchain/schema';

const chat = new ChatOpenAI({temperature: 0});

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const {input, actions} = req?.body?.params || {input: '', actions: ['']};
  let inputString = '';

  if (Array.isArray(input)) {
    inputString = input.join('\n ');
  } else {
    inputString = input;
  }

  if (!inputString || !actions || actions?.length === 0) {
    res.status(400).json(new AIChatMessage('{"action": "error"}'));
    return;
  }

  const actionsString = actions.join(', ');
  console.log(
    'deciding action for query',
    `actions: ${actionsString}`,
    `input: ${inputString.substring(0, 20)}`
  );
  chat
    .call([
      new SystemChatMessage(
        `You are ActionJSONGeneratorBot, you produce JSON that describes an action a user wants to take on Nick's website, nicksdigitalconsulting.com. 
        The user will say any random thing, and you must decide the most likely out of a given set of actions 
        the user wants to take, and output that as JSON. These are the available actions: [${actionsString}]. 
        If there is no good match, you should output "${actions[0]}".`
      ),
      new HumanChatMessage("I'm just checking out Nick's website"),
      new AIChatMessage('{"action": "about"}'),
      new HumanChatMessage("I'd like to get in touch with Nick"),
      new AIChatMessage('{"action": "contact"}'),
      new HumanChatMessage('Phone number?'),
      new AIChatMessage('{"action": "contact"}'),
      new HumanChatMessage("I'd like to find out more about Nick"),
      new AIChatMessage('{"action": "about"}'),
      new HumanChatMessage('asfjaovijasvsef'),
      new AIChatMessage(`{"action": "${actions[0]}"}`),
      new HumanChatMessage(inputString),
    ])
    .then((response) => {
      console.log('decide-action response:', response);
      res.status(200).json(response);
    })
    .catch((error) => {
      console.error(error);
      res.status(200).json(new AIChatMessage('{"action": "error"}'));
    });
}
