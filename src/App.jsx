import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Contact from './pages/Contact'
import Faq from './pages/Faq'
import Achievements from './pages/Achievements'
import Research from './pages/Research'
import Knowledge from './pages/Knowledge'
import Algorithm from './pages/Algorithm'
import Gym from './pages/Gym'
import Project from './pages/Project'
import Quant from './pages/Quant'
import Logs from './pages/Logs'
import Gate from './pages/Gate'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout><Home /></Layout>} path="/" />
        <Route element={<Layout><Profile /></Layout>} path="/profile" />
        <Route element={<Layout><Contact /></Layout>} path="/contact" />
        <Route element={<Layout><Faq /></Layout>} path="/faq" />
        <Route element={<Layout><Achievements /></Layout>} path="/achievements" />
        <Route element={<Layout><Research /></Layout>} path="/research" />
        <Route element={<Layout><Knowledge /></Layout>} path="/knowledge" />
        <Route element={<Layout><Algorithm /></Layout>} path="/algorithm" />
        <Route element={<Layout><Gym /></Layout>} path="/gym" />
        <Route element={<Layout><Project /></Layout>} path="/project" />
        <Route element={<Layout><Quant /></Layout>} path="/quant" />
        <Route element={<Layout><Logs /></Layout>} path="/logs" />
        <Route element={<Layout><Gate /></Layout>} path="/gate" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
