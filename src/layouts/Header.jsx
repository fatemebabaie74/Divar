import React from 'react'
import styles from "./Header.module.css"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
<header className={styles.header}>
    <div>
       <Link to="/">
        <img src="divar.svg" className={styles.logo} />
       </Link>
       <span>
        <Link>
        <img src="location.svg" />
        <p>تهران</p>
        </Link>
       </span>
    </div>
    <div>
        <Link to="/auth">
            <span>
                <img src="profile.svg" />
                <p> دیوار من</p>
            </span>
        </Link>
        <Link to="/dashboard" className={styles.button}>ثبت آگهی</Link>
    </div>
</header>
  )
}

export default Header
