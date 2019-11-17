//  action types

export enum ProductsTypes {
    LOAD_REQUEST = '@products/LOAD_REQUEST',
    LOAD_SUCCESS = '@products/LOAD_SUCCESS',
    LOAD_FAILURE = '@products/LOAD_FAILURE'
}

//  data types

export interface Products {
    id: number,
    title: string,
    price: number,
    picture: string,
    description: string,
    memory: string,
    brand: string,
    chipType: string,
    quantity: number
}

//  state type

export interface ProductsState {
    readonly data: Products[],
    readonly loading: boolean,
    readonly error: boolean
}
