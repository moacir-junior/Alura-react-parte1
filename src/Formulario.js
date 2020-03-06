import React from 'react';

class Formulario extends React.Component {
    constructor(props) {
        super(props);

        this.stateInicial = {
            nome: '',
            livro: '',
            preco: '',
        }

        this.state = this.stateInicial;
    }

    escutadorDeInput = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    submitFormulario = () => {
        const { adicionarAutor } = this.props;

        adicionarAutor(this.state);
        this.setState(this.stateInicial);
    }

    render() {
        const { nome, livro, preco } = this.state;

        return (
            <form>
                <div className="row">
                    <div className="input-field col s4">
                        <label htmlFor="nome" className="input-field">Nome</label>
                        <input type="text" id="nome" name="nome" className="validate" value={nome} onChange={this.escutadorDeInput} />
                    </div>

                    <div className="input-field col s4">
                        <label htmlFor="livro" className="input-field">Livro</label>
                        <input type="text" id="livro" name="livro" className="validate" value={livro} onChange={this.escutadorDeInput} />
                    </div>

                    <div className="input-field col s4">
                        <label htmlFor="preco" className="input-field">Preço</label>
                        <input type="text" id="preco" name="preco" className="validate" value={preco} onChange={this.escutadorDeInput} />
                    </div>
                </div>

                <button type="button" className="btn waves-effect waves-light blue darken-2 margin-botton-geral" onClick={this.submitFormulario}>
                    <i className="material-icons">send</i>Salvar
                </button>
            </form>
        );
    }
}

export default Formulario;