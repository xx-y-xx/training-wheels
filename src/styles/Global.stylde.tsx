import {createGlobalStyle} from "styled-components";
import {Theme} from "./Theme.tsx";

export const GlobalStyle = createGlobalStyle`
    *,
    *:before,
    *:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    body {        
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        
        a{
            text-decoration: none;
        }
        ul{
            list-style: none;
        }
        button {
            background-color: unset;
            border: none;
        }
        color: ${Theme.colors.font}
    }
    section{
        padding: 100px 0;
    }
section:nth-of-type(odd){
    background-color: ${Theme.colors.primaryBg};
}
section:nth-of-type(even){
    background-color: ${Theme.colors.secondaryBg};
}
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
`