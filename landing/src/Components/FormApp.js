import React from 'react'
import './Styles/FormStyle.css'

class FormApp extends React.Component {

    constructor(args){
        super(args)
        this.state = {
            name: '',
            phone: '',
            mail: '',
            comments: ''
        }
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    send(e){

    }

    render (){
        return(
            <main>
                <form action="">
                    <div>
                        <label htmlFor="name">Nombre</label>
                        <input name="name" id="name" value={this.state.name} onChange={this.onChange.bind(this)} type="text"
                        placeholder="Nombre"/>
                        
                    </div>
                    <div>
                        <label htmlFor="phone">Teléfono</label>
                        <input name="phone" id="phone" value={this.state.phone} onChange={this.onChange.bind(this)}
                        type="text" placeholder="Teléfono"/>
                        
                    </div>
                    <div>
                        <label htmlFor="mail">Correo</label>
                        <input name="mail" id="mail" value={this.state.mail} onChange={this.onChange.bind(this)} 
                        type="text" placeholder="Correo"/>
                        
                    </div>
                    <div>
                        <label htmlFor="comments">Comentarios</label>
                        <textarea name="comments" id="comments" value={this.state.comments} onChange={this.onChange.bind(this)}
                        placeholder="Comentarios"/>
                        
                    </div>
                    <button onClick={this.send.bind(this)}>Enviar</button>                    
                </form>
            </main>
        )
    }
}

export default FormApp