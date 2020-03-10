import React, {Fragment} from 'react';
import Cabecalho from './Cabecalho';
import TabelaSimples from './TabelaSimples';

class Livros extends React.Component{

  livros = [
    {item: 'React'},
    {item: 'Java'},
    {item: 'Design'},
    {item: 'DevOps'}
  ];

  render(){
    return (
      <Fragment>
      <Cabecalho />
        <div className="container">
          <h1>Livros</h1>
          <TabelaSimples titulo={'Livros'} itens={this.livros}/>
        </div>
      </Fragment>
    );
  }
}

export default Livros;
