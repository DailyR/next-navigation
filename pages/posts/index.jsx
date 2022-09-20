// Example: Adding className with <Link>
import Link from 'next/link'
import Image from 'next/image';

const YourComponent = () => (
  <Image
    href="/"
    src="/images/profile.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name123"
  />
);


export default function LinkClassnameExample() {
  // To add attributes like className, target, rel, etc.
  // add them to the <a> tag, not to the <Link> tag.
  return (
    <div>
    <Link href="/">
      <a>
        Hello test 1111 jump to /
      </a>
    </Link>
    
    <p></p>
    
    <Link href="/posts/first-posts">
      <a>
        Hello test 22222333 jump to /posts/first-posts
      </a>
    </Link>


    <p></p>

    <YourComponent/>
    </div>

  )
}

// Take a look at https://nextjs.org/docs/api-reference/next/link
// to learn more!