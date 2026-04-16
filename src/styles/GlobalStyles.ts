import { createGlobalStyle } from 'styled-components'

export const colors = {
  orangeMain: '#F27A1A',
  orangeLight: '#FF9A3C',
  orangeDark: '#A94E0F',
  brownDark: '#4A1F0B',
  brownDeep: '#2B1207',
  beige: '#E8D8C3',
  beigeDark: '#C9B39A',
  gray: '#B0B0B0',
  grayDark: '#5A5A5A',
  black: '#0D0D0D',
  whiteSoft: '#FFF6ED',
  whiteCream: ' #FCEFE3'
}

export const breakpoints = {
  tablet: '1024px',
  mobile: '767px'
}

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Poppins", sans-serif;
    margin: 0;
    padding: 0;
    }


  ul {
    padding-left: 0;
    list-style: none;

    a {
    color: inherit;
    text-decoration: none;
    }
  }

  .container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }

  h1, h2, h3 {
    margin: 0;
  }
`
