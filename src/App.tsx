import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import SocialSidebar from './components/SocialSidebar'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServicesPage />} />
        </Routes>
        <SocialSidebar />
        <ScrollToTop />
      </div>
    </BrowserRouter>
  )
}

export default App
