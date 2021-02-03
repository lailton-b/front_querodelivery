import styled from 'styled-components';

export const Container = styled.div`
  max-width: 400px;
  background-color: ${(props) => props.theme.colors.secondary_bg.primary};

  padding: 30px;
  margin: 30px auto 20px auto;
  border-radius: 6px;

  @media (min-width: 750px) {
    margin-top: 60px;
    padding: 40px 40px 40px 30px;
  }

  h1 {
    color: ${(props) => props.theme.colors.secondary_bg.primary_text};
    font-size: 1.25rem;
  }

  p {
    color: ${(props) => props.theme.colors.secondary_bg.secondary_text};
    margin-top: 10px;
    font-size: 0.875rem;

    @media (min-width: 750px) {
      font-size: 1.125rem;
    }
  }
`;
