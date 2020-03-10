import React, { Fragment } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Cabecalho from './component/Cabecalho';
import Tabela from './component/Tabela';
import Form from './component/Formulario';
import Popup from './component/Popup';

class App extends React.Component {

  state = {
    autores: [
      { nome: 'Paulo', livro: 'React', preco: '1000' },
      { nome: 'Daniel', livro: 'Java', preco: '99' },
      { nome: 'Marcos', livro: 'Design', preco: '150' },
      { nome: 'Bruno', livro: 'DevOps', preco: '100' }
    ],
  }

  removerAutor = index => {

    const {autores} = this.state;

    this.setState(
      {
        autores : autores.filter((autor, posAtual) => {
          return posAtual !== index;
        }),
      }
    );
    Popup.exibirMensagem('sucesso', 'Registro removido com sucesso');
  }

  adicionarAutor = autor => {
    this.setState({autores : [...this.state.autores, autor]});
    Popup.exibirMensagem('sucesso', 'Registro adicionado com sucesso');
  }

  render() {
    return (
      <Fragment>
        <Cabecalho />
        <div className="container">
          <h1>Casa do Código</h1>
          <Tabela autores={this.state.autores} removerAutor={this.removerAutor} />
          <Form adicionarAutor={this.adicionarAutor}/>
        </div>
      </Fragment>
    );
  }
}

export default App;
