import React from "react";
import uuid from 'uuid';

class AgregarCita extends React.Component {
  state = {
      error: false
  };

  nombreRef         = React.createRef();
  propietarioRef    = React.createRef();
  sintomasRef       = React.createRef();
  fechaRef          = React.createRef();
  horaRef           = React.createRef();

    crearCita = (e) => {
        e.preventDefault();

        const nombre = this.nombreRef.current.value, 
            propietario = this.propietarioRef.current.value,
            sintomas = this.sintomasRef.current.value,
            fecha = this.fechaRef.current.value,
            hora = this.horaRef.current.value;

        if( nombre === '' || propietario === '' || sintomas === '' || fecha === '' || hora === '' ){
            this.setState({ error : true });
        }else{
            const cita = { id: uuid(), nombre, propietario, sintomas, fecha, hora }
            this.props.crearCita(cita);
            e.currentTarget.reset();
            this.setState({ error : false })
        }
    }

    
    render() {

        const existError = this.state.error;
        
        return (
        <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title text-center">Agregar Cita</h2>
                <form onSubmit={ this.crearCita }>
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Mascota: </label>
                        <div className="col-sm-9">
                            <input ref={ this.nombreRef } type="text" className="form-control" placeholder="Nombre Mascota"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Propietario: </label>
                        <div className="col-sm-9">
                            <input ref={ this.propietarioRef } type="text" className="form-control" placeholder="Nombre Propietario"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Sintomas:</label>
                        <div className="col-sm-9">
                            <textarea ref={ this.sintomasRef } className="form-control"></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-2 col-form-label">Fecha:</label>
                        <div className="col-md-4">
                            <input ref={ this.fechaRef } type="date" className="form-control" />
                        </div>

                        <label className="col-md-2 col-form-label">Hora:</label>
                        <div className="col-md-4">
                            <input ref={ this.horaRef } type="time" className="form-control" min="08:00" max="18:00"/>
                        </div>
                    </div>

                    <div className="form-group row justify-content-center mt-3">
                        <div className="col-sm-3">
                            <button type="submit" className="btn btn-success w-100">Agregar</button>
                        </div>
                    </div>

                    { existError ? <div className="alert alert-danger text-center">Todos los campos son obligatorios.</div> : '' }
                </form>
            </div>
        </div>
    );
  }
}

export default AgregarCita;
