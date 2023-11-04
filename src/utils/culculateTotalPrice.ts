import {PizzaCartType} from "../types";

export const calculateTotalPrice = (items: PizzaCartType[]) => {

        return items.reduce((price: number, obj: PizzaCartType) => {
            return (obj.price * obj.count) + price
        }, 0)


}