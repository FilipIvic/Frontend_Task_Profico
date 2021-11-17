import React from "react";
import styles from './style.module.css'
import {navTabs} from '../../constants/constants'

import { Link } from "react-router-dom";
  
const NavigationHeader = (props) => {
  return(
    <nav className={styles.navigationBar}>
      {navTabs.map((tab, index) => (
        <Link key={index} to={tab.link}>
          <li className = {tab.page === props.title ? styles.active : ''}>{tab.page}</li>
        </Link>)
      )}
    </nav> 
  )
}

export default NavigationHeader