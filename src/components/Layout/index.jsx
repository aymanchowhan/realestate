import Head from 'next/head'
import React from 'react'
import Headtop from './Headtop'
import MainHeader from './MainHeader'

function Layout({title='Home'}) {
  return (
    <>
    <Head>
        <title>{title}</title>
    </Head>
    <header>
        <Headtop/>
        <MainHeader/>
    </header>
    </>
  )
}

export default Layout
