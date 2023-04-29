import Head from "next/head";
import HomePageTemplate from "@/components/PageTemplates/HomePageTemplate";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import ContactSection from "@/components/Sections/ContactSection";
import AboutSection from "@/components/Sections/AboutSection";
import ServicesSection from "@/components/Sections/ServicesSection";
import RandomSection from "@/components/Sections/RandomSection";

const defaultWelcomeMessage =
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

async function fetchDecideAction(input: string) {
  const apiUrl = `/api/LLM/decide-action`;

  try {
    const response = await axios.post(apiUrl, { params: { input } });
    return response?.data?.text?.toLowerCase() || "";
  } catch (error) {
    console.error(error);
    throw error;
  }
}

function actionToWelcomeText(action: { action: string }): string {
  switch (action.action) {
    case "contact":
      return "Okay, it sounds like you want to get in touch with Nick";
    default:
      return action.action;
  }
}

function CurrentSection({ action }: { action: string }) {
  switch (action) {
    case "contact":
      return <ContactSection />;
    case "about":
      return <AboutSection />;
    case "services":
      return <ServicesSection />;
    default:
      return <RandomSection />;
  }
}

export default function Home() {
  const [welcomeText, setWelcomeText] = useState<string | null>(null);
  const [textFieldValue, setTextFieldValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [action, setAction] = useState<string>("");

  useEffect(() => {
    const isClient = typeof window !== "undefined";
    if (!isClient) return;
    fetchWelcomeMessage()
      .then((welcomeMessage) => {
        setWelcomeText(welcomeMessage);
        setIsLoading(false);
      })
      .catch(() => {
        setWelcomeText(defaultWelcomeMessage);
        setIsLoading(false);
      });
  }, []);

  const handleSubmit = useCallback(
    (e: { preventDefault: () => void }) => {
      e.preventDefault();
      setIsLoading(true);
      fetchDecideAction(textFieldValue)
        .then((action) => {
          try {
            const parsedAction = JSON.parse(action);
            const newWelcomeText = actionToWelcomeText(parsedAction);
            setWelcomeText(newWelcomeText);
            setAction(parsedAction.action);
            setIsLoading(false);
          } catch (error) {
            console.error(error);
            setWelcomeText(defaultWelcomeMessage);
          }
        })
        .catch(() => {
          setWelcomeText(defaultWelcomeMessage);
          setIsLoading(false);
        });
    },
    [textFieldValue]
  );

  return (
    <>
      <Head>
        <title>Nick&apos;s Digital Consulting</title>
        <meta
          name="description"
          content="Digital Consulting by Nick Cunningham"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePageTemplate>
        {isLoading && <Typography>Loading...</Typography>}
        {!isLoading && welcomeText && (
          <>
            <Typography>{welcomeText}</Typography>
            {action && <CurrentSection action={action} />}
            <Box component="form" display="flex" onSubmit={handleSubmit}>
              <Box mr={1} width="100%"><TextField
                sx={{ width: "100%" }}
                onChange={(e) => setTextFieldValue(e.target.value)}
              /></Box>
              <Button type="submit">Submit</Button>
            </Box>
          </>
        )}
      </HomePageTemplate>
    </>
  );
}
