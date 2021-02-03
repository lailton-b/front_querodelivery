import styled from 'styled-components';

export const Container = styled.div`
  max-width: 400px;
  padding: 30px 20px;

  margin: 0 auto 40px;
  background-color: ${(props) => props.theme.colors.secondary_bg.primary};
  box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
  border-radius: 6px;

  .formError {
    position: relative;
    top: -10px;
    margin-top: 0px;

    a {
      color: ${(props) => props.theme.colors.secondary_bg.button};
      font-weight: bold;
      text-decoration: underline;
    }
  }
`;
