import React, {Fragment} from 'react';
import Cabecalho from './Cabecalho';
import TabelaSimples from './TabelaSimples';

class Autores extends React.Component {

  autores = [
    {item: 'Paulo'},
    {item: 'Daniel'},
    {item: 'Marcos'},
    {item: 'Bruno'}
  ];

  render(){
    return (
      <Fragment>
        <Cabecalho />
        <div className="container">
          <h1>Autores</h1>
          <TabelaSimples titulo={'Autores'} itens={this.autores}/>
        </div>
      </Fragment>
    );
  }
}

export default Autores;
