import React from 'react'
import Header from '../components/DashboardComponents/Container/Header'
import Hero from '../components/DashboardComponents/Container/Hero'
import About from '../components/DashboardComponents/Container/About'
import WorkExperience from '../components/DashboardComponents/Container/WorkExperience'
import Achievment from '../components/DashboardComponents/Container/Achievment'
const MainPage : React.FC = () => {
  return (
    <div className='bg-white h-screen p-6 w-[90%] m-auto'>
       <Header/>
       <Hero/>
       <About/>
       <WorkExperience/>
       <Achievment/>
    </div>
  )
}

export default MainPage
