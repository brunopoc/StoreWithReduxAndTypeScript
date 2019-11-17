import styled from 'styled-components';

export const CartIconContainer = styled.div`
    background-color: #fff;
    border: 2px solid #F6A500;
    border-radius: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    &:hover {
        background-color: #F3F3F3;
    }
    &:active {
        background-color: #E8E8E8;
  }
`;

export const TotalContainer = styled.div`
    background-color: #fff;
    border: 2px solid #F6A500;
    border-radius: 100%;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 25px;
    width: 25px;
    top: 40px;
    right: 2px;
`;
