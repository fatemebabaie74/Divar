import React from 'react'
import styles from "./Layout.module.css"
import Header from './Header'
import Footer from './Footer'
const Layout = ({children}) => {
  return (
    <div>
      <Header/>
     
      <div className={styles.main}>{children}</div>
      <Footer/>

    </div>
  )
}

export default Layout
