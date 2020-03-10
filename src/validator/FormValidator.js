import validador from 'validator';

class FormValidator{

  constructor(regras){
    this.regras = regras;
  }

  validar(state){
    let mapValidacoes = {resultadoValidacao: true, campos: {}};

    this.regras.forEach(regra => {
      const conteudoCampo = state[regra.campo];
      const metodo = typeof regra.metodo === 'string' ? validador[regra.metodo] : regra.metodo;
      const args = regra.args || [];
      const condicaoValida = regra.condicaoValida;

      if(metodo(conteudoCampo, args) !== condicaoValida){
        mapValidacoes.campos[regra.campo] = {resultadoValidacao: false, mensagem: regra.mensagem};
        mapValidacoes.resultadoValidacao = false;
      }else{
        mapValidacoes.campos[regra.campo] = {resultadoValidacao: true, mensagem: ''};
      }
    });
    return mapValidacoes;
  }
}

export default FormValidator;
