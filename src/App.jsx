import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from "react";
import { getTopics } from "../api";
import HomeContainer from "./components/HomeContainer"
import ArticleContainer from './components/ArticleContainer';

import './App.css'

function App() {

  const [topics, setTopics] = useState([])

  useEffect(() => {
     getTopics()
      .then((data) => {
          setTopics(data)
      })}, []
  )

  return (
    <div className='app'>
      <Nav topics={topics}/>
      <Routes>
        <Route path="/" element={<HomeContainer/>}/>
        <Route path="/articles/:article_id" element={<ArticleContainer/>}/>
      </Routes>
    </div>
  )
}

export default App
