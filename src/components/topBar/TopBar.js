import React from 'react'
import styles from './TopBarStyle.module.css'
import shoppingCartIcon from './../../img/shopping-cart.png'
import logo from './../../img/logo.png'
import {NavLink} from "react-router-dom";

function TopBar(props) {
    return (
        <div className={styles.topBarBox}>
            <NavLink to='/'><img src={logo} className={styles.logo} alt="Logo"/></NavLink>
            <h1>{props.header}</h1>
            <NavLink to='/basket'><img src={shoppingCartIcon} className={styles.icon} alt="Shopping Cart" /></NavLink>
        </div>
    )
}

export default TopBar