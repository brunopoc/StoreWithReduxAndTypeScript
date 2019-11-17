import { action } from 'typesafe-actions';
import { CartTypes } from './types';

export const addToCart = (id: number, quantity: number) => action(CartTypes.ADD, { id, quantity });
export const removeToCart = (id: number) => action(CartTypes.REMOVE, id);
