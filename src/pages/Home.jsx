import { useMemo, useState } from 'react'
import MenuCard from '../components/MenuCard.jsx'
import { menuData } from '../data/menuData.js'

function uniqueCategories(items) {
  const set = new Set(items.map((i) => i.category))
  return ['All', ...Array.from(set).sort((a, b) => a.localeCompare(b))]
}

export default function Home() {
  const categories = useMemo(() => uniqueCategories(menuData), [])
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return menuData.filter((item) => {
      const matchesCategory = category === 'All' || item.category === category
      const matchesQuery = !q || item.name.toLowerCase().includes(q)
      return matchesCategory && matchesQuery
    })
  }, [category, query])

  return (
    <div className="stack">
      <section className="hero-bar">
        <div className="hero-copy">
          <h1 className="page-title">What would you like today?</h1>
          <p className="muted">
            Browse items, add to cart, and place your order via WhatsApp.
          </p>
        </div>

        <div className="filters">
          <div className="field">
            <label className="label" htmlFor="category">
              Category
            </label>
            <select
              id="category"
              className="select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="field field-grow">
            <label className="label" htmlFor="search">
              Search
            </label>
            <input
              id="search"
              className="input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name (e.g. dosa, biryani)"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="grid">
          {filtered.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="empty">
            <h2 className="empty-title">No items found</h2>
            <p className="muted">Try a different category or search.</p>
          </div>
        ) : null}
      </section>
    </div>
  )
}

