import axios from "axios";
import { useState } from "react";

async function fetchDecideAction(input: string, actions: string[]) {
  const apiUrl = `/api/LLM/decide-action`;

  try {
    const response = await axios.post(apiUrl, { params: { input, actions } });
    return JSON.parse(response?.data?.text?.toLowerCase())?.action || "";
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default function useActionDecider() {
  const [action, setAction] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function decideAction(input: string, actions: string[]): Promise<void> {
    setIsLoading(true);
    try {
      const action = await fetchDecideAction(input, actions);
      setAction(action);
      setIsLoading(false);
    } catch (error) {
      setAction("error");
      setIsLoading(false);
    }
  }

  return { action, decideAction, isLoading };
}
