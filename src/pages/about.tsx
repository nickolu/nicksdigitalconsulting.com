import Head from 'next/head';
import InnerPageTemplate from '@/components/PageTemplates/InnerPageTemplate';
import {Typography} from '@mui/material';
import Link from 'next/link';
import AboutSection from '@/components/Sections/AboutSection';

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
      <InnerPageTemplate title="About">
        <AboutSection />
      </InnerPageTemplate>
    </>
  );
}
