export const products = state => state.products

// cart
export const cart = state => state.cart

export const cartCount = state => state.cart.length

export const cartTotal = state => state.cart.reduce((previous, current)=> {
  return previous + current.product.price * current.quantity
}, 0).toFixed(2)
