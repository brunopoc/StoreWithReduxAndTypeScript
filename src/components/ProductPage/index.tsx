import React, { Component } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import ProductList from '../ProductList';
import * as ProductsActions from '../../store/ducks/products/actions';

interface DispatchProps {
  loadRequest(): void,
}

type Props = DispatchProps;

class ProductPage extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;
    loadRequest();
  }

  render() {
    return <ProductList />;
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => (bindActionCreators(ProductsActions, dispatch));

export default connect(null, mapDispatchToProps)(ProductPage);
