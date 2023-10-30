import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {PizzaType} from "../types";

type PizzaInfoType = {
    imageUrl: string
    title: string
    price: number
}

const PizzaInfo = () => {
    const {id} = useParams()
    const [pizza, setPizza] = useState<PizzaType>()

    useEffect(() => {
        const fetchPizza = async  () => {
            try {
                const {data} = await axios.get(`https://651a96bd340309952f0d8f19.mockapi.io/items/` + id)
                setPizza(data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchPizza()
    }, [])


    console.log(pizza)

    if(!pizza) {
        return <div>
            Ничего не найдено
        </div>
    } else {
        return (
            <div className={'container'}>
                <img src={pizza.imageUrl} alt="pizza image"/>
                <h1>{pizza.title}</h1>
                <h4>{pizza.price} ₽</h4>
            </div>
        );
    }
};

export default PizzaInfo;