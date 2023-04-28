import Head from "next/head";
import InnerPageTemplate from "@/components/PageTemplates/InnerPageTemplate";
import { List, ListItem, Typography } from "@mui/material";
import Link from "next/link";

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
      <InnerPageTemplate title="Services">
        <Typography>
          My primary goal is to help businesses adapt to the changing world as
          AI becomes more prevalent. But beyond that, I can use AI and software
          to solve just about any problem.
        </Typography>
        <Typography>
          Some of the most common things I do for clients are as follows:
        </Typography>
        <ul>
          <li>
            Train how to use tools like ChatGPT and other AI tools effectively
          </li>
          <li>
            Create custom software to solve unique problems, automate workflows,
            or improve existing services (<Link style={{display: 'inline'}} href="#">examples</Link>)
          </li>
          <li>
            Create, host, and maintain websites and web applications
          </li>
          <li>
            Advise on any technology related decisions
          </li>
        </ul>
      </InnerPageTemplate>
    </>
  );
}
