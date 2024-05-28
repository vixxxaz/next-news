
import Head from 'next/head'
 
function IndexPage() {
  return (
    <div className='hidden'>
      <Head>
        <title>Next-News</title>
        <meta property="og:title" content="Next-News" key="title" />
      </Head>     
    </div>
  )
}
 
export default IndexPage