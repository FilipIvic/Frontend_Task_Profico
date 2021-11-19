import React from "react"
import { useParams } from 'react-router-dom'

import Article from '../Article/Article'

const ArticlePage = (props) => {  

    const params = useParams()

    return (
          <div>      
            {props.data.map((article, index) => {
                return(
                    article.title === params.articleTitle ? 
                    <div key={index}>
                        <Article article={article}></Article>
                    </div> : null
                )
            })}
          </div>  
      );
    }
    
export default ArticlePage