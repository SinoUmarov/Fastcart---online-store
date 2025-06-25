import React from 'react'
import { Outlet } from 'react-router'
import Header from '../../shared/components/header/header'
import Footer from '../../shared/components/footer/footer'

const Layout = () => {
  return (
    <div className='max-w-[1400px] m-auto'>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout