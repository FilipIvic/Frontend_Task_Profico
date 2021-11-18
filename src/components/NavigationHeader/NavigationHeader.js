import React from "react";
import styles from './style.module.css'
import {navTabs} from '../../constants/constants'
import homeLogo from '../../data/images/Home.png'

import { Link } from "react-router-dom";
  
const NavigationHeader = (props) => {
  return(
    <nav className={styles.navigationBar}>
      {navTabs.map((tab, index) => (
        <Link className={styles.link} key={index} to={tab.link}>
          <li className = {tab.page === props.title ? styles.active : ''}><img className={styles.img} src={tab.page === props.title ? tab.activeIcon : tab.icon} alt="logo" ></img></li>
          {/* <li className = {tab.page === props.title ? styles.active : ''}><img className={styles.img} src={homeLogo} alt="logo" ></img></li> */}
        </Link>)
      )}
    </nav> 
  )
}

export default NavigationHeader