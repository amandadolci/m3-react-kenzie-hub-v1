import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video, button, input {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    line-height: 150%;
    text-decoration: none;
    vertical-align: baseline;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    outline: none;
    list-style: none;
  }

  :root {
  --primary: #FF577F;
  --hover: #FF427F;
  --disabled: #59323F;
  --grey-4: #121214;
  --grey-3: #212529;
  --grey-2: #343B41;
  --grey-1: #868E96;
  --grey-0: #F8F9FA;
  --negative: #E83F5B;
  --success: #3FE864;
  --radius-4: 0.25rem;

  color-scheme: light dark;
  background-color: var(--grey-4);
  color: var(--grey-0);
  }

  /* @media (prefers-color-scheme: light) {
    :root {
      background-color: var(--grey-0);
      color: var(--grey-4);
    }
  } */

  body {
    width: 100%;
    height: 100%;
    min-width: 20rem;
    min-height: 100vh;
    overflow-x: hidden;
  }

  #root {
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 4.5rem 0;
    position: relative;
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 15rem;
    min-width: 18.5rem;
    
  }

  .pageNotFound {
    font-size: 1.5rem;
  }

  h1 {
    font-weight: 700;
    font-size: 0.875rem
  }

  button, a {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 100%;
    height: 2.375rem;
    border-radius: var(--radius-4);
    color: #ffffff;
    font-size: 0.8125rem;
    font-weight: 500;
    :disabled {
      cursor: default;
    }
  }
  
  .primaryButton {
    background-color: var(--primary);
    border: 1px solid var(--primary);
    :hover {
      background-color: var(--hover);
      border: 1px solid var(--hover);
    }
    :disabled {
      background-color: var(--disabled);
      border: 1px solid var(--disabled);
    }
  }

  .secondaryButton {
    background-color: var(--grey-1);
    border: 1px solid var(--grey-1);
  }
  
  .navButton {
    width: fit-content;
    padding: 0 1.625rem;
    height: 2rem;
    font-size: 0.75rem;
    font-weight: 600;
    background-color: var(--grey-3);
    border: 1px solid var(--grey-3);
  }
  
  .secondaryButton:hover, .navButton:hover {
    background-color: var(--grey-2);
    border: 1px solid var(--grey-2);
  }
	@media (min-width: 768.1px) {
    h1 {
    font-size: 1.125rem
  }

  button, a {
    height: 3rem;
    font-size: 1rem;
  }
  .navButton {
    padding: 0 1rem;
    height: 2.5rem;
  }
  }
`;
