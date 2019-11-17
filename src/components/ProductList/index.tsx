import React from 'react';
import { connect } from 'react-redux';
import { Products } from '../../store/ducks/products/types';
import { ApplicationState } from '../../store';
import ProductItem from '../ProductItem';
import { ProductListContainer, ProductUL } from '../../styles/ProductList';

interface StateProps {
  products: Products[];
}

type Props = StateProps;

const ProductList = (props: Props) => {
  const { products } = props;
  return (
    <ProductListContainer>
      <ProductUL>
        {products.map((product) => (
          <ProductItem key={product.id} item={product} />
        ))}
      </ProductUL>
    </ProductListContainer>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  products: state.products.data,
});

export default connect(mapStateToProps)(ProductList);
