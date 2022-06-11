import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Components/HomePage'
import BestStories from '../Components/MyBestStories'
import ButtonAppBar from '../Components/Navbar'
import NewStories from '../Components/NewStories'
import PageNotFound from '../Components/PageNotFound'


const Router = () => {
  return (
    <div>
<ButtonAppBar />
<Routes>

<Route path="/" element={<HomePage />}  />
<Route path="/newStories" element={<NewStories />} />
<Route path="/bestStories" element={<BestStories />} />
<Route path="*" element={<PageNotFound />} />
</Routes>

    </div>
  )
}

export default Router