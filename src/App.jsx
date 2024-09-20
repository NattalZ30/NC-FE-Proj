import Nav from './components/Nav'
import { Route, Routes, useSearchParams } from 'react-router-dom'
import HomeContainer from "./components/HomeContainer"
import ArticleContainer from './components/ArticleContainer';

import './App.css'

function App() {
  
  const [searchParams, setSearchParams] = useSearchParams()

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
