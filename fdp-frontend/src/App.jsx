import './App.css'
import Pizza from './components/Pizza'
import Header from './components/Header'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer'
import ListPizza from './components/ListPizza'

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
          <Routes>
            <Route path = "/addPizza" element = {<Pizza></Pizza>}></Route>
            <Route path = "/listPizza" element = {<ListPizza></ListPizza>}></Route>
          </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
