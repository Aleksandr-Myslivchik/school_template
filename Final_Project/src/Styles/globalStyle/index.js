import { createGlobalStyle } from "styled-components";
import bgImg from '../../Constants/Assets/bgimg.jpg'

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}



html {
    position: relative;
    padding: 0;
    margin: 0;
    font: normal small-caps normal 16px/1.4 sans-serif;
    background: url(${bgImg}) repeat;
    background-origin: content-box;
    background-clip: content-box;
    background-size: cover;
    z-index: 1;
}

body::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(36, 6, 33, 0.712) repeat;
    background-size: cover;
    z-index: 2;

}

.header-s2 {
    text-transform: uppercase;
    text-align: center;
}

input {
    caret-color: rgb(58, 151, 204);
    background: none;
    outline: none;
    border: none;
    border-bottom: 1px solid rgb(165, 165, 165);
    margin: 8px 0;
    color: #d1d1d1;
}

input::placeholder {
    color: rgb(160, 160, 160);
}


.header-wrapper_h2 {
    padding: 20px 0;
}

.container {
    flex: 1 1 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 15;

}

.container section {
    flex: 1 1 100%;
    display: flex;
    flex-direction: column;
    padding: 0 15px;
    position: relative;
    z-index: 20;

}

span,
select,
legend {
    background: none;
    color: #d1d1d1;
}

legend {
    font-weight: 100;
    font-size: 20px;
}

option {
    background: #282828;

}

body * {
    z-index: 100;
}

h2 {
    color: #e0e0e0;
}

h3 {
    color: #d1d1d1;
}

h4 {
    color: #c4c4c4
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
    /* border: 1px solid green; */
    -webkit-text-fill-color: rgb(58, 151, 204);
    -webkit-box-shadow: 0 0 0px 1000px rgba(0, 0, 0, 0) inset;
    transition: background-color 5000s ease-in-out 0s;
}

`