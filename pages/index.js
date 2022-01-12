import Head from 'next/head'
import Navbar from '../components/navbar/navbar.jsx';
import HomeFirstSection from '../components/homeFirstSection.jsx';

export default function Home() {
  return (
      <div className="container">
        <Head>
          <title>Test technique</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            rel="stylesheet"
          />
        </Head>
          <Navbar />
          <HomeFirstSection />
      </div>
  )
}
