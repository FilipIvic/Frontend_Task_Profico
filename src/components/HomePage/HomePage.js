import React, {useState, useEffect} from "react"
import styles from './style.module.css'
import logo from '../../data/images/Logo.png'

import { Link } from "react-router-dom"

import NavigationHeader from '../NavigationHeader/NavigationHeader'
import ArticleCard from '../ArticleCard/ArticleCard'
import InfiniteScroll from '../InfiniteScroll/InfiniteScroll'

const HomePage = (props) => {  

    const [input, setInput] = useState("")
    const [bookmarks, setBookmarks] = useState([])

    const articles = !input ? props.data : props.data.filter((article) => article.title.toLocaleLowerCase().includes(input.toLocaleLowerCase()))

    const handleInputChange = (event) => {
        setInput(event.target.value)
        //console.log("Input value from handleChange function: " + event.target.value)
    }

    const addBookmark = (article) => {
        const myBookmarks = [...bookmarks]
        myBookmarks.push(article)
        setBookmarks(myBookmarks)
        //console.log(bookmarks)
    }

    const deleteBookmark = (article) => {
        let myBookmarks = bookmarks
        myBookmarks = myBookmarks.filter((bookmark)=> bookmark.title !== article.title)
        setBookmarks(myBookmarks)
        //console.log(article)
    }

    useEffect(() => {
        let mylocalData = JSON.parse(localStorage.getItem('bookmarks'));
        setBookmarks(mylocalData ? mylocalData : "")
        //console.log("HomePage: ComponentDidMount()")
    },[])

    useEffect(() => {
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
        //console.log("HomePage: ComponentDidUpdate()")
    },[bookmarks])


    return (
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <div className={styles.header}>
                    <Link to="/">
                        <img className={styles.logo} src={logo} alt="MyNews"></img>
                    </Link>
                </div>
                <input className={styles.searchBar} type="text" placeholder="Search News" value={input} onChange={(event)=>handleInputChange(event)}></input>
            </div>
            <div className={styles.articlesContainer}>
                <div className={styles.articlesColumn}>
                    <NavigationHeader title={props.title}></NavigationHeader>
                </div>
                <div>
                    {bookmarks ? <div>
                        <div className={styles.title}>Bookmarks</div>
                        <div className={styles.bookmarksWrapper}>      
                            {bookmarks ? bookmarks.map((article, index)=>{
                                    return(
                                        <div className={styles.articleCard} key={index}>
                                            <ArticleCard article={article} title={props.title} link={props.link} button="D" externalFunction={()=>deleteBookmark(article)}></ArticleCard> 
                                        </div>
                                    )
                                }) 
                            : null}
                        </div>
                    </div> : null}
                    <div className={styles.title}>News</div>
                    <div className={styles.articlesWrapper}>
                        {articles.map((article, index)=> {
                            return(
                                <div className={styles.articleCard} key={index}>
                                    <ArticleCard article={article} title={props.title} link={props.link} button="B" externalFunction={()=>addBookmark(article)}></ArticleCard> 
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
        </div>
      );
    }
    
export default HomePage