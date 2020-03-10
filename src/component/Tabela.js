import React from 'react';

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Autores</th>
                <th>Livros</th>
                <th>Preços</th>
                <th>Remover</th>
            </tr>
        </thead>
    );
}

const TableBody = (props) => {
    const linhas = props.autores.map((linha, index) => {
        return (
            <tr key={index}>
                <td>{linha.nome}</td>
                <td>{linha.livro}</td>
                <td>{linha.preco}</td>
                <td>
                    <button className="btn waves-effect waves-light blue darken-2" onClick={() => {props.removerAutor(index)}}>
                        <i className="material-icons">delete</i>Remover
                    </button>
                </td>
            </tr>
        );
    });

    return (
        <tbody>
            {linhas}
        </tbody>
    );
}

class Tabela extends React.Component {
    render() {
        const { autores, removerAutor } = this.props;

        return (
            <table className="centered highlight">
                <TableHead />
                <TableBody autores={autores} removerAutor={removerAutor}/>
            </table>
        );
    }
}

export default Tabela;