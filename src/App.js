import React, { Component } from "react";

import Servico from "./components/servico/Servico";

import "./App.css";
import ServicosContainer from "./components/servico/ServicosContainer";
import CustomNavbar from "./components/navbar/CustomNavbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomNavbar />
        <div>
          <h1>Bem vindo ao AgendeME!</h1>
          <div className="container flex">
            <ServicosContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
