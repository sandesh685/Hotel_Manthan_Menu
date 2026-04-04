import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

function upsertCartItem(cartItems, menuItem, qtyToAdd = 1) {
  const existing = cartItems.find((ci) => ci.id === menuItem.id)
  if (!existing) return [...cartItems, { ...menuItem, qty: qtyToAdd }]
  return cartItems.map((ci) =>
    ci.id === menuItem.id ? { ...ci, qty: ci.qty + qtyToAdd } : ci,
  )
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  const value = useMemo(() => {
    const cartCount = cartItems.reduce((sum, ci) => sum + ci.qty, 0)
    const cartTotal = cartItems.reduce((sum, ci) => sum + ci.price * ci.qty, 0)

    function addToCart(menuItem) {
      setCartItems((prev) => upsertCartItem(prev, menuItem, 1))
    }

    function incQty(id) {
      setCartItems((prev) =>
        prev.map((ci) => (ci.id === id ? { ...ci, qty: ci.qty + 1 } : ci)),
      )
    }

    function decQty(id) {
      setCartItems((prev) =>
        prev
          .map((ci) => (ci.id === id ? { ...ci, qty: ci.qty - 1 } : ci))
          .filter((ci) => ci.qty > 0),
      )
    }

    function clearCart() {
      setCartItems([])
    }

    return {
      cartItems,
      cartCount,
      cartTotal,
      addToCart,
      incQty,
      decQty,
      clearCart,
    }
  }, [cartItems])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}

