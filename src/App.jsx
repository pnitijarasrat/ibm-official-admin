import Nav from './Nav/Nav'
import Home from './Home/Home'
import Recruit from './Recruit/Recruit'
import NewRecruitment from './Recruit/NewRecruitment'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recruit' element={<Recruit />} />
        <Route path='/new-recruitment' element={<NewRecruitment />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
