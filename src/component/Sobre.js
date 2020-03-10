import React, {Fragment} from 'react';
import Cabecalho from './Cabecalho';

class Sobre extends React.Component{

  render(){
    return (
      <Fragment>
        <Cabecalho />
        <div className="container">
          <h1>Sobre</h1>
          <p>Esta aplicação foi desenvolvida utilizando React.</p>
        </div>
      </Fragment>
    );
  }
}

export default Sobre;
