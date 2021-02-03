import styled from 'styled-components';

interface IType {
  as?: 'a' | 'button'
}

export const Container = styled.div`
  .button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 58px;

    box-shadow: 0 10px 30px rgb(0 0 0 / 10%);
    transition: .5s;
    cursor: pointer;

    &:hover {
      &.primary, &.secondary {
        background-color: ${(props) => props.theme.colors.hover};
        color: ${(props) => props.theme.colors.primary_bg.text};
      }
    }

    &.primary {
      border-radius: 30px;
      background-color: ${(props) => props.theme.colors.primary_bg.button};
      color: ${(props) => props.theme.colors.primary_bg.primary};
    }

    &.secondary {
      font-size: 1rem;
      border-radius: 3px;
      background-color: ${(props) => props.theme.colors.secondary_bg.button};

      border: none;
      color: ${(props) => props.theme.colors.secondary_bg.primary};
    }

    p {
      display: flex;
      flex-direction: column;
    }

    svg {
      margin-right: 10px;
    }

    span:first-child {
      font-size: 0.75rem;
    }

    span:nth-child(2) {
      font-size: 1rem;
      font-weight: 500;
    }
  }

  .button.loading {
    cursor: not-allowed;
    opacity: 0.7;
    background-color: ${(props) => props.theme.colors.hover};
  }
`;

export const ButtonElement = styled.button<IType>``;