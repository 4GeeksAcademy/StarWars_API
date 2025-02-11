import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const CardPlanetas = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	const handleClick = (planeta) => {
		navigate("/detalles", { state: { planeta } });
	};

	const handleAddToFavorites = (planeta) => {
		actions.agregarFavorito(planeta);
	};

	return (
		<div className="row">
			<h2 className="mb-3 text-warning bg-black">Planetas</h2>
			{store.planetas.length > 0 ? (
				store.planetas.map((planeta) => (
					<div key={planeta.uid} className="col-md-3 my-3">
						<div className="card text-center shadow">
							<img 
								src={`https://starwars-visualguide.com/assets/img/planets/${planeta.uid}.jpg`} 
								className="card-img-top" 
								alt={planeta.name} 
								onError={(e) => e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"}
							/>
							<div className="card-body">
								<h5 className="card-title">{planeta.name}</h5>
								<button className="btn btn-outline-primary mx-2" onClick={() => handleClick(planeta)}>Read more...</button>
								<button className="btn btn-outline-warning mx-2" onClick={() => handleAddToFavorites(planeta)}>❤️</button>
							</div>
						</div>
					</div>
				))
			) : (
				<p>Cargando planetas...</p>
			)}
		</div>
	);
};
