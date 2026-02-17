import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import SocialSidebar from './components/SocialSidebar'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import CoursesPage from './pages/CoursesPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/cursos" element={<CoursesPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Routes>
        <SocialSidebar />
        <ScrollToTop />
      </div>
    </BrowserRouter>
  )
}

export default App
