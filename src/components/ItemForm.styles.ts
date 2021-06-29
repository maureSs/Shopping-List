import styled from 'styled-components';

export const FormWrapper = styled.div`
  .add-item-button {
    background-color: #6ebce8;
    width: 522px;
    border: 1px solid;
    margin-left: 50px;
    padding: 10px;
    font-family: 'PT Serif', serif;
    @media (max-width: 480px) {
      width: 322px;
      margin-left: 190px;
    }
  }

  .add-item-button:hover {
    background-color: #8ccae7;
  }
`;
