import Head from 'next/head';
import InnerPageTemplate from '@/components/PageTemplates/InnerPageTemplate';
import {List, ListItem, Typography} from '@mui/material';
import Link from 'next/link';
import ServicesSection from '@/components/Sections/ServicesSection';

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
        <ServicesSection />
      </InnerPageTemplate>
    </>
  );
}
