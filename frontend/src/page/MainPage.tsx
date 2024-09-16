import React from 'react'
import Header from '../components/DashboardComponents/Container/Header'
import Hero from '../components/DashboardComponents/Container/Hero'
import About from '../components/DashboardComponents/Container/About'
import WorkExperience from '../components/DashboardComponents/Container/WorkExperience'
import Achievment from '../components/DashboardComponents/Container/Achievment'
import Projects from '../components/DashboardComponents/Container/Projects'
import Reviews from '../components/DashboardComponents/Container/Reviews'
import Contact from '../components/DashboardComponents/Container/Contact'
import Footer from '../components/DashboardComponents/Container/Footer'
const MainPage : React.FC = () => {
  return (
    <div className='bg-white h-screen p-6 w-[90%] m-auto'>
       <Header/>
       <Hero/>
       <About/>
       <WorkExperience/>
       <Achievment/>
       <Projects/>
       <Reviews/>
       <Contact/>
       <Footer/>
    </div>
  )
}

export default MainPage
