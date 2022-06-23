import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components'

type GlobalStylesProps = {
  removeBg?: boolean
}

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`

@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local(''),
       url('../fonts/raleway-v26-latin-regular.woff2') format('woff2'),
       url('../fonts/raleway-v26-latin-regular.woff') format('woff');
}

@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: local(''),
       url('../fonts/raleway-v26-latin-500.woff2') format('woff2'),
       url('../fonts/raleway-v26-latin-500.woff') format('woff');
}

@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: local(''),
       url('../fonts/raleway-v26-latin-600.woff2') format('woff2'),
       url('../fonts/raleway-v26-latin-600.woff') format('woff');
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }
  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }
    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      overflow-x: hidden;
    }

    a {
      text-decoration: none;
    }

    P {
      line-height: 180%;
      letter-spacing: 2%;
    }

    h1 {
      line-height: 120%;
      letter-spacing: -1%;
    }
    h2 {
      line-height: 150%;
      letter-spacing: -0.01em;
    }

    hr {
      margin: 20px;
      border: 0.5px solid ${theme.colors.gray200};
    }

    li {
      list-style: none;
    }

    .example-enter {
      opacity: 0;
      transform: translateX(-100%);
    }
    .example-enter-active {
      opacity: 1;
      transform: translateX(0);
      transition: opacity 300ms, transform 300ms;
    }
    .example-exit {
      opacity: 1;
      transform: translateX(0);
    }
    .example-exit-active {
      opacity: 0;
      transform: translateX(-100%);
      transition: opacity 300ms, transform 300ms;
    }
  `}
`

export default GlobalStyles
