import React, { useEffect, useState } from 'react'
import Hero from '../Layout/Hero'
import Feature from '../Layout/Feature'
import Products from '../Components/Products'
import ContactUs from '../Layout/ContactUs'
import Layout from '../Layout/Layout'
import { fetchQuery } from '../utils/utils'

export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function getProducts() {
      const data = await fetchQuery('products')
      setProducts(data)
    }
    getProducts()
  }, [])

  return (
    <Layout>
      <Hero />
      <Products data={products} />
      <Feature />
      <ContactUs />
    </Layout>
  )
}
