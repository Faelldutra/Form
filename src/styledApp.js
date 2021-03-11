import  styled  from 'styled-components';

export const Header = styled.header`
display: flex;
width: 100%;
height: 100px;
background: #87CEFA;
align-items: center;

h1{
  margin: auto;
  font-family: 'Bebas Neue', cursive;
  font-size: 3.5rem;
  color: white;

  @media(max-width: 450px) {
    font-size: 2.5rem;
  }
}
`
export const Form = styled.div`
display: flex;
flex-direction: column;
width: 100%;
padding-top: 2%;
background: #F0F8FF;

.title{
  display: flex;
  flex-direction: column;
  width: 100%;

  h1{
    font-family: 'Bebas Neue', cursive;
    font-size: 2.5rem;
    margin: auto;
    padding-bottom: 1%;

    @media(max-width: 450px) {
      font-size: 2rem;
    }
  }
  p{
    font-family: 'Bebas Neue', cursive;
    font-size: 1.5rem;
    margin: auto;

    @media(max-width: 450px) {
      font-size: 1.2rem;
    }
  }
}
.dados{
  display: flex;
  max-width: 59%;
  padding: 0 20%;
  padding-top: 5%;
  justify-content: space-between;

  @media(max-width: 999px){
    max-width: 69%;
    padding: 0 15%;
    padding-top: 5%;
  }
  @media(max-width: 899px){
    max-width: 79%;
    padding: 0 10%;
    padding-top: 5%;
  }
  @media(max-width: 450px) {
    max-width: 89%;
    padding: 0 5%;
    padding-top: 5%;
    }

  h1{
    font-family: 'Bebas Neue', cursive;
    font-size: 1.5rem;

      @media(max-width: 899px){
        font-size: 1.3rem;
    }
    @media(max-width: 699px){
        font-size: 1rem;
    }
    @media(max-width: 450px) {
      font-size: .9rem;
    }
  }
}
.form{
  display: flex;
  flex-direction: column;
  max-width: 60%;
  padding: 0 20%;
  padding-top: 3%;

  @media(max-width: 999px){
    max-width: 70%;
    padding: 0 15%;
    padding-top: 3%;
  }
  @media(max-width: 899px){
    max-width: 80%;
    padding: 0 10%;
    padding-top: 3%;
  }
  @media(max-width: 450px) {
    max-width: 89%;
    padding: 0 5%;
    padding-top: 5%;
    }
 
  .configForm{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 3%;

      @media(max-width: 699px){
        flex-direction: column;
      }

    label{
      width: 100%;
      height: 70px;

      @media(max-width: 999px){
        height: 80px;
      }
      @media(max-width: 699px){
        height: 100px;
      }

      input{
        width:95%;
        border-style: none;
        border: solid grey 2px;
        border-radius: 5px;
        height: 35px;
        font-size: 1rem;
        padding-left: 1%;
      }
      .input{
        border: solid red 2px;
      }
      #configDate{
        width: 48%;
        height: 37px;
      }
      input:focus{
        box-shadow: grey 0px 0px 10px 1px;
      }
      input[type=date]{
        font-size: 1rem;
        font-family: 'arial',sans-serif;
        background:white;
      }
      p{
        font-family: 'Bebas Neue', cursive;
        font-size: 1.5rem;
        padding-bottom: 1%;

        @media(max-width: 999px){
          font-size: 1.3rem;
        }
      }
      .error{
        font-family: 'arial',sans-serif;
        color: red;
        font-size: 1rem;
        padding-top: 5px;

          @media(max-width: 999px){
            font-size: .9rem;
        }
      }
      select{
        width: 50%;
        border-style: none;
        border: solid grey 2px;
        border-radius: 5px;
        height: 40px;
        font-size: 1rem;
        padding-left: 5px;
        background: white;
      }
      #select{
        width: 75%;
      }
    }  
  }
  .configButton{
    display: flex;
    width: 99%;
    justify-content: space-between;
    padding-bottom: 5%;
    text-decoration: none;
      
        button{ 
        width:20%;
        height: 50px;
        border-style: none;
        background: #87CEFA;
        font-family: 'Bebas Neue', cursive;
        font-size: 1.5rem;
        color: white;
        border-radius: 5px;

        @media(max-width: 450px){
          width: 30%;
        }
      }
    }
  }
  .cadastrado{
    display: flex;
    flex-direction: column;
    max-width: 60%;
    padding: 0 20%;
    padding-top: 3%;  
  
     @media(max-width: 999px){
        max-width: 70%;
        padding: 0 15%;
        padding-top: 3%;
      }
      @media(max-width: 899px){
        max-width: 80%;
        padding: 0 10%;
        padding-top: 3%;
      }
      @media(max-width: 450px) {
        max-width: 89%;
        padding: 0 5%;
        padding-top: 10%;
        height: 100vw;
      }

      h1{
        font-size: 3.5rem;
        font-family: 'Abel', sans-serif;
        padding-bottom: 5%;

          @media(max-width: 450px) {
            font-size: 2.5rem;
            padding-bottom: 10%;
        }
      }
      p{
        font-size: 2rem;
        font-family: 'Abel', sans-serif;
        padding-bottom: 5%;

        @media(max-width: 450px) {
          font-size: 1.5rem;
          font-family: 'Abel', sans-serif;
          padding-bottom: 10%;
        }
      }
    }
` 
