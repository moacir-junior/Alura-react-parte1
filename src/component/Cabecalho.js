import React from 'react';
import LinkWrapper from './LinkWrapper';

class Cabecalho extends React.Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper blue darken-2">
                    <LinkWrapper to="/" className="brand-logo" activeStyle={{}}>Casa do Código</LinkWrapper>
                    <ul className="right hide-on-med-and-down">
                        <li><LinkWrapper to="/autores">Autores</LinkWrapper></li>
                        <li><LinkWrapper to="/livros">Livros</LinkWrapper></li>
                        <li><LinkWrapper to="/sobre">Sobre</LinkWrapper></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Cabecalho;
