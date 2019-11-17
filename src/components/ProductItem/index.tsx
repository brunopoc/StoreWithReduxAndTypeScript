import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Products } from '../../store/ducks/products/types';
import { ApplicationState } from '../../store';
import * as CartActions from '../../store/ducks/cart/actions';
import { formatMoney } from '../../services/MoneyFormater';
import {
  ProducContainer,
  ProductLI,
  ProductButton,
  ProductTitle,
  DescriptionButton,
} from '../../styles/ProductItem';
import ProductDescription from '../ProductDescription';

interface OwnState {
  showDescription: boolean;
}

interface OwnProps {
  item: Products;
}

interface DispatchProps {
  addToCart(id: number, quantity: number): void;
}

type Props = OwnProps & DispatchProps;

class ProductItem extends Component<Props, OwnState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      showDescription: false,
    };
  }

  handleAddItem = (id: number, quantity: number) => {
    const { addToCart } = this.props;
    addToCart(id, quantity);
  };

  handleDescriptionOpen = () => {
    this.setState({ showDescription: true });
  };

  handleDescriptionClose = () => {
    this.setState({ showDescription: false });
  };

  render() {
    const { item } = this.props;
    return (
      <ProducContainer>
        <ProductLI>
          <img src={item.picture} alt="Imagem Ilustrativa" />
          <ProductTitle>
            {item.title}
          </ProductTitle>
          <DescriptionButton onClick={this.handleDescriptionOpen}> i </DescriptionButton>
          <span>{formatMoney(item.price, 2, '.', ',')}</span>
          <ProductButton
            value={item.id}
            onClick={() => this.handleAddItem(item.id, item.quantity)}
          >
          Comprar
          </ProductButton>
        </ProductLI>
        <ProductDescription handleClose={this.handleDescriptionClose} showDescription={this.state.showDescription} product={item} />
      </ProducContainer>

    );
  }
}

const mapStateToProps = (
  state: ApplicationState,
  OwnProps: { item: Products },
) => ({
  ...OwnProps,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
