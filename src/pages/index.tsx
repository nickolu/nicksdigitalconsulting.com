import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Nick&apos;s Digital Consulting</title>
        <meta name="description" content="Digital Consulting by Nick Cunningham" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <h1 className={styles.title}>Nick&apos;s Digital Consulting</h1>
        </div>
      </main>
    </>
  )
}
