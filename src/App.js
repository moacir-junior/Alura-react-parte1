import React, { Fragment } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Cabecalho from './Cabecalho';
import Tabela from './Tabela';
import Form from './Formulario';

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
  }

  adicionarAutor = autor => {
    this.setState({autores : [...this.state.autores, autor]});
  }

  render() {
    return (
      <Fragment>
        <Cabecalho />
        <div className="container">
          <Tabela autores={this.state.autores} removerAutor={this.removerAutor} />
          <Form adicionarAutor={this.adicionarAutor}/>
        </div>
      </Fragment>
    );
  }
}

export default App;
