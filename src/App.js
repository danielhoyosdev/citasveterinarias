import React from "react";

// Componentes
import Header from "./components/Header";
import AgregarCita from "./components/AgregarCita";

class App extends React.Component {
	state = {
		citas : []
	}
	
	crearCita = (cita) => {
		const citas =  [...this.state.citas, cita];
		this.setState({ citas });
	}

	render(){
		return(
			<div className="container">
      			<Header titulo="Citas Veterinarias" />
				<div className="row">
						<div className="col-md-6">
							<AgregarCita crearCita={ this.crearCita }/>
						</div>
						<div className="col-md-6"></div>
				</div>
    		</div>
		);
	}
}

export default App;
