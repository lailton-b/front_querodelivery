import { createGlobalStyle } from 'styled-components';
import backgroundImage from '../assets/bg-top.png';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body, #root {
    width: 100%;
    min-height: calc(100vh - 30px);
    overflow-x: hidden;
  }

  body {
    background-color: ${(props) => props.theme.colors.primary_bg.primary};

    @media (min-width: 768px) {
      background-image: url(${backgroundImage});
      background-repeat: no-repeat;
      
      background-color: ${(props) => props.theme.colors.secondary_bg.primary};
    }
  }

  /**************/

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  .container {
    max-width: 800px;
    padding: 0 15px;
    margin: 0 auto;
  }

  /* Animations */
  // From Right
  .right_animation {
    animation: rightAnimation .7s ease-in-out forwards;

    @keyframes rightAnimation {
      from {
        opacity: 0;
        transform: translateX(15px);
      } to {
        opacity: 1;
        transform: translateX(0px);
      }
    }
  }

  // From left
  .left_animation {
    animation: leftAnimation .7s ease-in-out forwards;

    @keyframes leftAnimation {
      from {
        opacity: 0;
        transform: translateX(-15px);
      } to {
        opacity: 1;
        transform: translateX(0px);
      }
    }
  }

  // From Top
  .top_animation {
    animation: topAnimation .7s ease-in-out forwards;

    @keyframes topAnimation {
      from {
        opacity: 0;
        transform: translateY(-15px);
      } to {
        opacity: 1;
        transform: translateX(0px);
      }
    }
  }

  // From Bottom
  .bottom_animation {
    animation: bottomAnimation .7s ease-in-out forwards;

    @keyframes bottomAnimation {
      from {
        opacity: 0;
        transform: translateY(15px);
      } to {
        opacity: 1;
        transform: translateX(0px);
      }
    }
  }

  // Appearing

  .appearing_animation {
    animation: appearingAnimation .7s ease-in-out forwards;

    @keyframes appearingAnimation {
      from { opacity: 0; } 
      to { opacity: 1; }
    }
  }
`;

export default GlobalStyle;