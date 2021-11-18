import React from 'react'
import styles from './style.module.css'
import { Link } from "react-router-dom";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ArticleCard = (props) => {  
    return (
        <Link className={styles.link} to={`${props.link}/${props.article.title}`}>
            <Card className={styles.card} sx={{ maxWidth: 350, borderRadius: 3 }}>
                <CardMedia
                component="img"
                alt={props.article.source.name}
                height="110"
                image={props.article.urlToImage ? props.article.urlToImage : 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png'}
                />
                <CardContent>
                <Typography  variant="body3" color="blue">
                    <div className={styles.category}>{props.title}</div>
                </Typography>
                <Typography  variant="body1" color="black">
                    <div className={styles.title}>{props.article.title ? props.article.title.slice(0,25) :
                     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}</div>
                </Typography>
                <Typography  variant="body2" color="text.secondary">
                    <div className={styles.author}>{props.article.author ? props.article.author.slice(0,50) : "Unknown Author"}</div>
                </Typography>
                </CardContent>
            </Card>
        </Link>  
      );
    }
    
export default ArticleCard
