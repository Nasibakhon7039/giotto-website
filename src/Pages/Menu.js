import React, { useState, useEffect } from 'react'
import Navibar from '../Components/Navibar'
import Menus from '../Layout/Menus'
import Layout from '../Layout/Layout'
import { fetchQuery } from '../utils/utils'

export default function Menu() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function getProducts() {
      const data = await fetchQuery('products')
      setProducts(data)
      console.log('products => ', data)
    }
    async function getCategories() {
      const data = await fetchQuery('categories')
      setCategories(data)
      console.log('categories => ', data)
    }
    getProducts()
    getCategories()
  }, [])
  return (
    <Layout>
      <Navibar />
      <Menus data={products} categories={categories} />
    </Layout>
  )
}
