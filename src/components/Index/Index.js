import React, {useState, useEffect} from "react"
import axios from 'axios'

import {
    BrowserRouter as Router, Routes, Route,
  } from "react-router-dom";

import HomePage from '../HomePage/HomePage'
import ArticlePage from '../ArticlePage/ArticlePage'
import Loading from '../Loading/Loading'

const Index = () => {  

    const [data, setData] = useState([])
    const [generalData, setGeneralData] = useState([])
    const [sportData, setSportData] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);


    //REACT_APP_API_KEY=847990084f024be1874072f906aba2df
    let endpoints = [
        'https://newsapi.org/v2/everything?q=Apple&from=2021-11-12&sortBy=popularity&apiKey=' + process.env.REACT_APP_API_KEY,
        'https://newsapi.org/v2/top-headlines?category=general&from=2021-11-12&sortBy=popularity&apiKey=' + process.env.REACT_APP_API_KEY,
        'https://newsapi.org/v2/top-headlines?category=sport&from=2021-11-12&sortBy=popularity&apiKey=' + process.env.REACT_APP_API_KEY
    ];
    
    const getData = async () => {

        try{
            await axios.all(endpoints.map((endpoint) =>
                axios.get(endpoint))).then(
                    axios.spread((appleData, generalData, sportData) => {
                        console.log({ appleData, generalData, sportData});
                        const myData = appleData.data.articles.concat(generalData.data.articles).concat(sportData.data.articles)
                        setData(sortByDate(myData))
                        setGeneralData(sortByDate(generalData.data.articles))
                        setSportData(sortByDate(sportData.data.articles))
                        setIsLoading(false)
                })
            );
        } catch (error) {
            console.log(error)
            setIsError(error)
        }
    }

    const sortByDate = (results) => {
        results.sort((article1,article2) => {
            let tempArticle1 = new Date(article1.publishedAt);
            let tempArticle2 = new Date(article2.publishedAt);
            return tempArticle2-tempArticle1;
        })
        return results;
    }

    useEffect(() => {
        console.log("Index: ComponentDidMount()")
        getData()
    },[])

    return (
          <>
            <Router>
                <Routes>
                    <Route exact path="/" element={isError ? <div>Check internet Connection</div> :
                        isLoading ? <Loading></Loading> :
                        <HomePage data={data} link="" title="Home">{console.log(data)}</HomePage>}>
                    </Route>
                    <Route path={"/:articleTitle"} element={isError ? <div>Check internet Connection</div> :
                        isLoading ? <Loading></Loading> :
                        <ArticlePage data={data}></ArticlePage>}>
                    </Route>

                    <Route exact path="/general" element={isError ? <div>Check internet Connection</div> :
                        isLoading ? <Loading></Loading> :
                        <HomePage data={generalData} link="/general" title="General">{console.log(generalData)}</HomePage>}>
                    </Route> 
                    <Route path={"/general/:articleTitle"} element={isError ? <div>Check internet Connection</div> :
                        isLoading ? <Loading></Loading> :
                        <ArticlePage data={generalData}></ArticlePage>}>
                    </Route>
                </Routes>
            </Router>
          </>  
      );
    }
    
export default Index