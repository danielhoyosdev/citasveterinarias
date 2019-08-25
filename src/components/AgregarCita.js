import React from "react";

class AgregarCita extends React.Component {
  state = {};

  render() {
    return (
      <div className="card mt-5">
        <div className="card-body">
            <h2 className="card-title text-center">Agregar Cita</h2>
            <form>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Mascota: </label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" placeholder="Nombre Mascota"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Propietario: </label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" placeholder="Nombre Propietario"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Sintomas:</label>
                    <div className="col-sm-9">
                        <textarea className="form-control"></textarea>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-md-2 col-form-label">Fecha:</label>
                    <div className="col-md-4">
                        <input type="date" className="form-control" />
                    </div>

                    <label className="col-md-2 col-form-label">Hora:</label>
                    <div className="col-md-4">
                        <input type="time" className="form-control" />
                    </div>
                </div>

                <div className="form-group row justify-content-center mt-3">
                    <div className="col-sm-3">
                        <button type="submit" className="btn btn-success w-100">Agregar</button>
                    </div>
                </div>
            </form>
        </div>
      </div>
    );
  }
}

export default AgregarCita;
