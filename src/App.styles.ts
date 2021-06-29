import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
    background-color: #E7EDEB;
}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-family: 'Open Sans', sans-serif;
    font-size: 50px;
    width: 500px;
    margin-left: 150px;
    @media (max-width: 480px) {
      font-size: 45px;
      margin-left: 210px;
    }
  }
`;
