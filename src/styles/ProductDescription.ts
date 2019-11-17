import styled from 'styled-components';

interface DescriptionProps {
    showDescription: boolean;
}

export const CartDescriptionContainer = styled.div`
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 3;
    top: 200px;
    left: 50%;
    background-color: #fff;
    transform: translate(-50%, 0);
    display: ${(p: DescriptionProps) => (p.showDescription ? 'flex' : 'none')};
    opacity: ${(p: DescriptionProps) => (p.showDescription ? 100 : 0)};
`;

export const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Spacing = styled.div`
    padding: 20px;
    margin-bottom: 20px;
`;

export const SpacingRight = styled.div`
    margin-right: 20px;
    display: inline-block;
`;

export const TextBold = styled.span`
    font-weight: 600;
    margin-right: 15px;
`;

export const CloseButton = styled.button`
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
