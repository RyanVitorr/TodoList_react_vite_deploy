import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        
    }

    main{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    input{
        box-sizing: border-box;
    }
`;