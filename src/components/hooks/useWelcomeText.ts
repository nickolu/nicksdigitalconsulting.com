import axios from 'axios';
import {useState} from 'react';

export const defaultWelcomeMessage =
  "Hey there, I'm Nick's Website! I'm here to help you learn more about Nick and his digital consulting services. Nick is passionate about helping people adapt to the ever-changing world of AI, and he's got some seriously impressive skills to back it up. So, what can I help you with? Are you looking to get in touch with Nick or learn more about his services? Just let me know and I'll point you in the right direction!";

async function fetchWelcomeMessage() {
  const apiUrl = `/api/LLM/welcome-message`;

  try {
    const response = await axios.get(apiUrl);
    return response.data.text;
  } catch (error) {
    throw error;
  }
}

export default function useWelcomeText() {
  const [welcomeText, setWelcomeText] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function generateWelcomeText() {
    setIsLoading(true);
    try {
      const welcomeText = await fetchWelcomeMessage();
      setWelcomeText(welcomeText);
      setIsLoading(false);
    } catch (error) {
      setWelcomeText(defaultWelcomeMessage);
      setIsLoading(false);
    }
  }

  return {welcomeText, setWelcomeText, isLoading, generateWelcomeText};
}
