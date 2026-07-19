import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Gym from './pages/Gym'
import Projects from './pages/Projects'
import Quant from './pages/Quant'
import Logs from './pages/Logs'
import Gate from './pages/Gate'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout><Home /></Layout>} path="/" />
        <Route element={<Layout><Gym /></Layout>} path="/gym" />
        <Route element={<Layout><Projects /></Layout>} path="/projects" />
        <Route element={<Layout><Quant /></Layout>} path="/quant" />
        <Route element={<Layout><Logs /></Layout>} path="/logs" />
        <Route element={<Layout><Gate /></Layout>} path="/gate" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
