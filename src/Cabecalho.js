import React from 'react';

class Cabecalho extends React.Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper blue darken-2">
                    <a href="/" className="brand-logo">Casa do Código</a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="/autores">Autores</a></li>
                        <li><a href="/livros">Livros</a></li>
                        <li><a href="/sobre">Sobre</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Cabecalho;