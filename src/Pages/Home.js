import React from 'react'
import Hero from '../Layout/Hero'
import Feature from '../Layout/Feature'
import Products from '../Components/Products'
import { productData } from '../Components/Products/data'
import ContactUs from '../Layout/ContactUs'
import Layout from '../Layout/Layout'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Products data={productData} />
      <Feature />
      <ContactUs />
    </Layout>
  )
}
