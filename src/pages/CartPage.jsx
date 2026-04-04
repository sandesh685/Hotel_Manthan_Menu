import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Cart from '../components/Cart.jsx'
import { useCart } from '../state/CartContext.jsx'

const WHATSAPP_PHONE_NUMBER = '919049931713' // <-- replace with your number (countrycode + number)

const TABLE_NAMES = [
  'Table R1',
  'Table R2',
  'Table R3',
  'Table R4',
  'Table R5',
  'Table R6',
  'Table A1',
  'Table A2',
  'Table A3',
  'Table A4',
  'Table A5',
  'Table A6',
  'Table A7',
  'Table A8',
  'Table A9',
  'Table A10',
  'Parcel / Takeaway',
]

function buildWhatsAppMessage({ cartItems, cartTotal, tableName }) {
  const lines = [
    `Table: ${tableName}`,
    '',
    'Order Details:',
    ...cartItems.map((ci, idx) => {
      const subtotal = ci.price * ci.qty
      return `${idx + 1}. ${ci.name} - ${ci.qty} x ₹${ci.price} = ₹${subtotal}`
    }),
    '',
    `Grand Total: ₹${cartTotal}`,
  ]
  return lines.join('\n')
}

export default function CartPage() {
  const { cartItems, cartTotal, clearCart } = useCart()
  const [tableName, setTableName] = useState('')

  const waLink = useMemo(() => {
    if (cartItems.length === 0) return null
    if (!tableName) return null
    const message = buildWhatsAppMessage({
      cartItems,
      cartTotal: cartTotal.toFixed(0),
      tableName,
    })
    const encoded = encodeURIComponent(message)
    return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encoded}`
  }, [cartItems, cartTotal, tableName])

  return (
    <div className="stack">
      <div className="page-head">
        <div>
          <h1 className="page-title">Your Cart</h1>
          <p className="muted">Review quantities and send your order.</p>
        </div>
        <Link className="btn btn-ghost" to="/">
          ← Back to Menu
        </Link>
      </div>

      <section className="panel">
        <h2 className="panel-title">Table Details</h2>
        <div className="filters" style={{ gridTemplateColumns: '1fr' }}>
          <div className="field">
            <label className="label" htmlFor="tableName">
              Table name
            </label>
            <select
              id="tableName"
              className="select"
              value={tableName}
              onChange={(e) => setTableName(e.target.value)}
            >
              <option value="" style={{ color: 'red' }}>
                Select table
              </option>
              {TABLE_NAMES.map((t) => (
                <option key={t} value={t} style={{ color: 'red' }}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <Cart />

      <div className="cart-actions">
        <button
          className="btn btn-ghost"
          onClick={clearCart}
          disabled={cartItems.length === 0}
        >
          Clear Cart
        </button>

        <a
          className="btn btn-whatsapp"
          href={waLink ?? undefined}
          onClick={(e) => {
            if (!waLink) e.preventDefault()
          }}
          target="_blank"
          rel="noreferrer"
          aria-disabled={!waLink}
        >
          Send Order via WhatsApp
        </a>
      </div>
    </div>
  )
}

