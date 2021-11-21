import React, {useState, useEffect} from "react"
import axios from 'axios'

import {
    BrowserRouter as Router, Routes, Route,
} from "react-router-dom"

import {endpoints} from '../../constants/constants'

import ScrollToTop from '../ScrollToTop/ScrollToTop'
import HomePage from '../HomePage/HomePage'
import ArticlePage from '../ArticlePage/ArticlePage'
import Loading from '../Loading/Loading'

const Index = () => {  

    const [data, setData] = useState([])
    const [generalData, setGeneralData] = useState([])
    const [businessData, setBusinessData] = useState([])
    const [healthData, setHealthData] = useState([])
    const [scienceData, setScienceData] = useState([])
    const [sportData, setSportData] = useState([])
    const [technologyData, setTechnologyData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    
    const getData = async () => {
        try{
            await axios.all(endpoints.map((endpoint) =>
                axios.get(endpoint))).then(
                    axios.spread((appleData, generalData, businessData, healthData, scienceData, sportData, technologyData) => {
                        //console.log({ appleData, generalData, sportData})
                        const myData = (appleData.data.articles.slice(0,4)).concat(generalData.data.articles.slice(0,4)).concat(businessData.data.articles.slice(0,4)).concat(healthData.data.articles.slice(0,4)).concat(scienceData.data.articles.slice(0,4)).concat(sportData.data.articles.slice(0,4)).concat(technologyData.data.articles.slice(0,4))
                        setData(sortByDate(myData))
                        setGeneralData(sortByDate(generalData.data.articles))
                        setBusinessData(businessData.data.articles)
                        setHealthData(healthData.data.articles)
                        setScienceData(scienceData.data.articles)
                        setSportData(sortByDate(sportData.data.articles))
                        setTechnologyData(technologyData.data.articles)
                        setIsLoading(false)
                    })
                )
        }catch(error) {
            //console.log(error)
            setIsError(error)
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

    useEffect(() => {
        //console.log("Index: ComponentDidMount()")
        getData()
    },[])

    return (
          <>
            <Router>
                <Routes>

                    <Route exact path="/" element={isError ? <div>Check internet Connection</div> :
                        isLoading ? <Loading></Loading> :
                        <HomePage data={data} link="" title="Home"></HomePage>}>
                    </Route>
                    <Route path={"/:articleTitle"} element={isError ? <div>Check internet Connection</div> :
                        isLoading ? <Loading></Loading> : <ScrollToTop><ArticlePage data={data}></ArticlePage></ScrollToTop>}> 
                    </Route>

                    <Route exact path="/general" element={isError ? <div>Check internet Connection</div> :
                        isLoading ? <Loading></Loading> :
                        <HomePage data={generalData} link="/general" title="General"></HomePage>}>
                    </Route> 
                    <Route path={"/general/:articleTitle"} element={isError ? <div>Check internet Connection</div> :
                        isLoading ? <Loading></Loading> :
                        <ScrollToTop><ArticlePage data={generalData}></ArticlePage></ScrollToTop>}>
                    </Route>

                    <Route exact path="/business" element={isError ? <div>Check internet Connection</div> :
                        isLoading ? <Loading></Loading> :
                        <HomePage data={businessData} link="/business" title="Business"></HomePage>}>
                    </Route> 
                    <Route path={"/business/:articleTitle"} element={isError ? <div>Check internet Connection</div> :
                        isLoading ? <Loading></Loading> :
                        <ScrollToTop><ArticlePage data={businessData}></ArticlePage></ScrollToTop>}>
                    </Route>

                    <Route exact path="/health" element={isError ? <div>Check internet Connection</div> :
                        isLoading ? <Loading></Loading> :
                        <HomePage data={healthData} link="/health" title="Health"></HomePage>}>
                    </Route> 
                    <Route path={"/health/:articleTitle"} element={isError ? <div>Check internet Connection</div> :
                        isLoading ? <Loading></Loading> :
                        <ScrollToTop><ArticlePage data={healthData}></ArticlePage></ScrollToTop>}>
                    </Route>

                    <Route exact path="/science" element={isError ? <div>Check internet Connection</div> :
                        isLoading ? <Loading></Loading> :
                        <HomePage data={scienceData} link="/science" title="Science"></HomePage>}>
                    </Route> 
                    <Route path={"/science/:articleTitle"} element={isError ? <div>Check internet Connection</div> :
                        isLoading ? <Loading></Loading> :
                        <ScrollToTop><ArticlePage data={scienceData}></ArticlePage></ScrollToTop>}>
                    </Route>
                    
                    <Route exact path="/sport" element={isError ? <div>Check internet Connection</div> :
                        isLoading ? <Loading></Loading> :
                        <HomePage data={sportData} link="/sport" title="Sport"></HomePage>}>
                    </Route> 
                    <Route path={"/sport/:articleTitle"} element={isError ? <div>Check internet Connection</div> :
                        isLoading ? <Loading></Loading> :
                        <ScrollToTop><ArticlePage data={sportData}></ArticlePage></ScrollToTop>}>
                    </Route>

                    <Route exact path="/technology" element={isError ? <div>Check internet Connection</div> :
                        isLoading ? <Loading></Loading> :
                        <HomePage data={technologyData} link="/technology" title="Technology"></HomePage>}>
                    </Route> 
                    <Route path={"/technology/:articleTitle"} element={isError ? <div>Check internet Connection</div> :
                        isLoading ? <Loading></Loading> :
                        <ScrollToTop><ArticlePage data={technologyData}></ArticlePage></ScrollToTop>}>
                    </Route>
                </Routes>
            </Router>
          </>  
      );
    }
    
export default Index