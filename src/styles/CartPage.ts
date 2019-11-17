import styled from 'styled-components';
import { CartPageProps } from '../components/CartPage';

export const CartPageContainer = styled.div`
    justify-content: center;
    align-items: center;
    padding: 50px;
    position: absolute;
    z-index: 3;
    top: 10px;
    left: 50%;
    transform: translate(-50%, 0);
    display: ${(p: CartPageProps) => (p.isActive ? 'flex' : 'none')};
    opacity: ${(p: CartPageProps) => (p.isActive ? 100 : 0)};
`;

export const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const EmptyCart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 500px;
    width: 100%;
    padding: 50px;
    background-color: #fff;
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
    border-radius: 4px;
`;

export const ModalCloseButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: #F6A500;
  color: #fff;
  font-weight: 500;
  text-transform: uppercase;
  padding: 5px;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  border-style: unset;
  border-radius: 100%;
  position: absolute;
  right: -20px;
  top: -20px;
  &:hover, &:focus {
    outline: unset;
    border-style: unset;
  }
  &:hover {
    background-color: #DF9600;
  }
  &:active {
    border-style: unset;
    background-color: #BF8100;
  }
`;

export const ModalActionButton = styled.button`
  width: 25px;
  height: 25px;
  background-color: #F6A500;
  color: #fff;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  border-style: unset;
  border-radius: 100%;
  &:hover, &:focus {
    outline: unset;
    border-style: unset;
  }
  &:hover {
    background-color: #DF9600;
  }
  &:active {
    border-style: unset;
    background-color: #BF8100;
  }
`;
