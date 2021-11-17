import React, { useEffect, useState, useRef  } from 'react';
import styles from "./styles.module.css"

const InfiniteScroll = (props) => {

    const [postList, setPostList] = useState([]);
    const [page, setPage] = useState(1);
    const didMountRef = useRef(false)
    
    useEffect(() => {
        let options = {
            root: null,
            rootMargin: "20px",
            threshold: 1.0
         };
        const newList = props.data;
        setPostList(postList.concat(newList))
        // initialize IntersectionObserver
        // and attaching to Load More div
         const observer = new IntersectionObserver(handleObserver, options);
         if (didMountRef.current) {
            observer.observe(didMountRef.current)
         }

    }, []);

    useEffect(() => {
        console.log("Scroll" + page)
        console.log("Get new data by api")
    }, [page])

    // here we handle what happens when user scrolls to Load More div
   // in this case we just update page variable
    const handleObserver = (entities) => {
        const target = entities[0];
        if (target.isIntersecting) {   
            setPage((page) => page + 1)
        }
    }

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
                    Load More
                </div>
            </div>
        </div>
    )
}

export default InfiniteScroll;