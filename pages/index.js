import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div>
      <h1>
        Title Test
      </h1>
      <p>This is a paragraph to test things</p>
      <a href="/cheese">Swiss</a>
    </div>
  )
}
