import axios from 'axios'
import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import {
  Header,
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation
} from 'carbon-components-react'
import styles from '../styles/Home.module.scss'

const Employees: NextPage = () => {

  return (
    <div className={styles.container}>
      <Header aria-label="node-crud">
        <HeaderName href="#" prefix="Node">
          CRUD
        </HeaderName>
        <HeaderNavigation aria-label="node-crud">
          <HeaderMenuItem href="/">Home</HeaderMenuItem>
          <HeaderMenuItem isCurrentPage href="/employees">Employees</HeaderMenuItem>
          <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
        </HeaderNavigation>
      </Header>
      <Head>
        <title>Employees</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Employees!
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}

Employees.getInitialProps = async () => {
  // fetch data on server
  const url = 'http://localhost:3000/api/employees'
  const response = await axios.get(url)
  console.log(response.data);
  // return response data as an object
  return { employees: response.data };
  // note: This object will be merged with existing props
}

export default Employees
