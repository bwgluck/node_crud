import axios from 'axios'
import React, { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import {
  Header,
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation
} from 'carbon-components-react'
import styles from '../styles/Home.module.scss'
import baseUrl from '../utils/baseUrl'

const Employees: NextPage = () => {
  // let [id] = useState('613ed4e2fa6325f9cb69e633')

  async function createEmployee() {
    console.log('create')
    const url = `${baseUrl}/api/employees`
    const ronSwanson = await getRonSwansonQuote()
    const dadJoke = await getDadJoke()
    const payload = {
      firstName: 'Test',
      lastName: 'User',
      hireDate: '2013-11-11',
      role: 'Lackey',
      ronSwanson: ronSwanson,
      dadJoke: dadJoke
    }
    const response = await axios.post(url, payload)
    console.log({response})
    // id = response.data._id
  }

  async function deleteEmployee() {
    console.log('delete')
    const url = `${baseUrl}/api/employees`
    const payload = {}
    const response = await axios.delete(url, payload)
    console.log('Employee deleted', {response})
  }

  async function getDadJoke() {
    const dadJoke = await axios.get('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json'
      }    
    })
      .then(response => {
        console.log(response.data)
        return response.data.joke
      })
    return dadJoke
  }
  
  async function getRonSwansonQuote() {
    const ronQuote = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
      .then(response => {
        console.log(response.data)
        return response.data[0]
      })
    return ronQuote
  }

  function updateEmployee() {
    console.log('update')
  }

  return (
    <div className={styles.container}>
      <Header aria-label="node-crud">
        <HeaderName href="#" prefix="Node">
          CRUD
        </HeaderName>
        <HeaderNavigation aria-label="node-crud">
          <HeaderMenuItem href="/">Home</HeaderMenuItem>
          <HeaderMenuItem isCurrentPage href="/employees">Employees</HeaderMenuItem>
        </HeaderNavigation>
      </Header>
      <Head>
        <title>Employees</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Employees
        </h1>

        <div className={styles.grid}>
          <a
            href="#"
            className={styles.card}
            onClick={() => createEmployee()}
          >
            <h2>Create an employee &rarr;</h2>
            <p>Create a new employee in the database</p>
          </a>

          <a
            href="#"
            className={styles.card}
            onClick={() => updateEmployee()}
          >
            <h2>Update an employee &rarr;</h2>
            <p>Update an employee in the database</p>
          </a>

          <a
            href="#"
            className={styles.card}
            onClick={() => deleteEmployee()}
          >
            <h2>Delete employee &rarr;</h2>
            <p>Delete an employee from the database</p>
          </a>

        </div>
        <p className={styles.description}>
          Employee list:
        </p>
      </main>
    </div>
  )
}

Employees.getInitialProps = async ( { query: { _id } }) => {
  // fetch data on server
  const url = `${baseUrl}/api/employees`
  let response
  if ( _id ) {
    const payload = { params: { _id } }
    response = await axios.get(url, payload)
  } else {
    response = await axios.get(url)
  }
  console.log(response.data);
  // return response data as an object
  return { employees: response.data };
  // note: This object will be merged with existing props
}

export default Employees
