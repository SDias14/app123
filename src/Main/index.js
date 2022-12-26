import React, {Fragment} from 'react';
import './style.css';




const Main = () => {

    // consumindo a api do viacep

    const [cep, setCep] = React.useState('');
    const [rua, setRua] = React.useState('');
    const [bairro, setBairro] = React.useState('');
    const [complemento, setComplemento] = React.useState('');
    const [gia, setGia] = React.useState('');
    const [ibge, setIbge] = React.useState('');
    const [localidade, setLocalidade] = React.useState('');
    const [uf, setUf] = React.useState('');

    const handleCep = (event) => {
        setCep(event.target.value);
    } 

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            setRua(data.logradouro);
            setBairro(data.bairro);
            setComplemento(data.complemento);
            setGia(data.gia);
            setIbge(data.ibge);
            setLocalidade(data.localidade);
            setUf(data.uf);
        })
    
    }

    return (
        <Fragment>
            <div className="container">
                <div className="content">
                    <h1>Consulte o CEP</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Digite o CEP" value={cep} onChange={handleCep} />
                        <button type="submit">Consultar</button>
                    </form>
                    <div className="resultadosDados">
                        <div className="resultadoCep box-info">
                            <h1>Rua</h1>
                            <div id="rua" className="info">{rua}</div>
                        </div>
                        <div className="resultadoCep box-info">
                            <h1>Bairro</h1>
                            <div id="bairro" className="info">{bairro}</div>
                        </div>
                        <div className="resultadoCep box-info">
                            <h1>Complemento</h1>
                            <div id="complemento" className="info">{complemento}</div>
                        </div>
                        <div className="resultadoCep box-info">
                            <h1>Gia</h1>
                            <div id="gia" className="info">{gia}</div>
                        </div>
                        <div className="resultadoCep box-info">
                            <h1>IGBE</h1>
                            <div id="ibge" className="info">{ibge}</div>
                        </div>
                        <div className="resultadoCep box-info">
                            <h1>Localidade</h1>
                            <div id="localidade" className="info">{localidade}</div>
                        </div>
                        <div className="resultadoCep box-info">
                            <h1>UF</h1>
                            <div id="uf" className="info">{uf}</div>
                        </div>
                    </div>
                </div>

            </div>

        </Fragment>


    )
}

export default Main;