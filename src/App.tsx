import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Company from './pages/Company'
import Contact from './pages/Contact'
import NewProject from './pages/NewProject'
import Container from './components/layout/Container'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (

    <Router>
      <Navbar />

      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>

      <Footer />
    </Router>

  )
}

export default App
