import React, { Component } from 'react';
import './App.css';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';

const muiTheme = getMuiTheme({
  palette: {
    textColor: '#F44336',
    borderColor: '#F44336',
  },
  appBar: {
    height: 50,
  },
});

class Form extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            nombre:'',
            correo:'',
            mensaje:''
        };

    }
    
    handleSubmit(e){
        e.preventDefault();
        console.log('Submitted!!!', this.state.nombre + " - " + this.state.correo + " - " + this.state.mensaje);
        
        
    }
  render() {
    return (
      <div className="bg-wrap">
        <div className="container">
          <div className="content">
            <h2>Contacto</h2>
            <div className="m-c row">
               <div className="col-xs-6">
                   <MuiThemeProvider muiTheme={muiTheme}>
                   <form onSubmit={this.handleSubmit}> 
                        <TextField 
                        hintText="Ingresar nombre..."
                        value={this.state.name}
                        onChange={e => this.setState({ nombre: e.target.value })}
                        /><br/>

                        <TextField 
                        hintText="Ingresar correo..."
                        value={this.state.correo}
                        type="correo"
                        onChange={e => this.setState({ correo: e.target.value })}
                        /><br/>

                        <TextField 
                        hintText="Ingresar mensaje..."
                        value={this.state.mensaje}
                        onChange={e => this.setState({ mensaje: e.target.value })}
                        multiLine={true}
                        /><br/>
                        
                        <FlatButton
                        backgroundColor="#F44336"
                        hoverColor="#F44336"
                        className="dark-btn-text"
                        type="submit"
                        label="Submit!!"
                        />

                        
                    </form>
                    </MuiThemeProvider>
                </div>
               <div className="col-xs-6">
                   <h4>Ingresar</h4>
                   <p>Nombre: {this.state.nombre} </p>
                   <p>correo: {this.state.correo} </p>
                   <p>Mensaje: {this.state.mensaje} </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;