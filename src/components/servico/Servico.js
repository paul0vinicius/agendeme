import React, { Component } from 'react';

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import Calendario from '../calendario/Calendario';
import Horarios from '../horarios/Horarios';

import PropTypes from "prop-types";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

class Servico extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      isLoading: false
    };

    this.toggle = this.toggle.bind(this);
    this.setLoading = this.setLoading.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  setLoading() {
    this.setState({
      isLoading: true
    });

    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 800);
  }

  render() {
    return (
      <div>
        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>{this.props.nome}</CardTitle>
            <CardSubtitle>{"R$" + this.props.preco}</CardSubtitle>
            <CardText>{this.props.descricao}</CardText>
            <Button onClick={this.toggle}>Agendar</Button>
          </CardBody>
        </Card>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{this.props.nome}</ModalHeader>
          <ModalBody>
            <h5>Descrição...</h5>
            <h6>Ainda restam XX vagas para essa semana:</h6>
            <div className="row">
              <div className="col-6">
                <Calendario onSelect={this.setLoading} />
              </div>
              <div className="col-6">
                {this.state.isLoading && <div>Buscando horários para esse dia.....</div>}
                {!this.state.isLoading && <Horarios />}
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

Servico.propTypes = {
  id: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  preco: PropTypes.number.isRequired,
  tipo: PropTypes.string.isRequired,
  horario: PropTypes.instanceOf(Date),
  descricao: PropTypes.string.isRequired,
  apelido: PropTypes.string,
};

export default Servico;
