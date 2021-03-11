import styled from 'styled-components';

export const BarStyled = styled.div`

.progressBar{
  display: flex;
  max-width: 59%;
  padding: 0 20%;
  padding-top: 1%;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 999px){
    max-width: 69%;
    padding: 0 15%;
    padding-top: 1%;
  }
  @media(max-width: 899px){
    max-width: 79%;
    padding: 0 10%;
    padding-top: 1%;
  }
  @media(max-width: 450px) {
    max-width: 89%;
    padding: 0 5%;
    padding-top: 1%;
    }

  .ball{
    display: flex;
    width: 6%;
    height: 15px;
    border: solid grey 3px;
    background: lightgrey;
    border-radius: 50%;
  }
  .ballGreen{
    display: flex;
    width: 6%;
    height: 15px;
    border: solid grey 3px;
    background: #32CD32;
    border-radius: 50%;
  }
  .ballColor{
    display: flex;
    width: 6%;
    height: 15px;
    border: solid grey 3px;
    background: lightgrey;
    border-radius: 50%;
    animation-name: ballProgress;
    animation-fill-mode: forwards;
    animation-delay: 1s;
  }
  @keyframes ballProgress {
    0% {background: lightgrey};
    100% {background: #32CD32};
  }
  .line{
    display: flex;
    width: 100%;
    height: 6px;
    background: lightgrey;
  }
  .lineGreen{
    display: flex;
    width: 100%;
    height: 4px;
    background: #32CD32;
    margin-top: 1px;
  }
  .lineColor{
    display: flex;
    width: 100%;
    height: 4px;
    background: lightgrey;
    margin-top: 1px;
    animation-name: progress;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  }
  @keyframes progress{
    0% {background: #32CD32; width:0%}
    100% {background: #32CD32; width: 100%}
  }
  .lineOutColor{
    display: flex;
    width: 100%;
    height: 4px;
    background: lightgrey;
    margin-top: 1px;
    animation-name: regress;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  }
  @keyframes regress{
    0% {background: green; width:100%}
    100% {background: lightgrey; width: 0%}
  }
  .line01{
    display: flex;
    width: 100%;
    height: 4px;
    background: lightgrey;
    margin-top: 1px;
  }
  .line02{
    display: flex;
    width: 100%;
    height: 4px;
    background: lightgrey;
    margin-top: 1px;
  }
}
`