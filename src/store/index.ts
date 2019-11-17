import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { ProductsState } from './ducks/products/types';
import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';
import { CartList } from './ducks/cart/types';

export interface ApplicationState{
    products: ProductsState,
    cart: CartList
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
