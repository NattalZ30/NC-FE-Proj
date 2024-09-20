import Nav from './components/Nav'
import { Route, Routes, useSearchParams } from 'react-router-dom'
import { useEffect } from 'react';
import HomeContainer from "./components/HomeContainer"
import ArticleContainer from './components/ArticleContainer';

import './App.css'

function App() {
  
  const [searchParams, setSearchParams] = useSearchParams()
  useEffect(() => {
    console.log(searchParams)
  },[searchParams])

  return (
    <div className='app'>
      <Nav setSearchParams={setSearchParams}/>
      <Routes>
        <Route path="/" element={<HomeContainer searchParams={searchParams}/>}/>
        <Route path="/articles/:article_id" element={<ArticleContainer/>}/>
      </Routes>
    </div>
  )
}

export default App
