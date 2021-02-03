import styled from 'styled-components';

export const Container = styled.div`
  &.container {
    margin: 30px auto 0 auto;
  }

  img {
    display: block;
    max-width: 148px;
    margin: 0 auto;

    @media (min-width: 768px) {
      max-width: 168px;
    }
  }
`;
