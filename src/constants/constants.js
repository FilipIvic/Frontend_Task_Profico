import homeIcon from '../data/images/Home.png'
import activeHomeIcon from '../data/images/HomeActive.png'
import generalIcon from '../data/images/General.png'
import activeGeneralIcon from '../data/images/GeneralActive.png'
import businessIcon from '../data/images/Business.png'
import healthIcon from '../data/images/Health.png'
import scienceIcon from '../data/images/Science.png'
import sportsIcon from '../data/images/Sports.png'
import technologyIcon from '../data/images/Technology.png'

export const navTabs = [
    {page: 'Home', link: '/', icon: homeIcon, activeIcon: activeHomeIcon},
    {page: 'General', link: '/general', icon: generalIcon, activeIcon: activeGeneralIcon},
    {page: 'Business', link: '/business', icon: businessIcon, activeIcon: activeGeneralIcon},
    {page: 'Health', link: '/health', icon: healthIcon, activeIcon: activeGeneralIcon},
    {page: 'Science', link: '/science', icon: scienceIcon, activeIcon: activeGeneralIcon}, 
    {page: 'Sports', link: '/sports', icon: sportsIcon, activeIcon: activeGeneralIcon}, 
    {page: 'Technology', link: '/technology', icon: technologyIcon, activeIcon: activeGeneralIcon}
  ]
