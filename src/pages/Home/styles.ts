import styled from 'styled-components';

export const Container = styled.div` 
  &.container {
    color: ${(props) => props.theme.colors.primary_bg.text};
  }
`;

export const ContentWrapper = styled.main`
  h1 {
    font-size: 2.5rem;
    line-height: 48px;
    margin-top: 60px;

    @media (min-width: 768px) {
      font-size: 5.3rem;
      line-height: 96px;
    }
    
    span {
      font-family: 'Signika Negative', sans-serif;
    }

    span.yellow {
      color: ${(props) => props.theme.colors.primary_bg.button};
    }
  }

  > p {
    margin: 30px 0 36px 0;
    font-size: 1.125rem;

    @media (min-width: 768px) {
      font-size: 1.125rem;
      margin: 50px 0;
    }
  }

  a {
    margin-top: 20px;
  }
`;

export const ButtonsWrapper = styled.div` 
  @media (min-width: 768px) {
    display: flex;

    a.button {
      width: 183px;
    }

    div:nth-child(2) {
      margin-left: 20px;
    }
  }
`;