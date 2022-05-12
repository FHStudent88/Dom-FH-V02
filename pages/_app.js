import '../css/style.css'
import '../css/form.css'
import Head from 'next/head'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pet Care App</title>
      </Head>

      <div className="top-bar">
        <div className="nav">
          <Link href="/">
            <a>Home-Verzeichnis</a>
          </Link>
          <Link href="/new">
            <a>Tier hinzufuegen</a>
          </Link>
          <Link href="https://bestfriends.org/">
            <a>Freiwillige Spenden</a>
          </Link>
        </div>
        <a href="/">
        <img
          id="title"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/HaloLights.png/640px-HaloLights.png"
          alt="pet care logo"
        ></img>
        </a>
      </div>
      <div className="grid wrapper">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
