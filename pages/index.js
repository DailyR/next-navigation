import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>


      <Link href="https://nextjs.org">
        <h1 className={styles.title}>
          Welcome to <a>Next.js! DailyR Test Project</a>
        </h1>
      </Link>


      <Link href="https://nextjs.org">
      <h1 className="title">
        Learn <a>Next.js!</a>
      </h1>
      </Link>

      <Link href="/posts/first-posts">
      <h1 className="title">
        Learn <a>jump to /posts/first-posts  test</a>
      </h1>
      </Link>



        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <Link href="https://nextjs.org/docs">
        <div className={styles.grid}>
          <a>
            <p>Find in-depth information about Next.js features and API.
            </p>
          </a>
        </div>
        </Link>

        <Link href="https://nextjs.org/learn" >
          <a className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
        </Link>

        <Link href="https://github.com/vercel/next.js/tree/canary/examples">
          <a
            
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>
        </Link>

        <Link href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"        >
          <a
            
            className={styles.card}
          >
            <h2>Deploy111 &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </Link>
     
      </main>

      <footer className={styles.footer}>

        <Link
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          >
        <a
          
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
        </Link>
      </footer>
    </div>
  )
}
