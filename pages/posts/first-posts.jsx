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
      <Layout>
      <h1>First Post - First Page Test</h1>
      <h2>
        <Link href="/">
          <a>Back to home [link:/]</a>
        </Link>
      </h2>
    <Link href="/">
      <a >
        Jump to home [link:/]
      </a>

    </Link>
    <p></p>
      <Link href="/posts">
        <a className="foo" >
          Jump to /posts [link:/posts]
        </a>
      </Link>
    </Layout>

    <Layout>
      <Head>
        <title>First123 Post</title>
      </Head>
      
      <h1><Link href="/">Back to home [link:/]</Link></h1>
      <h2>
        <Link href="/">
          <a>Back to home [link:/]</a>
        </Link>
      </h2>
    </Layout>


    </>
  )
}

// Take a look at https://nextjs.org/docs/api-reference/next/link
// to learn more!