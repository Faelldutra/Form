import React from 'react';
import { useState, useEffect } from 'react';

const DadosPessoais = ({ setNome, setForm, setLine, setBall }) => {

  const [valueNome, setValueNome] = useState('');
  const [errorNome, setErrorNome] = useState(false);
  const [valueSobrenome, setValueSobrenome] = useState('');
  const [errorSobrenome, setErrorSobrenome] = useState(false);
  const [valueCpf, setValueCpf] = useState('');
  const [errorCpf, setErrorCpf] = useState(false);
  const [valueCelular, setValueCelular] = useState('');
  const [errorCelular, setErrorCelular] = useState(false);
  const [valueEmail, setValueEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);
  const [valueNascimento, setValueNascimento] = useState('');
  const [errorNascimento, setErrorNascimento] = useState(false);
  const [valueGenero, setValueGenero] = useState('');
  const [errorGenero, setErrorGenero] = useState(false);
  const [valueEstadoCivil, setValueEstadoCivil] = useState('');
  const [errorEstadoCivil, setErrorEstadoCivil] = useState(false);
  const [valueEndereco, setValueEndereco] = useState('');
  const [errorEndereco, setErrorEndereco] = useState(false);
  const [valueBairro, setValueBairro] = useState('');
  const [errorBairro, setErrorBairro] = useState(false);
  const [valueNumero, setValueNumero] = useState('');
  const [errorNumero, setErrorNumero] = useState(false);
  const [valueCidade, setValueCidade] = useState('');
  const [errorCidade, setErrorCidade] = useState(false);
  const [valueEstado, setValueEstado] = useState('');
  const [errorEstado, setErrorEstado] = useState(false);
  
  function CPF(cpf) {
    cpf = cpf.replace(/\D/g, "")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    return cpf
  }
  function Cel(cel) {
    cel = cel.replace(/\D/g, "")
    cel = cel.replace(/^(\d)/, "($1")
    cel = cel.replace(/(.{3})(\d)/, "$1)$2")
    cel = cel.replace(/(\d{5})(\d)/, "$1-$2")
    return cel;
  }
  function IsEmail(email) {
    const emailCheck = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailCheck.test(email);
  }

  function checkNome() {
    if (valueNome === '' || valueNome.replace(/^\s+|\s+$/g, '').length === 0) {
      setErrorNome('Campo não pode ser vazio');
      return false;
    }
    if (valueNome !== '') {
      if (valueNome.length !== valueNome.replace(/[^a-zà-úA-ZÀ-Ú ]/g, '').length) {
        setErrorNome('Apenas letras são aceitas');
        return false;
      }
    }
    return true;
  }
  function checkSobrenome() {
    if (valueSobrenome === '' || valueSobrenome.replace(/^\s+|\s+$/g, '').length === 0) {
      setErrorSobrenome('Campo não pode ser vazio');
      return false;
    }
    if (valueSobrenome !== '') {
      if (valueSobrenome.length !== valueSobrenome.replace(/[^a-zà-úA-ZÀ-Ú ]/g, '').length) {
        setErrorSobrenome('Apenas letras são aceitas');
        return false;
      }
    }
    return true;
  }
  function checkCpf() {
    if (valueCpf === '') {
      setErrorCpf('Campo não pode ser vazio');
      return false;
    }
    if (valueCpf.length > 0 && valueCpf.length !== 14) {
      setErrorCpf('Quantidade de numeros inválida');
      return false;
    }
    return true;
  }
  function checkCelular() {
    if (valueCelular === '') {
      setErrorCelular('Campo não pode ser vazio');
      return false;
    }
    if (valueCelular.length > 0 && valueCelular.length !== 14) {
      setErrorCelular('Quantidade de numeros inválida');
      return false;
    }
    return true;
  }
  function checkEmail() {
    if (valueEmail === '') {
      setErrorEmail('Campo não pode ser vazio');
      return false;
    }
    if (valueEmail !== '') {
      if (IsEmail(valueEmail) === false) {
        setErrorEmail('E-mail inválido');
        return false;
      }
    }
    return true;
  }
  function checkNascimento() {
    if (valueNascimento.length !== 10) {
      setErrorNascimento('Data invalida');
      return false;
    }
    return true;
  }
  function checkGenero() {
    if (valueGenero === '') {
      setErrorGenero('Campo não pode ser vazio');
      return false;
    }
    return true;
  }
  function checkEstadoCivil() {
    if (valueEstadoCivil === '') {
      setErrorEstadoCivil('Campo não pode ser vazio');
      return false;
    }
    return true;
  }
  function checkEndereco() {
    if (valueEndereco === '' || valueEndereco.replace(/^\s+|\s+$/g, '').length === 0) {
      setErrorEndereco('Campo não pode ser vazio');
      return false;
    }
    return true;
  }
  function checkBairro() {
    if (valueBairro === '' || valueBairro.replace(/^\s+|\s+$/g, '').length === 0) {
      setErrorBairro('Campo não pode ser vazio');
      return false;
    }
    return true;
  }
  function checkNumero() {
    if (valueNumero === '' || valueNumero.replace(/^\s+|\s+$/g, '').length === 0) {
      setErrorNumero('Campo não pode ser vazio');
      return false;
    }
    return true;
  }
  function checkCidade() {
    if (valueCidade === '' || valueCidade.replace(/^\s+|\s+$/g, '').length === 0) {
      setErrorCidade('Campo não pode ser vazio');
      return false;
    }
    if (valueCidade !== '') {
      if (valueCidade.length !== valueCidade.replace(/[^a-zà-úA-ZÀ-Ú ]/g, '').length) {
        setErrorCidade('Apenas letras são aceitas');
        return false;
      }
    }
    return true;
  }
  function checkEstado() {
    if (valueEstado === '' || valueEstado.replace(/^\s+|\s+$/g, '').length === 0) {
      setErrorEstado('Campo não pode ser vazio');
      return false;
    }
    if (valueEstado !== '') {
      if (valueEstado.length !== valueEstado.replace(/[^a-zà-úA-ZÀ-Ú ]/g, '').length) {
        setErrorEstado('Apenas letras são aceitas');
        return false;
      }
    }
    return true;
  }

  useEffect(() => {
    if (valueNome !== '') {
      setErrorNome(false);
    }
  }, [valueNome]);

  useEffect(() => {
    if (valueSobrenome !== '') {
      setErrorSobrenome(false);
    }
  }, [valueSobrenome]);

  useEffect(() => {
    if (valueCpf !== '') {
      setErrorCpf(false);
    }
  }, [valueCpf]);

  useEffect(() => {
    if (valueCelular !== '') {
      setErrorCelular(false);
    }
  }, [valueCelular]);

  useEffect(() => {
    if (valueEmail !== '') {
      setErrorEmail(false);
    }
  }, [valueEmail]);

  useEffect(() => {
    if (valueNascimento !== '') {
      setErrorNascimento(false);
    }
  }, [valueNascimento]);

  useEffect(() => {
    if (valueGenero !== '') {
      setErrorGenero(false);
    }
  }, [valueGenero]);

  useEffect(() => {
    if (valueEstadoCivil !== '') {
      setErrorEstadoCivil(false);
    }
  }, [valueEstadoCivil]);

  useEffect(() => {
    if (valueEndereco !== '') {
      setErrorEndereco(false);
    }
  }, [valueEndereco]);

  useEffect(() => {
    if (valueBairro !== '') {
      setErrorBairro(false);
    }
  }, [valueBairro]);

  useEffect(() => {
    if (valueNumero !== '') {
      setErrorNumero(false);
    }
  }, [valueNumero]);

  useEffect(() => {
    if (valueCidade !== '') {
      setErrorCidade(false);
    }
  }, [valueCidade]);

  useEffect(() => {
    if (valueEstado !== '') {
      setErrorEstado(false);
    }
  }, [valueEstado]);

  useEffect(() => {
    setNome(valueNome);
  }, [valueNome, setNome]);

  function checkForm() {
    checkNome();
    checkSobrenome();
    checkCpf();
    checkCelular();
    checkEmail();
    checkNascimento();
    checkGenero();
    checkEstadoCivil();
    checkEndereco();
    checkBairro();
    checkNumero();
    checkCidade();
    checkEstado();

    if (checkNome() && checkSobrenome() && checkCpf() && checkCelular() && checkEmail()
      && checkNascimento() && checkGenero() && checkEstadoCivil() && checkEndereco()
      && checkBairro() && checkNumero() && checkCidade() && checkEstado() === true) {
      return true;
    }
    else {
      return false;
    }
  }

  function nextForm() {
    if (checkForm() === true) {
      setForm(1);
      setLine('lineColor');
      setBall('ballColor');
    }
    else {
      setForm(0);
    }
  }

  return (
    <>
      <form className="form">
        <div className="configForm">
          <label>
            <p>Nome:</p>
            <input value={valueNome} onChange={(e) => setValueNome(e.target.value)} className={errorNome ? 'input' : ''} name="nome" type="text" maxLength="20" placeholder="Nome..."></input>
            {errorNome &&
              <p className="error">{errorNome}</p>
            }
          </label>
          <label>
            <p>Sobrenome:</p>
            <input value={valueSobrenome} onChange={(e) => setValueSobrenome(e.target.value)} className={errorSobrenome ? 'input' : ''} name="sobrenome" type="text" maxLength="40" placeholder="Sobrenome..."></input>
            {errorSobrenome &&
              <p className="error">{errorSobrenome}</p>
            }
          </label>
        </div>
        <div className="configForm">
          <label>
            <p>CPF:</p>
            <input value={CPF(valueCpf)} onChange={(e) => setValueCpf(e.target.value)} className={errorCpf ? 'input' : ''} name="cpf" maxLength='14' type="text" placeholder="CPF..."></input>
            {errorCpf &&
              <p className="error">{errorCpf}</p>
            }
          </label>
          <label>
            <p>Celular:</p>
            <input value={Cel(valueCelular)} onChange={(e) => setValueCelular(e.target.value)} className={errorCelular ? 'input' : ''} maxLength="14" type="tel" placeholder="Celular..."></input>
            {errorCelular &&
              <p className="error">{errorCelular}</p>
            }
          </label>
        </div>
        <div className="configForm">
          <label>
            <p>E-mail:</p>
            <input value={valueEmail} onChange={(e) => setValueEmail(e.target.value)} className={errorEmail ? 'input' : ''} name="email" maxLength="40" type="email" placeholder="E-mail..."></input>
            {errorEmail &&
              <p className="error">{errorEmail}</p>
            }
          </label>
          <label>
            <p>Data de nascimento:</p>
            <input value={valueNascimento} onChange={(e) => setValueNascimento(e.target.value)} className={errorNascimento ? 'input' : ''} id="configDate" name="data" type="date"></input>
            {errorNascimento &&
              <p className="error">{errorNascimento}</p>
            }
          </label>
        </div>
        <div className="configForm">
          <label>
            <p>Genêro:</p>
            <select value={valueGenero} onChange={(e) => setValueGenero(e.target.value)} className={errorGenero ? 'input' : ''} name="genero">
              <option value=""></option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="outros">Outros</option>
            </select>
            {errorGenero &&
              <p className="error">{errorGenero}</p>
            }
          </label>
          <label>
            <p>Estado civil:</p>
            <select value={valueEstadoCivil} onChange={(e) => setValueEstadoCivil(e.target.value)} className={errorEstadoCivil ? 'input' : ''} name="estadoCivil">
              <option value=""></option>
              <option value="solteiro">Solteiro</option>
              <option value="casado">Casado</option>
              <option value="separado">Separado</option>
              <option value="divorciado">Divorciado</option>
              <option value="viuvo">Viúvo</option>
            </select>
            {errorEstadoCivil &&
              <p className="error">{errorEstadoCivil}</p>
            }
          </label>
        </div>
        <div className="configForm">
          <label>
            <p>Endereço:</p>
            <input value={valueEndereco} onChange={(e) => setValueEndereco(e.target.value)} className={errorEndereco ? 'input' : ''} name="endereco" maxLength="40" type="text" placeholder="Rua..."></input>
            {errorEndereco &&
              <p className="error">{errorEndereco}</p>
            }
          </label>
          <label>
            <p>Bairro:</p>
            <input value={valueBairro} onChange={(e) => setValueBairro(e.target.value)} className={errorBairro ? 'input' : ''} name="bairro" maxLength="40" type="text" placeholder="Bairro..."></input>
            {errorBairro &&
              <p className="error">{errorBairro}</p>
            }
          </label>
        </div>
        <div className="configForm">
          <label>
            <p>Numero:</p>
            <input value={valueNumero} onChange={(e) => setValueNumero(e.target.value)} className={errorNumero ? 'input' : ''} name="numero" maxLength="10" type="text" placeholder="Numero..."></input>
            {errorNumero &&
              <p className="error">{errorNumero}</p>
            }
          </label>
          <label>
            <p>Cidade:</p>
            <input value={valueCidade} onChange={(e) => setValueCidade(e.target.value)} className={errorCidade ? 'input' : ''} name="cidade" maxLength="50" type="text" placeholder="Cidade..."></input>
            {errorCidade &&
              <p className="error">{errorCidade}</p>
            }
          </label>
          <label>
            <p>Estado:</p>
            <input value={valueEstado} onChange={(e) => setValueEstado(e.target.value)} className={errorEstado ? 'input' : ''} name="estado" maxLength="19" type="text" placeholder="Estado..."></input>
            {errorEstado &&
              <p className="error">{errorEstado}</p>
            }
          </label>
        </div>
        <div className="configButton">
          <button type="button" onClick={() => nextForm()}>Próximo</button>
        </div>
      </form>
    </>
  );
}
export default DadosPessoais;