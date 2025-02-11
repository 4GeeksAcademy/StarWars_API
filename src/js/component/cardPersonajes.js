import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const CardPersonajes = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	const handleClick = (personaje) => {
		navigate("/detalles", { state: { personaje } });
	};

	const handleAddToFavorites = (personaje) => {
		actions.agregarFavorito(personaje);
	};

	return (
		<div className="row">
			<h2 className="mb-3 text-warning bg-black">Personajes</h2>
			{store.personajes.length > 0 ? (
				store.personajes.map((personaje) => (
					<div key={personaje.uid} className="col-md-3 my-3">
						<div className="card text-center shadow">
							<img 
								src={`https://starwars-visualguide.com/assets/img/characters/${personaje.uid}.jpg`} 
								className="card-img-top" 
								alt={personaje.name} 
								onError={(e) => e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"}
							/>
							<div className="card-body">
								<h5 className="card-title">{personaje.name}</h5>
								<button className="btn btn-outline-primary mx-2" onClick={() => handleClick(personaje)}>Read more...</button>
								<button className="btn btn-outline-warning mx-2" onClick={() => handleAddToFavorites(personaje)}>❤️</button>
							</div>
						</div>
					</div>
				))
			) : (
				<p>Cargando personajes...</p>
			)}
		</div>
	);
};
