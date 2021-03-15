import React from 'react';
import { useState, useEffect } from 'react';

const DadosAcademicos = ({ setForm, setLine, setLine1, setBall, setBall1 }) => {

  const [valueFormacao, setValueFormacao] = useState('');
  const [errorFormacao, setErrorFormacao] = useState(false);
  const [valueTipoFormação, setValueTipoFormacao] = useState('');
  const [errorTipoFormacao, setErrorTipoFormacao] = useState(false);
  const [valueInstituicao, setValueInstituicao] = useState('');
  const [errorInstituicao, setErrorInstituicao] = useState(false);
  const [valueStatus, setValueStatus] = useState('');
  const [errorStatus, setErrorStatus] = useState(false);
  const [valueDataInicio, setValueDataInicio] = useState('');
  const [errorDataInicio, setErrorDataInicio] = useState(false);
  const [valueDataTermino, setValueDataTermino] = useState('');
  const [errorDataTermino, setErrorDataTermino] = useState(false);
  const [valueCidade, setValueCidade] = useState('');
  const [errorCidade, setErrorCidade] = useState(false);
  const [valueEstado, setValueEstado] = useState('');
  const [errorEstado, setErrorEstado] = useState(false);

  function checkFormacao() {
    if (valueFormacao === '' || valueFormacao.replace(/^\s+|\s+$/g, '').length === 0) {
      setErrorFormacao('Campo não pode ser vazio');
      return false;
    }
    return true;
  }
  function checkTipoFormacao() {
    if (valueTipoFormação === '') {
      setErrorTipoFormacao('Campo não pode ser vazio');
      return false;
    }
    return true;
  }
  function checkInstituicao() {
    if (valueInstituicao === '' || valueInstituicao.replace(/^\s+|\s+$/g, '').length === 0) {
      setErrorInstituicao('Campo nao pode ser vazio');
      return false;
    }
    return true;
  }
  function checkStatus() {
    if (valueStatus === '') {
      setErrorStatus('Campo não pode ser vazio');
      return false;
    }
    return true;
  }
  function checkDataInicio() {
    if (valueDataInicio.length !== 10) {
      setErrorDataInicio('Data inválida');
      return false;
    }
    return true;
  }
  function checkDataTermino() {
    if (valueDataTermino.length !== 10) {
      setErrorDataTermino('Data inválida');
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
    if (valueFormacao !== '') {
      setErrorFormacao(false);
    }
  }, [valueFormacao]);

  useEffect(() => {
    if (valueTipoFormação !== '') {
      setErrorTipoFormacao(false);
    }
  }, [valueTipoFormação]);

  useEffect(() => {
    if (valueInstituicao !== '') {
      setErrorInstituicao(false);
    }
  }, [valueInstituicao]);

  useEffect(() => {
    if (valueStatus !== '') {
      setErrorStatus(false);
    }
  }, [valueStatus]);

  useEffect(() => {
    if (valueDataInicio !== '') {
      setErrorDataInicio(false);
    }
  }, [valueDataInicio]);

  useEffect(() => {
    if (valueDataTermino !== '') {
      setErrorDataTermino(false);
    }
  }, [valueDataTermino]);

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

  function checkForm() {
    checkFormacao();
    checkTipoFormacao();
    checkInstituicao();
    checkStatus();
    checkDataInicio();
    checkDataTermino();
    checkCidade();
    checkEstado();

    if (checkFormacao() && checkTipoFormacao() && checkInstituicao() && checkStatus()
      && checkDataInicio() && checkDataTermino && checkCidade() && checkEstado() === true) {
      return true;
    }
    else {
      return false;
    }
  }

  function nextForm() {
    if (checkForm() === true) {
      setForm(2);
      setLine('lineGreen');
      setBall('ballGreen');
      setLine1('lineColor');
      setBall1('ballColor');
    }
    else {
      setForm(1);
    }
  }
  function backForm() {
    setForm(0);
    setBall('ball');
    setLine('lineOutColor');
  }

  return (
    <>
      <form className="form">
        <div className="configForm">
          <label>
            <p>Formação:</p>
            <input value={valueFormacao} onChange={(e) => setValueFormacao(e.target.value)} className={errorFormacao ? 'input' : ''} name="formacao" maxLength="50" type="text" placeholder="Ex: Administração"></input>
            {errorFormacao &&
              <p className="error">{errorFormacao}</p>
            }
          </label>
          <label>
            <p>Tipo de formação:</p>
            <select value={valueTipoFormação} onChange={(e) => setValueTipoFormacao(e.target.value)} name="tipoDeFormacao" className={errorTipoFormacao ? 'input' : ''}>
              <option value=""></option>
              <option value='tecnico'>Técnico</option>
              <option value ="bacharelado">Bacharelado</option>
              <option value="licenciatura">Licenciatura</option>
              <option value="tecnologo">Tecnólogo</option>
              <option value="especializacao">Especialização</option>
              <option value="mba">MBA</option>
              <option value="mestrado">Mestrado</option>
              <option value="doutorado">Doutorado</option>
              <option value="posdoutorado">Pós-doutorado</option>
            </select>
            {errorTipoFormacao &&
              <p className="error">{errorTipoFormacao}</p>
            }
          </label>
        </div>
        <div className="configForm">
          <label>
            <p>Instituiçao de ensino:</p>
            <input value={valueInstituicao} onChange={(e) => setValueInstituicao(e.target.value)} name="instituicaoEnsino" maxLength="50" type="text" placeholder="Ex: Unicamp" className={errorInstituicao ? 'input' : ''}></input>
            {errorInstituicao &&
              <p className="error">{errorInstituicao}</p>
            }
          </label>
          <label>
            <p>Status:</p>
            <select value={valueStatus} onChange={(e) => setValueStatus(e.target.value)} name="status" className={errorStatus ? 'input' : ''} >
              <option value=""></option>
              <option value="incompleto">Incompleto</option>
              <option value="completo">Completo</option>
              <option value="trancado">Trancado</option>
            </select>
            {errorStatus &&
              <p className="error">{errorStatus}</p>
            }
          </label>
        </div>
        <div className="configForm">
          <label>
            <p>Data de início:</p>
            <input value={valueDataInicio} onChange={(e) => setValueDataInicio(e.target.value)} id="configDate" name="dataInicio" type="date" className={errorDataInicio ? 'input' : ''}></input>
            {errorDataInicio &&
              <p className="error">{errorDataInicio}</p>
            }
          </label>
          <label>
            <p>Data de termino:</p>
            <input value={valueDataTermino} onChange={(e) => setValueDataTermino(e.target.value)} id="configDate" name="dataTermino" type="date" className={errorDataTermino ? 'input' : ''}></input>
            {errorDataTermino &&
              <p className="error">{errorDataTermino}</p>
            }
          </label>
        </div>
        <div className="configForm">
          <label>
            <p>Cidade:</p>
            <input value={valueCidade} onChange={(e) => setValueCidade(e.target.value)} name="cidade" maxLength="30" type="text" placeholder="Cidade..." className={errorCidade ? 'input' : ''}></input>
            {errorCidade &&
              <p className="error">{errorCidade}</p>
            }
          </label>
          <label>
            <p>Estado:</p>
            <input value={valueEstado} onChange={(e) => setValueEstado(e.target.value)} name="estado" maxLength="19" type="text" placeholder="Estado..." className={errorEstado ? 'input' : ''}></input>
            {errorEstado &&
              <p className="error">{errorEstado}</p>
            }
          </label>
        </div>
        <div className="configButton">
          <button type="button" onClick={() => backForm()}>Anterior</button>
          <button type="button" onClick={() => nextForm()}>Próximo</button>
        </div>
      </form>
    </>
  );
}
export default DadosAcademicos;