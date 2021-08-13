import React from "react";
import "./Styles/FormStyle.css";

class FormApp extends React.Component {
  constructor(args) {
    super(args);
    this.state = {
      name: "",
      phone: "",
      mail: "",
      comments: "",
    };
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  send(e) {}

  render() {
    return (
      <section className="section__form--container">
        <div className="section__form">
          <form className="form__container" action="">
            <h2 className="form__title">Contáctanos</h2>
            <div className="form__input">
              <label htmlFor="name">Nombre</label>
              <input
                name="name"
                id="name"
                value={this.state.name}
                onChange={this.onChange.bind(this)}
                type="text"
                placeholder="Nombre"
              />
            </div>
            <div className="form__input">
              <label htmlFor="phone">Teléfono</label>
              <input
                name="phone"
                id="phone"
                value={this.state.phone}
                onChange={this.onChange.bind(this)}
                type="text"
                placeholder="Teléfono"
              />
            </div>
            <div className="form__input">
              <label htmlFor="mail">Correo</label>
              <input
                name="mail"
                id="mail"
                value={this.state.mail}
                onChange={this.onChange.bind(this)}
                type="text"
                placeholder="Correo"
              />
            </div>
            <div className="area__container">
              <label htmlFor="comments">Comentarios</label>
              <textarea
                name="comments"
                id="comments"
                value={this.state.comments}
                onChange={this.onChange.bind(this)}
                placeholder="Comentarios"
              />
            </div>
            <button className="form__button" onClick={this.send.bind(this)}>
              Enviar
            </button>
          </form>
          <div className="section__img--container">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/landing-solar-center.appspot.com/o/imgs%2FFormImg.jpg?alt=media&token=1fe872ad-9fd0-4f9b-b665-8d293e177417"
              alt="Trabajadores instalando paneles"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default FormApp;
