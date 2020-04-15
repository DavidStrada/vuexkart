import axios from 'axios'
const URL = process.env.VUE_APP_API_URL

export const getProducts = ({commit}) => {
  return axios.get(`${URL}/products`).then(response => {
    commit('setProducts', response.data)
    return Promise.resolve()
  })
}

export const addProductToCart = ({commit}, {product, quantity}) => {
  commit('appendToCart', {product, quantity})

  return axios.post(`${URL}/cart`, {
    product_id: product.id,
    quantity
  }).then(response => {
    return Promise.resolve(response.data)
  })
}

export const getProductsFromCart = ({commit}) => {
  return axios.get(`${URL}/cart`).then(response => {
    commit('setCartItems', response.data)
    return Promise.resolve(response.data)
  })
}

export const removeProductFromCart = ({commit}, {product, quantity, index}) => {
  commit('removeFromCart', {product, quantity, index})
  return axios.delete(`${URL}/cart/${product.id}`).then(response => {
    return Promise.resolve(response.data)
  })
}

export const clearCart = ({commit}) => {
  commit('removeAllItems')
  return axios.delete(`${URL}/cart`).then(response => Promise.resolve(response.data))
}
