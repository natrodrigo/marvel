import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Barlow, system-ui, Avenir, Helvetica, Arial, sans-serif;
    text-decoration: none;
    font-weight:500;
  }
  
body{
    text-decoration: none;
    background:${props => props.theme.colors.background};
    color:${props => props.theme.colors.text};
}

`
