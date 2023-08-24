import React from 'react'
import Header from '../../Pages/header/Header';
import NavBar from '../../Pages/Navbar/Navbar';
import Features from '../Features/Features';
import PropertyList from '../Property/PropertyList';
import Properties from '../Properties/Properties';
import MailList from '../mailList/mailList';
import Footer from '../Footer/Footer';

function Home() {
  return (
    <>
    <NavBar />
    <Header />
    <div className=' container  py-2 '>
      <Features />
      <h1 className='text-start fs-4 mt-5 mx-2'>Browse by property type</h1>
      <PropertyList />
      <h1 className='text-start fs-4 mt-5 mx-2'>Home guests love</h1>
      <Properties />
      <MailList />
      <Footer />

    </div>
    </>
  )
}

export default Home
