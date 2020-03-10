import React from 'react';

const TableHead = (props) => {
  return (
    <thead>
      <tr>
        <th>{props.titulo}</th>
      </tr>
    </thead>
  );
}

const TableBody = (props) => {
  const linhas = props.itens.map(item => {
    return (
      <tr>
        <td>{item.item}</td>
      </tr>
    );
  });

  return (
    <tbody>
      {linhas}
    </tbody>
  );

}

class TabelaSimples extends React.Component{
  render(){
    return (
      <table className="centered highlight">
        <TableHead titulo={this.props.titulo}/>
        <TableBody itens={this.props.itens}/>
      </table>
    );
  }
}

export default TabelaSimples;
