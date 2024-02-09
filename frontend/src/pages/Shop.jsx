import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/popular/Popular'
import Offers from '../components/offers/Offers'
import Newcollections from '../components/Newcollections/Newcollections'
import Newslater from '../components/Newslater/Newslater'
import Fotter from '../components/Footer/Fotter'

const Shop = () => {
  return (
    <>
      <Hero/>
      <Popular/>
    <Offers/>
    <Newcollections/>
    <Newslater/>
    <Fotter/>
    </>
  )
}

export default Shop