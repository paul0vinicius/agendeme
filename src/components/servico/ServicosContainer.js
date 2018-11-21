import React, { Component } from "react";
import Servico from "./Servico";

const servicos = {
  GLIC: {
    id: "GLIC",
    preco: 38.8,
    tipo: "Exame",
    nome: "Glicemia",
    horario: new Date(),
    descricao: "Exame de Sangue contendo verificação de taxa de plaquetas",
    imagem:
      "https://static.tuasaude.com/media/article/dy/70/hemoglobina_14029_l.jpg"
  },
  GRAV: {
    id: "GRAV",
    preco: 182,
    tipo: "Exame",
    nome: "Exame de Beta HCG",
    horario: new Date(),
    descricao:
      "Verificação da taxa hormonal de beta HCG a fim de comprovar a gravidez",
    imagem:
      "https://i0.wp.com/www.emotioncard.com.br/wp-content/uploads/2016/05/unnamed-1.png?w=300&ssl=1"
  }
};

export default class ServicosContainer extends Component {
  render() {
    const listaServicos = Object.keys(servicos).map(keyServico => {
      const servico = servicos[keyServico];

      return (
        <div className="col-6">
          <Servico
            id={servico.id}
            preco={servico.preco}
            tipo={servico.tipo}
            nome={servico.nome}
            horario={servico.horario}
            descricao={servico.descricao}
            imagem={servico.imagem}
          />
        </div>
      );
    });

    return (
      <div>
        <div className="row">{listaServicos}</div>
      </div>
    );
  }
}
