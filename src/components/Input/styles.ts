import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  + div {
    margin-top: 15px;
  }

  label {
    font-size: 1.125rem;
    color: ${(props) => props.theme.colors.secondary_bg.primary_text};
    padding-bottom: 9px;
  }

  input {
    width: 100%;
    padding: 15px;

    color: ${(props) => props.theme.colors.secondary_bg.primary_text};
    border: 1px solid ${(props) => props.theme.colors.secondary_bg.border};
    border-radius: 3px;

    &:hover {
      border: 1px solid #3b5bfd;
    }

    &:focus {
      box-shadow: 0 0 0 3px rgb(59 91 253 / 10%);
      outline: 0;
    }
  }
`;
