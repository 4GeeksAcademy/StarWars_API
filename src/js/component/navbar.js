import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import SW_LOGO from "../../img/SW_LOGO.png";
import { Dropdown } from "react-bootstrap";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	// Función para eliminar un favorito
	const handleRemoveFavorite = (favorite) => {
		actions.eliminarFavorito(favorite);
	};

	return (
		<nav className="navbar navbar-dark bg-dark mb-3 px-3 d-flex justify-content-between align-items-center">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img src={SW_LOGO} alt="Star Wars Logo" style={{ height: "50px" }} />
				</span>
			</Link>
			<Dropdown>
				<Dropdown.Toggle variant="outline-warning" id="dropdown-favorites">
					My Favorites
				</Dropdown.Toggle>

				<Dropdown.Menu>
					{store.favoritos.length > 0 ? (
						store.favoritos.map((favorito, index) => (
							<Dropdown.Item 
								key={index} 
								className="d-flex justify-content-between align-items-center"
							>
								{favorito.name}
								<button 
									className="btn btn-danger btn-sm" 
									onClick={() => handleRemoveFavorite(favorito)}
								>
									🗑️
								</button>
							</Dropdown.Item>
						))
					) : (
						<Dropdown.Item disabled>No favorites added</Dropdown.Item>
					)}
				</Dropdown.Menu>
			</Dropdown>
		</nav>
	);
};
