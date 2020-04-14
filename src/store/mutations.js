export const setProducts = (state, payload) => state.products = payload

export const appendToCart = (state, {product, quantity}) =>  {
    let productExists = state.cart.find(item => {
        return item.product.id === product.id
    })

    if (productExists){
        productExists.quantity++
    } else {
        state.cart.push({
            product,
            quantity
        })
    }
}
