import React, { Component } from 'react';

class Formulario extends Component {
 
  constructor(props){
      super(props);

      this.stateInicial = {
          nome:'',
          livro:'',
          preco:'',
      }
 
      this.state = this.stateInicial;
  
    }

 escutadorDeInput = event => {
     const { name, value } = event.target;

     this.setState({
         [name] : value
     });
 }

submitForm = () => {
    this.props.escutadorDeSubmit(this.state);
    this.setState(this.stateInicial)
}

 render(){

 const { nome, livro, preco } = this.state;

    return(
        
        <form>
   <div className="row">
       <div className="input-field col s4">
    <label  className="input-field col" htmlFor="nome">Nome</label>
    <input
        className="validate"
        id="nome"
        type="text"
        name="nome"
        value={nome}
        onChange = {this.escutadorDeInput} />
       </div>

       <div className="input-field col s4" >
    <label className="input-field col" htmlFor="livro">Livro</label>
    <input
        className="validate"
        id="livro"
        type="text"
        name="livro"
        value={livro} 
        onChange = {this.escutadorDeInput }/>

       </div>

       <div className="input-field col s4">
    <label className="input-field col"  htmlFor="preco">Preço</label>
    <input
        className="validate"
        id="preco"
        type="text"
        name="preco"
        value={preco} 
        onChange = {this.escutadorDeInput } />
       </div>

    <button className="waves-effect waves-light btn amber accent-4" onClick={this.submitForm}type="button">Salvar
    </button>
    </div>
</form>


    );
 };

}

export default Formulario;