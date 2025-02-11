const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			planetas: [],
			vehiculos: [],
			favoritos: []
		},
		actions: {
			// GET para cargar personajes
			traerPersonajes: () => {
				fetch("https://www.swapi.tech/api/people")
					.then(response => response.json())
					.then(data => setStore({ personajes: data.results }))
					.catch(error => console.error("Error al cargar personajes:", error));
			},

			// GET para cargar planetas
			traerPlanetas: () => {
				fetch("https://www.swapi.tech/api/planets")
					.then(response => response.json())
					.then(data => setStore({ planetas: data.results }))
					.catch(error => console.error("Error al cargar planetas:", error));
			},

			// GET para cargar vehículos
			traerVehiculos: () => {
				fetch("https://www.swapi.tech/api/vehicles")
					.then(response => response.json())
					.then(data => setStore({ vehiculos: data.results }))
					.catch(error => console.error("Error al cargar vehículos:", error));
			},

			// Llamar todas las funciones al inicio de la app
			cargarDatosIniciales: () => {
				const actions = getActions();
				actions.traerPersonajes();
				actions.traerPlanetas();
				actions.traerVehiculos();
			},

			// Función para agregar a favoritos
			agregarFavorito: (item) => {
				setStore({
					favoritos: [...getStore().favoritos, item]
				});
			},

			// Función para eliminar un favorito
			eliminarFavorito: (itemToRemove) => {
				setStore({
					favoritos: getStore().favoritos.filter(item => item.uid !== itemToRemove.uid)
				});
			}
		}
	};
};

export default getState;
