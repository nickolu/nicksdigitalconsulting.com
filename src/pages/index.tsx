import Head from 'next/head';
import {Box, Button, TextField, Typography} from '@mui/material';
import {useCallback, useEffect, useState} from 'react';
import PageLoadingSpinner from '@/components/Loaders/PageLoadingSpinner';
import useWelcomeText, {
  defaultWelcomeMessage,
} from '@/components/hooks/useWelcomeText';
import useActionDecider from '@/components/hooks/useActionDecider';
import CurrentSection from '@/components/Sections/CurrentSection';
import AppearingTextWithComponents from '@/components/util/AppearingTextWithComponents';
import BasePageTemplate from '@/components/PageTemplates/BasePageTemplate';

function getActionBodyText(action: string): string {
  switch (action) {
    case 'contact':
      return 'Okay, it sounds like you want to get in touch with Nick';

    default:
      return action;
  }
}

function HomePageContent() {
  const [textFieldValue, setTextFieldValue] = useState<string>('');
  const [userMessage, setUserMessage] = useState<string>('');
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
    (e: {preventDefault: () => void}) => {
      e.preventDefault();
      setUserMessage(textFieldValue);
      try {
        decideAction(textFieldValue, [
          'contact',
          'about',
          'services',
          'random',
        ]);
      } catch (e) {
        setBodyText(defaultWelcomeMessage);
      }
    },
    [textFieldValue, decideAction, setUserMessage]
  );

  if (isWelcomeMessageLoading) {
    return <PageLoadingSpinner />;
  }

  if (isActionDeciderLoading) {
    return <PageLoadingSpinner />;
  }

  return (
    <>
      {userMessage && (
        <Box
          className="info-box"
          sx={{
            border: '1px solid #777',
            color: '#777',
            borderRadius: '5px',
            padding: '16px',
            marginBottom: '1rem',
            backgroundColor: '#fefefe',
          }}
        >
          <Typography component="span">&ldquo;{userMessage}&rdquo;</Typography>
        </Box>
      )}
      {action ? (
        <CurrentSection action={action} />
      ) : (
        bodyText && (
          <Typography>
            <AppearingTextWithComponents
              template={bodyText + ' {0}'}
              components={[
                <Button
                  key="0"
                  sx={{padding: 0, textTransform: 'none'}}
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
      <Box mt={4} component="form" display="flex" onSubmit={handleSubmit}>
        <Box mr={1} width="100%">
          <TextField
            sx={{width: '100%'}}
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

      <BasePageTemplate
        onHomeClick={() => {
          window.location.reload();
        }}
      >
        <HomePageContent />
      </BasePageTemplate>
    </>
  );
}
