import React from 'react'
import NavMenu from "@/Components/Header/header"
import Home from './home'

const index = () => {
  return (
    <>
      <div>
        <NavMenu/>
        <Home/>
      </div>
    </>
  )
}

export default index;