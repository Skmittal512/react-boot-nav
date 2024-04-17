import About from "./components/about/About"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Contact from "./components/contact/Contact"
import Portfolio from "./components/portfolio/Portfolio"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/portfolio' element={<Portfolio />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
