import React from 'react'
import Navibar from '../Components/Navibar'
import Menus from '../Layout/Menus'
import { productData } from '../Components/Products/data'
import Layout from '../Layout/Layout'

export default function Menu() {
  console.log('menu')
  return (
    <Layout>
      <Navibar />
      <Menus data={productData} />
    </Layout>
  )
}
