import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Home from '../components/Home/Home'
import SideBar from '../components/SideBar/SideBar'

const HomePage = () => {
  return (
    <div className="flex flex-col h-screen">
      <NavBar/>
      <div className="flex flex-1 h-full">
        <SideBar/>
        <Home />
      </div>
    </div>
  )
}

export default HomePage
