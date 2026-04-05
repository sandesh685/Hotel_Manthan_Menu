import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import CartPage from './pages/CartPage.jsx'

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="container app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <footer className="container app-footer">
        <span className="muted">Digital Menu Card • By Smart soft tech </span>
      </footer>
    </div>
  )
}
