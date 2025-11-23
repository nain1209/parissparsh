import { DESKTOP_MEDIA } from '@/lib/utils';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

html {
  --gray-light: #F7F7F7;
  --gray: #CCCCCC;
  --gray-dark: #5A5A5A;
  --black: #383137;
  --pure-white: #FFFFFF;
  --pure-black: #000000;
  --primary-darker: #4A1042;
  --primary-dark: #6C2162;
  --primary: #750B67;
  --primary-light: #A44998;
  --primary-lighter: #FCE3F9;
  --accent: #E56B30;
}

 /*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;

}

/*
  2. Remove default margin
*/
* {
  margin: 0;
}

/*
  3. Allow percentage-based heights in the application
*/
html, body {
  height: 100%;
}

/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  /* overflow-x: hidden; */
}

/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}

/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

/*
  9. Create a root stacking context
*/
#__next {
  isolation: isolate;
  height:100%;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading), Georgia, 'Times New Roman', Times, serif;
	font-weight: 500;
  color: var(--primary-darker);
}

p, button, section ,a { 
  font-family: var(--font-satoshi), Helvetica, Arial, sans-serif;
  font-weight: 400;
}

p {
  font-size: calc(16 / 16 * 1rem);
  color: var(--black);
  line-height:1.41;

  ${DESKTOP_MEDIA} {
    font-size: calc(20 / 16 * 1rem);
  }
}

ul {
  padding: 0;
}

`;

export default GlobalStyles;
