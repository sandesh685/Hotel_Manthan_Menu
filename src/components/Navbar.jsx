import { NavLink, useNavigate } from 'react-router-dom'
import { useCart } from '../state/CartContext.jsx'

export default function Navbar() {
  const navigate = useNavigate()
  const { cartCount } = useCart()

  return (
    <header className="nav">
      <div className="container nav-inner">
        <button className="brand" onClick={() => navigate('/')}>
          <span className="brand-mark">DM</span>
          <span className="brand-text">
            <span className="brand-title">Digital Menu</span>
            <span className="brand-subtitle muted">Fresh. Fast. Tasty.</span>
          </span>
        </button>

        <nav className="nav-links" aria-label="Primary">
          <NavLink className="nav-link" to="/">
            Menu
          </NavLink>
          <NavLink className="nav-link cart-link" to="/cart">
            Cart
            <span className="badge" aria-label={`${cartCount} items in cart`}>
              {cartCount}
            </span>
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

