export enum CartTypes {
    ADD = '@cart/ADD',
    REMOVE = '@cart/REMOVE',
}

export interface Cart {
    productsId: number
    qnty: number
}

export interface CartList {
    list: Cart[]
    total: number
}
