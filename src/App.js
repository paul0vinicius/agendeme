import React, { Component } from 'react';

import Servico from './components/servico/Servico';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h1>Bem vindo ao AgendeME!</h1>
          <div className="container flex">
            <div className="row">
              <div className="col-2">
                <Servico
                  id="GLIC"
                  preco={38.80}
                  tipo="Exame"
                  nome="Glicemia"
                  horario={new Date()}
                  descricao="Exame de Sangue contendo verificação de taxa de plaquetas"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
