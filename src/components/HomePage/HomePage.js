import React, {useState, useEffect} from "react"
import styles from './style.module.css'

import NavigationHeader from '../NavigationHeader/NavigationHeader'
import ArticleCard from '../ArticleCard/ArticleCard'
import InfiniteScroll from '../InfiniteScroll/InfiniteScroll'

const HomePage = (props) => {  

    const [input, setInput] = useState("")

    const articles = !input ? props.data : props.data.filter((article) => article.title.toLocaleLowerCase().includes(input.toLocaleLowerCase()))

    const handleInputChange = (event) => {
        setInput(event.target.value)
        console.log("Input value from handleChange function: ")
        console.log(event.target.value)
    }

    useEffect(() => {
        console.log("HomePage: ComponentDidMount()")
    },[])

    return (
        <div className={styles.articlesContainer}>
            <div className={styles.articlesColumn}>
                <NavigationHeader title={props.title}></NavigationHeader>
            </div>
            <div>
                {props.title}
                <input type="text" placeholder="Search" value={input} onChange={(event)=>handleInputChange(event)}></input>
                <div className={styles.articlesWrapper}>
                    {articles.map((article, index)=> {
                        return(
                            <div className={styles.articleCard} key={index}>
                                {/* <div>{new Date(article.publishedAt).toUTCString()}</div> */}
                                <ArticleCard article={article} link={props.link}></ArticleCard> 
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={styles.articlesColumn3}>
                <div>
                    <InfiniteScroll data={props.data}></InfiniteScroll>
                </div>
            </div>
        </div>  
      );
    }
    
export default HomePage

// return (
//     <div className={styles.articlesContainer}>
//         Home Page
//         <div className={styles.articlesColumn}>
//             <NavigationHeader title={props.title}></NavigationHeader>
//         </div>
//         <div>
//             {props.title}
//             <input type="text" placeholder="Search" value={input} onChange={(event)=>handleInputChange(event)}></input>
//             <div className={styles.articlesWrapper}>
//                 {isError ? <div>Check internet Connection</div> :
//                 isLoading ? <div>Loading</div> :
//                 articles.map((article, index) => {
//                     return(
//                         <div className={styles.articleCard} key={index}>
//                             <ArticleCard article={article} link={props.link}></ArticleCard> 
//                         </div>
//                     )
//                 })}
//             </div>
//         </div>
//         <div className={styles.articlesColumn}>
//             <div className={styles.articleCard}>
//                 AAAAA
//             </div>
//         </div>
//     </div>  
//   );