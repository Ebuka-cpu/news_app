import Head from 'next/head'
import Image from 'next/image'
import Toolbar from '../components/Toolbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ebuka News App</title>
        <meta name="description" content="Your number one site for the up to date news in Nigeria" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className='page-container'>
         
          <div className={styles.main}>
            <h1>Ebue News App</h1>
            <h3>Your number site for the latest news updates</h3>
          </div>
        </div>
    </div>
  )
}
