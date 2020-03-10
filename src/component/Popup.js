import M from 'materialize-css'

const Popup = {
  exibirMensagem: (status, mensagem) => {
    if(status === 'sucesso'){
      M.toast({html: mensagem, classes: 'green', displayLength: 2000});
    }else if(status === 'erro'){
      M.toast({html: mensagem, classes: 'red', displayLength: 2000});
    }
  }
}

export default Popup;
