import {calculateTotalPrice} from "./culculateTotalPrice";


export const getCartPizzaLS = () => {
    const data = localStorage.getItem('cart')
    const json = data ? JSON.parse(data) : []
    return {
        totalPrice: calculateTotalPrice(json),
        items: json
    }

}