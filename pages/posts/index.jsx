// Example: Adding className with <Link>
import Link from 'next/link'
import Image from 'next/image';
import axios from 'axios'
import React from 'react'
import Layout from '../../components/layout';


async function getPosts() {

  const result = await axios.get('http://127.0.0.1:3000/api/hello')
  console.log(result)
  return result.data

};

function TestPage(){

  //const [posts, setPosts] = React.useState([])
  console.log("2222222")

  async function initial() {

    const result = await getPosts()
    console.log("11111111111111")
    console.log({result})
    console.log(result.text)
    //setPosts(result)
  }
  initial()

  console.log("33333333333333")

};




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
    <Layout>
    <Link href="/">
      
        Hello1 test 111 [link:/]
      
    </Link>
    
    <p></p>
    
    <Link href="/posts/first-posts">
     
        Hello2 test 222 [link:/posts/first-posts]
      
    </Link>

    <p></p>

    <Link href="/posts/axios_test">
     
        Hello2 axios_test 333 [link:/posts/axios_test]
      
    </Link>


    <p></p>
    <TestPage/>
    <YourComponent/>

    </Layout>
    </div>

  )
}

// Take a look at https://nextjs.org/docs/api-reference/next/link
// to learn more!