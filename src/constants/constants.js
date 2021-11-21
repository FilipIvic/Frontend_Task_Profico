import homeIcon from '../data/images/Home.png'
import activeHomeIcon from '../data/images/HomeActive.png'
import generalIcon from '../data/images/General.png'
import activeGeneralIcon from '../data/images/GeneralActive.png'
import businessIcon from '../data/images/Business.png'
import healthIcon from '../data/images/Health.png'
import scienceIcon from '../data/images/Science.png'
import sportIcon from '../data/images/Sports.png'
import technologyIcon from '../data/images/Technology.png'

export const navTabs = [
  {page: 'Home', link: '/', icon: homeIcon, activeIcon: activeHomeIcon},
  {page: 'General', link: '/general', icon: generalIcon, activeIcon: activeGeneralIcon},
  {page: 'Business', link: '/business', icon: businessIcon, activeIcon: activeGeneralIcon},
  {page: 'Health', link: '/health', icon: healthIcon, activeIcon: activeGeneralIcon},
  {page: 'Science', link: '/science', icon: scienceIcon, activeIcon: activeGeneralIcon}, 
  {page: 'Sport', link: '/sport', icon: sportIcon, activeIcon: activeGeneralIcon}, 
  {page: 'Technology', link: '/technology', icon: technologyIcon, activeIcon: activeGeneralIcon}
]

//REACT_APP_API_KEY=847990084f024be1874072f906aba2df 
//ili
//REACT_APP_API_KEY=419e3b8cb0cb43eb9a8a2a2cd8d0809d

export let endpoints = [
  'https://newsapi.org/v2/everything?q=Apple&from=2021-11-12&sortBy=popularity&apiKey=' + process.env.REACT_APP_API_KEY,
  'https://newsapi.org/v2/top-headlines?category=general&from=2021-11-12&sortBy=popularity&apiKey=' + process.env.REACT_APP_API_KEY,
  'https://newsapi.org/v2/top-headlines?category=business&from=2021-11-12&sortBy=popularity&apiKey=' + process.env.REACT_APP_API_KEY,
  'https://newsapi.org/v2/top-headlines?category=health&from=2021-11-12&sortBy=popularity&apiKey=' + process.env.REACT_APP_API_KEY,
  'https://newsapi.org/v2/top-headlines?category=science&from=2021-11-12&sortBy=popularity&apiKey=' + process.env.REACT_APP_API_KEY,
  'https://newsapi.org/v2/top-headlines?category=sport&from=2021-11-12&sortBy=popularity&apiKey=' + process.env.REACT_APP_API_KEY,
  'https://newsapi.org/v2/top-headlines?category=technology&from=2021-11-12&sortBy=popularity&apiKey=' + process.env.REACT_APP_API_KEY
]

//zbog
//"status":"error","code":"rateLimited","message":"You have made too many requests recently.
//Developer accounts are limited to 100 requests over a 24 hour period (50 requests available every 12 hours).
//Please upgrade to a paid plan if you need more requests."

