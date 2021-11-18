import React from 'react'
import styles from './style.module.css'

const Loading = () => {  
    return (
        <div className={styles.container}>
            <div className={styles.loader}>
                Loading
            </div>
        </div>
        
    );
}
    
export default Loading