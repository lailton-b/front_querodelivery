import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  svg {
    margin-top: 50px;
    transform: translateX(850px);
    animation: delivering 1.5s ease-in-out forwards;

    @media (min-width: 768px) {
      height: 390px;
      width: 390px;
    }

    @keyframes delivering {
      from { transform: translateX(850px) };
      to { transform: translateX(0px) };
    }
  }

  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`;