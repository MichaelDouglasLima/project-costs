import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Company from './pages/Company'
import Contact from './pages/Contact'
import NewProject from './pages/NewProject/NewProject'
import Container from './components/layout/Container'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Projects from './pages/Projects/Projects'

function App() {

  return (

    <Router>
      <Navbar />

      <Container customClass="min_height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={< Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/company" element={<Company />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>

      <Footer />
    </Router>

  )
}

export default App
