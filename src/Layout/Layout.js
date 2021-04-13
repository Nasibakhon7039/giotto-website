import React from 'react'
import Footer from '../Components/Footer'
import { GlobalStyle } from '../GlobalStyle'

export default function Layout({ children }) {
  return (
    <div>
      <GlobalStyle />
      {children}
      <Footer />
    </div>
  )
}
