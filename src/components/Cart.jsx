import { useCart } from '../state/CartContext.jsx'

export default function Cart() {
  const { cartItems, incQty, decQty, cartTotal } = useCart()

  if (cartItems.length === 0) {
    return (
      <div className="panel">
        <h2 className="panel-title">Your cart is empty</h2>
        <p className="muted">Add items from the menu to place an order.</p>
      </div>
    )
  }

  return (
    <div className="panel">
      <h2 className="panel-title">Cart</h2>

      <div className="cart-list">
        {cartItems.map((ci) => (
          <div className="cart-row" key={ci.id}>
            <div className="cart-main">
              <div className="cart-name">{ci.name}</div>
              <div className="cart-meta muted">₹{ci.price} each</div>
            </div>

            <div className="qty">
              <button
                className="icon-btn"
                onClick={() => decQty(ci.id)}
                aria-label={`Decrease quantity of ${ci.name}`}
              >
                −
              </button>
              <div className="qty-value" aria-label="Quantity">
                {ci.qty}
              </div>
              <button
                className="icon-btn"
                onClick={() => incQty(ci.id)}
                aria-label={`Increase quantity of ${ci.name}`}
              >
                +
              </button>
            </div>

            <div className="cart-subtotal">
              ₹{(ci.price * ci.qty).toFixed(0)}
            </div>
          </div>
        ))}
      </div>

      <div className="divider" />

      <div className="total-row">
        <span className="total-label">Total</span>
        <span className="total-value">₹{cartTotal.toFixed(0)}</span>
      </div>
    </div>
  )
}

