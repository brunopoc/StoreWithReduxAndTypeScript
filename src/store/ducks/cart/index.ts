import { Reducer } from 'redux';
import { CartList, CartTypes } from './types';

const INITIAL_STATE: CartList = {
  list: [],
  total: 0,
};

const reducer: Reducer<CartList> = (state = INITIAL_STATE, action) => {
  const { list } = state;
  switch (action.type) {
    case CartTypes.ADD:
      let totalToAdd = state.total;
      let itemInArray = false;
      for (let i = 0; i < list.length; i++) {
        if (list[i].productsId === action.payload.id) {
          itemInArray = true;
          if (list[i].qnty < action.payload.quantity) {
            list[i].qnty++;
            totalToAdd++;
          }
        }
      }
      if (itemInArray === false) {
        list.push({ productsId: action.payload.id, qnty: 1 });
        totalToAdd++;
        return { total: totalToAdd, list };
      }
      return { total: totalToAdd, list };
    case CartTypes.REMOVE:
      const totalToRemove = state.total === 1 ? 0 : state.total - 1;
      for (let i = 0; i < list.length; i++) {
        if (list[i].productsId === action.payload) {
          if (list[i].qnty === 1) {
            list.splice(i, 1);
          } else {
            list[i].qnty--;
          }
        }
      }
      return { total: totalToRemove, list };
    default:
      return state;
  }
};

export default reducer;
