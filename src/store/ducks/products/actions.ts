import { action } from 'typesafe-actions';
import { ProductsTypes, Products } from './types';

export const loadRequest = () => action(ProductsTypes.LOAD_REQUEST);
export const loadSuccess = (data: Products[]) => action(ProductsTypes.LOAD_SUCCESS, data);
export const loadFailure = () => action(ProductsTypes.LOAD_FAILURE);
