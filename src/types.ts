export type PizzaType = {
    count: number
    id: string;
    imageUrl: string;
    title: string;
    types: number[];
    sizes: number[];
    price: number;
    category: number;
    rating: number;
}

export type PizzaCartType = {
    id: string
    title?: string
    imageUrl?: string
    price?: number
    types?: string,
    sizes?: number
    count?: number
}

export type SortValueType = {
    property: string
    title: string
}

export type sortListType = SortValueType[]

export type CategoryType = {
    id: number
    title: string
}

export type CategoriesType = CategoryType[]