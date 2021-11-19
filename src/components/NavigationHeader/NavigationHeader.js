import React from "react";
import styles from './style.module.css'
import {navTabs} from '../../constants/constants'

import { Link } from "react-router-dom";
  
const NavigationHeader = (props) => {
  return(
    <nav className={styles.navigationBar}>
      {navTabs.map((tab, index) => (
        <Link className={styles.link} key={index} to={tab.link}>
          <li><img className={styles.img} src={tab.page === props.title ? tab.activeIcon : tab.icon} alt={tab.page} ></img></li>
        </Link>)
      )}
    </nav> 
  )
}

export default NavigationHeader