import styled from 'styled-components';
import upload from '../../assets/upload_icon.svg';

export const Container = styled.div`
  margin-top: 30px;
  padding: 0 15px;

  .successful_message {
    h2 {
      color: ${(props) => props.theme.colors.secondary_bg.button};
      font-size: 1.25rem;
      margin-bottom: 25px;
    }

    p {
      margin-top: 10px;
      font-size: 1rem;
      color: ${(props) => props.theme.colors.secondary_bg.secondary_text};
    }

    a {
      color: ${(props) => props.theme.colors.secondary_bg.button};
      text-decoration: underline;
    }
  }
`;

export const FileWrapper = styled.div` 
  margin: 25px 0 40px 0 !important;

  > div {
    display: flex;
    align-items: center;
  }

  input[type="file"] {
    position: relative;
    display: block;

    width: 150px;
    margin-left: 20px;
    
    color: #fff;
    outline: none;
    cursor: pointer;

    &::before {
      content: 'Selecione sua';
      display: inline-block;

      font-weight: 700;
      font-size: 0.75rem;
      text-align: right;
      color: ${(props) => props.theme.colors.primary_bg.text};

      background-color: ${(props) => props.theme.colors.secondary_bg.button};
      background-image: url(${ upload });
      background-position-y: center;
      background-position-x: 10px;
      background-repeat: no-repeat;
      background-size: 30px;

      border: 1px solid transparent;
      border-radius: 3px;
      padding: 14px 19px 24px 54px;
      margin-right: 10px;
      
      outline: none;

      cursor: pointer;
      transition: background-color .5s;
    }

    &::after {
      content: 'Selfie';
      display: block;
      position: absolute;
      top: 62%;
      left: 50%;

      font-size: 1rem;
      font-weight: bold;

      transform: translate(-50%, -50%);
    }

    &:hover::before, &:focus::before {
      outline: none;
      background-color: ${(props) => props.theme.colors.hover};
    }
  }
  
  p {
    display: flex;
    align-items: center;

    margin-top: 10px;
    color: ${(props) => props.theme.colors.secondary_bg.primary_text};
    font-size: 0.875rem;

    svg {
      fill: ${(props) => props.theme.colors.secondary_bg.button};
      margin-right: 5px;
    }
  }
`;

export const FileLabel = styled.label` 
  display: block;
  color: transparent;

  background-color: ${(props) => props.theme.colors.secondary_bg.primary};
  background-repeat: no-repeat;
  background-position: center;

  width: 80px;
  height: 80px;
  border: 1px solid ${(props) => props.theme.colors.secondary_bg.primary_text};

  cursor: pointer;
`;
