import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CloseIcon from '@material-ui/icons/Close';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { bindActionCreators, Dispatch } from 'redux';
import { formatMoney } from '../../services/MoneyFormater';
import { ApplicationState } from '../../store';
import { CartList } from '../../store/ducks/cart/types';
import { Products } from '../../store/ducks/products/types';
import * as CartActions from '../../store/ducks/cart/actions';
import {
  CartPageContainer,
  ModalCloseButton,
  Container,
  EmptyCart,
  ModalActionButton,
} from '../../styles/CartPage';

export interface CartPageProps {
  isActive?: boolean;
  handleCartClose?: () => void;
}

interface StateProps {
  cart: CartList;
  products: Products[];
}

interface DispatchProps {
  removeToCart(id: number): void;
  addToCart(id: number, quantity: number): void;
}

type Props = StateProps & CartPageProps & DispatchProps;

class CartPage extends Component<Props> {
  handleRemoveItem = (id: number) => {
    const { removeToCart } = this.props;
    removeToCart(id);
  };

  handleAddItem = (id: number, quantity: number) => {
    const { addToCart } = this.props;
    addToCart(id, quantity);
  };

  render() {
    const {
      isActive, handleCartClose, cart, products,
    } = this.props;

    return (
      <CartPageContainer isActive={isActive}>
        <Container>
          {cart.total !== 0 ? (
            <Paper>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Nome</TableCell>
                    <TableCell align="right">Quantidade</TableCell>
                    <TableCell align="right">Preço</TableCell>
                    <TableCell align="right">Total</TableCell>
                    <TableCell align="right">Ação</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cart.list.map((item) => {
                    const selectedItem = products.filter(
                      (product) => product.id === item.productsId,
                    )[0];
                    return (
                      <TableRow key={selectedItem.id}>
                        <TableCell component="th" scope="row">
                          {selectedItem.title}
                        </TableCell>
                        <TableCell align="right">{item.qnty}</TableCell>
                        <TableCell align="right">
                          {formatMoney(selectedItem.price, 2, '.', ',')}
                        </TableCell>
                        <TableCell align="right">
                          {formatMoney(selectedItem.price * item.qnty, 2, '.', ',')}
                        </TableCell>
                        <TableCell align="right">
                          <ModalActionButton
                            type="button"
                            onClick={() => this.handleAddItem(selectedItem.id, selectedItem.quantity)}
                          >
                            <AddIcon />
                          </ModalActionButton>
                          <ModalActionButton
                            type="button"
                            onClick={() => this.handleRemoveItem(selectedItem.id)}
                          >
                            <RemoveIcon />
                          </ModalActionButton>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Paper>
          ) : (
            <EmptyCart>Seu carrinho está vazio!</EmptyCart>
          )}
          <ModalCloseButton onClick={handleCartClose}>
            <CloseIcon />
          </ModalCloseButton>
        </Container>
      </CartPageContainer>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  cart: state.cart,
  products: state.products.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
