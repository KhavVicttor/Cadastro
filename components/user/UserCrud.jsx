import React, { Component } from 'react';
import Main from '../template/main';
import axios from 'axios'

const heardProps = {
  icon: 'users',
  title: '   Usuários',
  subtitle: '  Cadastro: Incluir, Listar, Alterar e Excluir!'
};
//localizando o nosso banco
export default class UserCrud extends Component {
  render() {
    return (
      <Main {...heardProps}>
        <div className="display-4">Teste de Cadastro</div>
      </Main>
    );
  }
}
