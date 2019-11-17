import React from 'react';
import { Provider } from 'react-redux';
import ProductPage from './ProductPage';
import store from '../store';
import GlobalStyle from '../styles/global';
import { AppContainer } from '../styles/App';
import Header from './Header';

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Header />
    <AppContainer className="App">
      <ProductPage />
    </AppContainer>
  </Provider>
);

export default App;
