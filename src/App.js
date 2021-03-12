import React, { useState } from 'react';
import { Footer, Form, Header } from './styledApp';
import ProgressBar from './components/progress-bar/index';
import DadosPessoais from './pages/dados-pessoais';
import DadosAcademicos from './pages/dados-academicos';
import DadosProfissionais from './pages/dados-profissionais';

const App = () => {

  const [form, setForm] = useState(0);
  const [line, setLine] = useState('');
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [ball, setBall] = useState('ball');
  const [ball1, setBall1] = useState('ball');
  const [ball2, setBall2] = useState('ball');
  const [nome, setNome] = useState('');
  const [id, setId] = useState('cadastrado');

  return (
    <>
      <Header>
        <h1>Formulário de cadastro</h1>
      </Header>
      <Form>
        <div className="title">
          <h1>Trabalhe Conosco</h1>
          <p>Cadastre seu currículo e participe das nossas seleções!</p>
        </div>
        <div className="dados">
          <h1>Dados pessoais</h1>
          <h1>Dados acadêmicos</h1>
          <h1>Dados profissionáis</h1>
          <h1>Cadastrado</h1>
        </div>
        <ProgressBar line={line} line1={line1} line2={line2} ball={ball} ball1={ball1} ball2={ball2} >
        </ProgressBar>
        {form === 0 &&
          <DadosPessoais setNome={setNome} setForm={setForm} setLine={setLine} setBall={setBall} />
        }
        {form === 1 &&
          <DadosAcademicos setForm={setForm} setLine={setLine} setBall={setBall} setLine1={setLine1} setBall1={setBall1} />
        }
        {form === 2 &&
          <DadosProfissionais setForm={setForm} setLine1={setLine1} setBall1={setBall1} setLine2={setLine2} setBall2={setBall2} setId={setId} />
        }
        {form === 3 &&
          <div id={id} className="cadastrado">
            <h1>{`Parabéns ${nome} !`}</h1>
            <p>Seus dados foram cadastrados com sucesso, agora é com a empresa.</p>
            <p>Boa sorte!</p>
          </div>
        }
      </Form>
      <Footer>
        <h1>Rafael Dutra &copy; 2021</h1>
      </Footer>
    </>
  );
}

export default App;
