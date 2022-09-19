// Example: Adding className with <Link>
import Link from 'next/link'
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';


export default function LinkClassnameExample() {
  // To add attributes like className, target, rel, etc.
  // add them to the <a> tag, not to the <Link> tag.
  return (
    <>

      <Head>
        <title>First Post Test123</title>
      </Head>

      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    <Link href="/">
      <a className="foo" target="_blank" rel="noopener noreferrer">
        Hello World00000000000000
      </a>

    </Link>
        <Link href="/posts">
      <a className="foo" target="_blank" rel="noopener noreferrer">
        Hello World33333333333
      </a>
    </Link>


    <Layout>
      <Head>
        <title>First123 Post</title>
      </Head>
      
      <h1>First123 Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home123</a>
        </Link>
      </h2>
    </Layout>


    </>
  )
}

// Take a look at https://nextjs.org/docs/api-reference/next/link
// to learn more!