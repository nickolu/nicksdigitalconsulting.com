import Head from "next/head";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import HomePageTemplate from "@/components/PageTemplates/HomePageTemplate";
import AppearingText from "@/components/util/AppearingText";
import PageLoadingSpinner from "@/components/Loaders/PageLoadingSpinner";
import useWelcomeText, {
  defaultWelcomeMessage,
} from "@/components/hooks/useWelcomeText";
import useActionDecider from "@/components/hooks/useActionDecider";
import CurrentSection from "@/components/Sections/CurrentSection";
import Link from "next/link";
import AppearingTextWithComponents from "@/components/util/AppearingTextWithComponents";

function getActionBodyText(action: string): string {
  switch (action) {
    case "contact":
      return "Okay, it sounds like you want to get in touch with Nick";

    default:
      return action;
  }
}

function HomePageContent() {
  const [textFieldValue, setTextFieldValue] = useState<string>("");
  const [bodyText, setBodyText] = useState<string | null>(null);
  const {
    welcomeText,
    generateWelcomeText,
    isLoading: isWelcomeMessageLoading,
  } = useWelcomeText();

  const {
    action,
    decideAction,
    isLoading: isActionDeciderLoading,
  } = useActionDecider();

  useEffect(() => {
    if (!welcomeText) {
      generateWelcomeText().catch(() => null);
    }
  }, [generateWelcomeText, welcomeText]);

  useEffect(() => {
    if (welcomeText) {
      setBodyText(welcomeText);
    }
  }, [welcomeText]);

  useEffect(() => {
    if (action) {
      const actionText = getActionBodyText(action);
      setBodyText(actionText);
    }
  }, [action]);

  const handleSubmit = useCallback(
    (e: { preventDefault: () => void }) => {
      e.preventDefault();
      try {
        decideAction(textFieldValue, [
          "contact",
          "about",
          "services",
          "random",
        ]);
      } catch (e) {
        setBodyText(defaultWelcomeMessage);
      }
    },
    [textFieldValue, decideAction]
  );

  if (isWelcomeMessageLoading) {
    return <PageLoadingSpinner />;
  }

  if (isActionDeciderLoading) {
    return <PageLoadingSpinner />;
  }

  return (
    <>
      {action ? (
        <CurrentSection action={action} />
      ) : (
        bodyText && (
          <Typography>
            <AppearingTextWithComponents
              template={bodyText + " {0}"}
              components={[
                <Button
                  key="0"
                  sx={{ padding: 0, textTransform: "none" }}
                  variant="text"
                  onClick={() => {
                    setBodyText(null);
                    generateWelcomeText().catch(() => null);
                  }}
                >
                  Refresh
                </Button>,
              ]}
            />
          </Typography>
        )
      )}
      <Box component="form" display="flex" onSubmit={handleSubmit}>
        <Box mr={1} width="100%">
          <TextField
            sx={{ width: "100%" }}
            onChange={(e) => setTextFieldValue(e.target.value)}
          />
        </Box>
        <Button type="submit">Submit</Button>
      </Box>
    </>
  );
}

export default function Home() {
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
        <HomePageContent />
      </HomePageTemplate>
    </>
  );
}
