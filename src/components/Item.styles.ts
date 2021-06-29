import styled from 'styled-components';

export const ItemWrapper = styled.div`
  div {
    background-color: white;
    font-family: 'Nanum Gothic', sans-serif;
    font-size: 25px;
    width: 500px;
    margin: 10px;
    padding: 10px;
    border: 1px solid #8e8e8e;
    @media (max-width: 480px) {
      width: 300px;
      margin-left: 150px;
    }
  }

  label {
    background-color: white;
    margin: 15px;
  }

  .delete-button-style {
    background-color: white;
    float: right;
    padding-right: 10px;
    cursor: pointer;
  }
`;
