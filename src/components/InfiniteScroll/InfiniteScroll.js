import React, { useEffect, useState, useRef  } from 'react';
import styles from "./styles.module.css"
import axios from 'axios'

const InfiniteScroll = (props) => {

    const [postList, setPostList] = useState([])
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(true)
    const didMountRef = useRef(false)

    const getData = async () => {
        try{
            const response = await axios.get('https://newsapi.org/v2/everything?q=bitcoin&from=2021-11-12&sortBy=popularity&apiKey=419e3b8cb0cb43eb9a8a2a2cd8d0809d')
            const oldData = postList
            const newData = oldData.concat(sortByDate(response.data.articles))
            setPostList(newData);
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    const sortByDate = (results) => {
        results.sort((article1, article2) => {
            let tempArticle1 = new Date(article1.publishedAt)
            let tempArticle2 = new Date(article2.publishedAt)
            return tempArticle2-tempArticle1
        })
        return results
    }
    
    const handleObserver = (entities) => {
        const target = entities[0]
        if (target.isIntersecting) {   
            setPage((page) => page + 1)
        }
    }
    
    useEffect(() => {
        let options = {
            rootMargin: "20px",
            threshold: 1.0
         }

        const newList = props.data;
        setPostList(postList.concat(sortByDate(newList.slice(0,10))))
        
         const observer = new IntersectionObserver(handleObserver, options)
         if (didMountRef.current) {
            observer.observe(didMountRef.current)
         }
    }, [])

    //Trebvalo bi svaki put promijeniti endpoint url tako dohvaća nove, ali rezličite vijesti

    useEffect(() => {
        //console.log("Scroll" + page)
        console.log("Get new data by api")
        getData()
        
    }, [page])

    return(
        <div className={styles.containerStyle}>
            <div>
                {postList.map((post, index) => {
                    return(
                        <div key={index} className={styles.div}>
                            <p>{post.title}</p>
                        </div>
                        )
                })}
                <div className="loading" ref={didMountRef}>
                    {isLoading ? "" : "Loading"}
                </div>
            </div>
        </div>
    )
}

export default InfiniteScroll;