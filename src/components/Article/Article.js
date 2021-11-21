import React from 'react'
import styles from './style.module.css'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography';

const Article = (props) => {  
    return (
          <div className={styles.articleContainer}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h3" color="black" gutterBottom>
                        {props.article.title ? props.article.title : "No Title"}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {props.article.publishedAt ? new Date(props.article.publishedAt).toUTCString() : "No Date"}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {props.article.author ? props.article.author : "Unknown"}
                    </Typography>
                    <br />
                    <Typography variant="body2">
                        {props.article.description ? props.article.description : "No Description"}
                    </Typography>
                    <br />
                    <CardMedia component="img" alt={props.article.source.name} height=""
                        image={props.article.urlToImage ? props.article.urlToImage : 'https://st4.depositphotos.com/14953852/22772/v/1600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg'}>
                    </CardMedia>
                    <Typography variant="body2">
                        {props.article.source.name}
                    </Typography>
                    <br />
                    <Typography variant="body2">
                        {props.article.content ? props.article.content : "No Content" }
                        <br />
                        <a href={props.article.url ? props.article.url : null}>{props.article.url}</a>
                        <br />
                    </Typography>
                </CardContent>
            </Card>
        </div>
      );
    }
    
export default Article