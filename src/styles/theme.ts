export default {
  grid: {
    container: '137rem',
    gutter: '2.3rem',
    modalSmall: '40rem',
    modalMedium: '80rem',
    modalLarge: '100rem'
  },
  border: {
    radius: {
      medium: '1.8rem',
      small: '1.2rem'
    },
    medium: '0.125rem'
  },
  font: {
    family:
      "Raleway, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xxsmall: '1.0rem',
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.8rem',
      xxlarge: '4.0rem',
      huge: '5.6rem'
    },
    weight: {
      light: 400,
      normal: 500,
      bold: 600
    }
  },
  colors: {
    title: '#353535',
    text: '#707070',
    white: '#ffffff',
    black: '#000000',
    gradient: 'linear-gradient(135deg, #1DBAB7 0%, #2BA0F4 101.56%);',
    primary: '#1DBAB7',
    primary500: '#009B94',
    primary200: '#71CECD',
    primary100: '#ACE1E1',
    primary50: '#DEF3F3',
    secondary: '#239ED9',
    secondary300: '#5BC6EC',
    secondary200: '#86D6F2',
    secondary100: '#B5E6F7',
    secondary50: '#E2F6FC',
    gray300: '#DCDCDC',
    gray200: '#ebebeb',
    gray100: '#f3f3f3',
    gray50: '#FAFDFF',
    success500: '#4AE588',
    success100: '#E1FFF1',
    danger: '#e5241a'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  shadow: {
    weakBlue:
      '0px 10px 20px -5px rgba(0, 116, 179, 0.2), 0px 4px 40px rgba(0, 116, 178, 0.05)',
    medium: '0px 10px 25px -5px #EAEAEA',
    normal: '0px 10px 25px -5px #DBDBDB',
    bold: '0px 6px 25px -5px #B8B8B8',
    input: '0px 0px 4px 2px rgba(0, 116, 179, .15)',
    boxWhite: '0px 0px 30px 0px rgba(255, 255, 255, 0.5)',
    boxBlack: '0px 0px 30px 0px rgba(000, 000, 000, 0.5)'
  },
  zindex: {
    levelZero: -1,
    levelOne: 1,
    levelTwo: 2,
    levelThee: 3,
    levelFour: 4,
    levelFive: 5
  },
  input: {
    radius: '0.125rem',
    padding: {
      sm: '1rem',
      md: '1.5rem',
      lg: '2rem'
    },
    sizes: {
      xs: '1.5rem',
      sm: '2.5rem',
      md: '3.125rem',
      lg: '3.75rem'
    }
  }
} as const
