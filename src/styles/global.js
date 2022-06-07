import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`

:root{
    --white:        #FFFFFF;
    --background:   #FFFFFB;
    --Gray-Dark:    #575453;
    --Blue-Dark:    #1C307F;
    --Blue:         #2E50D4;
    --Gray-Medium:  #999392;
    --Gray:         #DAD2D0;
}

*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}

html{
    
}

body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;

}

body, textarea , input, button{
    font-family: "Nunito", sans-serif;
    font-weight: 400;
}

h1,h2,h3,h4,h5,h6,strong{
    font-weight: 700;
}

button {
    cursor: pointer;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}
`