
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import HomePage from './Pages/HomePage'
// import SectionThree from './components/SectionThree/SectionThree'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage/>}/>
      </Route>
    </Routes>
 
    </>
  )
}

export default App
