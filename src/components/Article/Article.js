import React from 'react'
import styles from './style.module.css'

const Article = (props) => {  
    return (
          <div>
            Article
            <div>
                {props.article.title}
                <h2>{props.article.title ? props.article.title : "No Title"}</h2>
                <div className={styles.div}>{props.article.author ? props.article.author : "Unknown"}</div>
                <p>{props.article.content ? props.article.content : "No Content" }</p>
                <div className={styles.div}>{props.article.description ? props.article.description : "No Description"}</div>
                <div className={styles.div}>{props.article.publishedAt ? new Date(props.article.publishedAt).toUTCString() : "No Date"}</div>
                <div className={styles.div}>{props.article.source.id ? props.article.source.id : "No Id"}</div>
                <div className={styles.div}>{props.article.source.name ? props.article.source.name : "No Name"}</div>
                <div className={styles.div}>
                    <a href={props.article.url ? props.article.url : null}>{props.article.url}</a>
                </div>
                <img className={styles.img} src={props.article.urlToImage ? props.article.urlToImage : 'https://st4.depositphotos.com/14953852/22772/v/1600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg'} 
                alt={props.article.source.name}></img>
            </div>  
          </div>  
      );
    }
    
export default Article