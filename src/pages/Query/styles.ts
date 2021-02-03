import styled from 'styled-components';

export const Container = styled.div`
  .formError {
    position: initial;
    top: 0;
    margin: 5px 0 15px;
  }

  .successful_message {
    div {
      margin-top: 20px;
    }

    .status {
      color: ${(props) => props.theme.colors.secondary_bg.button};
    }

    p {
      font-size: 0.875rem;
    }

    .status_wrapper {
      font-size: 1rem;
    }

    @media (min-width: 768px) {
      p {
        font-size: 1rem;
      }

      .status_wrapper {
        font-size: 1.125rem;
      }
    }
  }
`;
