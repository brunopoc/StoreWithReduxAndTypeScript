import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { CartList } from '../../store/ducks/cart/types';
import { ApplicationState } from '../../store';
import { CartIconContainer, TotalContainer } from '../../styles/CartIcon';
import CartPage from '../CartPage';

interface StateProps {
  cart: CartList;
}

interface OwnState {
  cartPageVisible: boolean;
}

type Props = StateProps;

class CartIcon extends Component<Props, OwnState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      cartPageVisible: false,
    };
  }

  handleCartOpen = () => {
    this.setState({ cartPageVisible: true });
  };

  handleCartClose = () => {
    this.setState({ cartPageVisible: false });
  };

  render() {
    const { cart } = this.props;
    const { cartPageVisible } = this.state;
    return (
      <div>
        <CartIconContainer onClick={this.handleCartOpen}>
          <ShoppingCartIcon />
          <TotalContainer>{cart.total}</TotalContainer>
        </CartIconContainer>
        <CartPage isActive={cartPageVisible} handleCartClose={this.handleCartClose} />
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({ cart: state.cart });

export default connect(mapStateToProps)(CartIcon);
