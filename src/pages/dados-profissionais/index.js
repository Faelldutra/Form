import { useEffect, useState } from 'react';

const DadosProfissionais = ({ setForm, setLine1, setLine2, setBall1, setBall2, setId }) => {

  const [valueEmpresa, setValueEmpresa] = useState('');
  const [errorEmpresa, setErrorEmpresa] = useState(false);
  const [valueCargo, setValueCargo] = useState('');
  const [errorCargo, setErrorCargo] = useState(false);
  const [valueDataInicio, setValueDataInicio] = useState('');
  const [errorDataInicio, setErrorDataInicio] = useState(false);
  const [valueDataTermino, setValueDataTermino] = useState('');
  const [errorDataTermino, setErrorDataTermino] = useState(false);
  const [valueTrabalhoAtual, setValueTrabalhoAtual] = useState('');
  const [errorTrabalhoAtual, setErrorTrabalhoAtual] = useState(false);
  const [valueCidade, setValueCidade] = useState('');
  const [errorCidade, setErrorCidade] = useState(false);
  const [valueEstado, setValueEstado] = useState('');
  const [errorEstado, setErrorEstado] = useState(false);
  const [valueIdioma, setValueIdioma] = useState('');
  const [errorIdioma, setErrorIdioma] = useState(false);
  const [valueNivel, setValueNivel] = useState('');
  const [errorNivel, setErrorNivel] = useState(false);

  function checkEmpresa() {
    if (valueEmpresa === '' || valueEmpresa.replace(/^\s+|\s+$/g, '').length === 0) {
      setErrorEmpresa('Campo não pode ser vazio');
      return false;
    }
    return true;
  }
  function checkCargo() {
    if (valueCargo === '' || valueCargo.replace(/^\s+|\s+$/g, '').length === 0) {
      setErrorCargo('Campo não pode ser vazio');
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
    if (valueDataTermino.length !== 10 && valueTrabalhoAtual === 'nao') {
      setErrorDataTermino('Data inválida');
      return false;
    }
    return true;
  }
  function checkTrabalhoAtual() {
    if (valueTrabalhoAtual === '') {
      setErrorTrabalhoAtual('Campo não pode ser vazio');
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
  function checkIdioma() {
    if (valueIdioma === '' || valueIdioma.replace(/^\s+|\s+$/g, '').length === 0) {
      setErrorIdioma('Campo não pode ser vazio');
      return false;
    }
    if (valueIdioma !== '') {
      if (valueIdioma.length !== valueIdioma.replace(/[^a-zà-úA-ZÀ-Ú ]/g, '').length) {
        setErrorIdioma('Apenas letras são aceitas');
        return false;
      }
    }
    return true;
  }
  function checkNivel() {
    if (valueNivel === '') {
      setErrorNivel('Campo não pode ser vazio');
      return false;
    }
    return true;
  }

  useEffect(() => {
    if (valueEmpresa !== '') {
      setErrorEmpresa(false);
    }
  }, [valueEmpresa]);

  useEffect(() => {
    if (valueCargo !== '') {
      setErrorCargo(false);
    }
  }, [valueCargo]);

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
    if (valueTrabalhoAtual !== '') {
      setErrorTrabalhoAtual(false);
    }
    if (valueTrabalhoAtual === 'sim') {
      setValueDataTermino('');
    }
  }, [valueTrabalhoAtual]);

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
    if (valueIdioma !== '') {
      setErrorIdioma(false);
    }
  }, [valueIdioma]);

  useEffect(() => {
    if (valueNivel !== '') {
      setErrorNivel(false);
    }
  }, [valueNivel]);

  function checkForm() {
    checkEmpresa();
    checkCargo();
    checkDataInicio();
    checkDataTermino();
    checkTrabalhoAtual();
    checkCidade();
    checkEstado();
    checkIdioma();
    checkNivel();

    if (checkEmpresa() && checkCargo() && checkDataInicio() && checkDataTermino() && checkTrabalhoAtual()
      && checkCidade() && checkEstado() && checkIdioma() && checkNivel() === true) {
      return true;
    }
    else {
      return false;
    }
  }
  function nextForm() {
    if (checkForm() === true) {
      setForm(3);
      setLine1('lineGreen');
      setBall1('ballGreen');
      setLine2('lineColor');
      setBall2('ballColor');
      setTimeout(()=>{
        setId('');
      }, 1000);
    }
    else {
      setForm(2);
    }
  }
  function backForm() {
    setForm(1);
    setBall1('ball');
    setLine1('lineOutColor');
  }

  return (
    <>
      <form className="form">
        <div className="configForm">
          <label>
            <p>Empresa:</p>
            <input value={valueEmpresa} onChange={(e) => setValueEmpresa(e.target.value)} className={errorEmpresa ? 'input' : ''} maxLength="50" name="empresa" type="text" placeholder="Ex: Goodyear"></input>
            {errorEmpresa &&
              <p className="error">{errorEmpresa}</p>
            }
          </label>
          <label>
            <p>Cargo:</p>
            <input value={valueCargo} onChange={(e) => setValueCargo(e.target.value)} className={errorCargo ? 'input' : ''} maxLength="50" name="cargo" type="text" placeholder="Ex: Auxiliar administrativo"></input>
            {errorCargo &&
              <p className="error">{errorCargo}</p>
            }
          </label>
        </div>
        <div className="configForm">
          <label>
            <p>Trabalho atual</p>
            <select value={valueTrabalhoAtual} onChange={(e) => setValueTrabalhoAtual(e.target.value)} id="select" className={errorTrabalhoAtual ? 'input' : ''} name="trabalhoAtual">
              <option></option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </select>
            {errorTrabalhoAtual &&
              <p className="error">{errorTrabalhoAtual}</p>
            }
          </label>
          <label>
            <p>Data de início:</p>
            <input value={valueDataInicio} onChange={(e) => setValueDataInicio(e.target.value)} className={errorDataInicio ? 'input' : ''} name="dataInicio" type="date"></input>
            {errorDataInicio &&
              <p className="error">{errorDataInicio}</p>
            }
          </label>
          {valueTrabalhoAtual === 'nao' &&
            <label>
              <p>Data de término:</p>
              <input value={valueDataTermino} onChange={(e) => setValueDataTermino(e.target.value)} className={errorDataTermino ? 'input' : ''} name="dataTermino" type="date"></input>
              {errorDataTermino &&
                <p className="error">{errorDataTermino}</p>
              }
            </label>
          }
        </div>
        <div className="configForm">
          <label>
            <p>Cidade:</p>
            <input value={valueCidade} onChange={(e) => setValueCidade(e.target.value)} className={errorCidade ? 'input' : ''} maxLength="30" name="cidade" type="text" placeholder="Ex: Americana"></input>
            {errorCidade &&
              <p className="error">{errorCidade}</p>
            }
          </label>
          <label>
            <p>Estado:</p>
            <input value={valueEstado} onChange={(e) => setValueEstado(e.target.value)} className={errorEstado ? 'input' : ''} maxLength="19" name="estado" type="text" placeholder="Ex: São Paulo"></input>
            {errorEstado &&
              <p className="error">{errorEstado}</p>
            }
          </label>
        </div>
        <div className="configForm">
          <label>
            <p>Idioma:</p>
            <input value={valueIdioma} onChange={(e) => setValueIdioma(e.target.value)} className={errorIdioma ? 'input' : ''} maxLength="20" name="idioma" type="text" placeholder="Ex: inglês"></input>
            {errorIdioma &&
              <p className="error">{errorIdioma}</p>
            }
          </label>
          <label>
            <p>Nível:</p>
            <select value={valueNivel} onChange={(e) => setValueNivel(e.target.value)} className={errorNivel ? 'input' : ''} name="nivel">
              <option value=""></option>
              <option value="basico">Básico</option>
              <option value="intermediario">Intermediário</option>
              <option value="avancado">Avançado</option>
              <option value="fluente">Fluente</option>
            </select>
            {errorNivel &&
              <p className="error">{errorNivel}</p>
            }
          </label>
        </div>
        <div className="configButton">
          <button onClick={() => backForm()}>Anterior</button>
          <button type="button" onClick={() => nextForm()}>Cadastrar</button>
        </div>
      </form>
    </>
  );
}
export default DadosProfissionais;