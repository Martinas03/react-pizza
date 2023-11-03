import {PizzaCartType} from "../types";

export const calculateTotalPrice = (items: any) => {

        return items.reduce((price: any, obj: any) => {
            return (obj.price * obj.count) + price
        }, 0)


}