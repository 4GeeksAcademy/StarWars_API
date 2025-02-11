import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const CardVehiculos = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	const handleClick = (vehiculo) => {
		navigate("/detalles", { state: { vehiculo } });
	};

	const handleAddToFavorites = (vehiculo) => {
		actions.agregarFavorito(vehiculo);
	};

	return (
		<div className="row">
			<h2 className="mb-3 text-warning bg-black">Vehículos</h2>
			{store.vehiculos.length > 0 ? (
				store.vehiculos.map((vehiculo) => (
					<div key={vehiculo.uid} className="col-md-3 my-3">
						<div className="card text-center shadow">
							<img 
								src={`https://starwars-visualguide.com/assets/img/vehicles/${vehiculo.uid}.jpg`} 
								className="card-img-top" 
								alt={vehiculo.name} 
								onError={(e) => e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"}
							/>
							<div className="card-body">
								<h5 className="card-title">{vehiculo.name}</h5>
								<button className="btn btn-outline-primary mx-2" onClick={() => handleClick(vehiculo)}>Detalles...</button>
								<button className="btn btn-outline-warning mx-2" onClick={() => handleAddToFavorites(vehiculo)}>❤️</button>
							</div>
						</div>
					</div>
				))
			) : (
				<p>Cargando vehículos...</p>
			)}
		</div>
	);
};
