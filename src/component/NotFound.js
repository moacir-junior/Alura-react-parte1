import React, {Fragment} from 'react';
import Cabecalho from './Cabecalho';

class NotFound extends React.Component{

  render(){
      return (
        <Fragment>
          <Cabecalho />
          <h1>Página não encontrada</h1>
        </Fragment>
      );
  }
}

export default NotFound;
