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
        <Link to={`${props.link}/${props.article.title}`}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                component="img"
                alt={props.article.source.name}
                height="140"
                image={props.article.urlToImage ? props.article.urlToImage : 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png'}
                />
                <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {props.article.title ? props.article.title.slice(0,200) :
                     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                </Typography>
                </CardContent>
            </Card>
        </Link>  
      );
    }
    
export default ArticleCard
