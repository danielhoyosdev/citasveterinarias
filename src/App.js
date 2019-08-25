import React from "react";

// Componentes
import Header from "./components/Header";
import AgregarCita from "./components/AgregarCita";

function App() {
  return (
    <div className="container">
      	<Header titulo="Citas Veterinarias" />
		<div className="row">
				<div className="col-md-6">
					<AgregarCita />
				</div>
				<div className="col-md-6"></div>
		</div>
    </div>
  );
}

export default App;
