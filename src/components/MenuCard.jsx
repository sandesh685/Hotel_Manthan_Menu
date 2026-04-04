import { useCart } from '../state/CartContext.jsx'

export default function MenuCard({ item }) {
  const { addToCart } = useCart()

  return (
    <article className="card">
      <div className="card-media">
        <img loading="lazy" src={item.imgUrl} alt={item.name} />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3 className="card-title">{item.name}</h3>
          <span className="pill">₹{item.price}</span>
        </div>
        <p className="card-desc">{item.description}</p>
        <div className="card-bottom">
          <span className="chip">{item.category}</span>
          <button className="btn btn-primary" onClick={() => addToCart(item)}>
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  )
}

