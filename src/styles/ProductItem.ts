import styled from 'styled-components';

export const ProducContainer = styled.div`
  float: left;
`;

export const ProductTitle = styled.span`
  font-weight: 600;
  height: 100px;
  border-color: #C4C4C4;
  transition: border-bottom 0.5s ease;
`;

export const DescriptionButton = styled.button`
  width: 30px;
  height: 30px;
  position: absolute;
  border-radius: 100%;
  background-color: #fff;
  font-weight: 500;
  padding: 5px;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  top: 238px;
  border-style: unset;
  transition: border-bottom 0.5s;
  &:hover, &:focus {
    outline: unset;
    border-style: unset;
  }
  &:hover {
    background-color: #DF9600;
    color: #fff;
  }
  &:active {
    border-style: unset;
    background-color: #BF8100;
  }
`;

export const ProductLI = styled.li`
  margin: 10px;
  border: 5px solid #fff;
  width: 300px;
  height: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: box-shadow 0.5s ease;
  position: relative;
  &:hover {
    box-shadow: 0px 0px 7px rgba(0,0,0,0.9);
    ${ProductTitle}{
      border-bottom: 1px solid #9A9A9A;
    }
    ${DescriptionButton}{
      border-top: 1px solid #9A9A9A;
    }
  }
`;

export const ProductButton = styled.button`
  max-width: 200px;
  width: 100%;
  background-color: #F6A500;
  color: #fff;
  font-weight: 500;
  text-transform: uppercase;
  padding: 10px;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  border-style: unset;
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
