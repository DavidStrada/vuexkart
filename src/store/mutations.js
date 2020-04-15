export const setProducts = (state, payload) => state.products = payload

export const appendToCart = (state, {product, quantity}) =>  {
  let productExists = findExistingProduct(state, product)

  if (productExists){
    productExists.quantity++
  } else {
    state.cart.push({
      product,
      quantity
    })
  }
}

export const setCartItems = (state, payload) => state.cart = payload

export const removeFromCart = (state, {product,quantity}) => {
  let productExists = findExistingProduct(state, product)

  if (quantity > 1) {
    productExists.quantity-- //if product exists decrease the quantity one by one e.g. 3, 2, 1
  } else {
    // remove item from state (cart)
    state.cart.find((item, index) => {
      if(item.product.id === product.id) {
        state.cart.splice(index, 1)
      }
    })
  }
}

export const removeAllItems = (state) => state.cart = []

function findExistingProduct(state, product) {
  return state.cart.find(item => {
    return item.product.id === product.id
  })
}
