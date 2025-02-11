import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Detalles = () => {
    const location = useLocation();
    const { personaje, planeta, vehiculo } = location.state || {};

    // Estado para los datos completos
    const [detalles, setDetalles] = useState(null);
    const [imagen, setImagen] = useState("");

    useEffect(() => {
        if (personaje) {
            fetch(`https://www.swapi.tech/api/people/${personaje.uid}`)
                .then(response => response.json())
                .then(data => {
                    setDetalles(data.result.properties);
                    setImagen(`https://starwars-visualguide.com/assets/img/characters/${personaje.uid}.jpg`);
                });
        }
        if (planeta) {
            fetch(`https://www.swapi.tech/api/planets/${planeta.uid}`)
                .then(response => response.json())
                .then(data => {
                    setDetalles(data.result.properties);
                    setImagen(`https://starwars-visualguide.com/assets/img/planets/${planeta.uid}.jpg`);
                });
        }
        if (vehiculo) {
            fetch(`https://www.swapi.tech/api/vehicles/${vehiculo.uid}`)
                .then(response => response.json())
                .then(data => {
                    setDetalles(data.result.properties);
                    setImagen(`https://starwars-visualguide.com/assets/img/vehicles/${vehiculo.uid}.jpg`);
                });
        }
    }, [personaje, planeta, vehiculo]);

    if (!detalles) {
        return <p>Cargando detalles...</p>;
    }

    return (
        <div>
            <h2 className="text-warning bg-black">Detalles</h2>
            <div className="d-flex">

            {imagen && <img src={imagen} alt={detalles.name} className="img-fluid mt-3 mb-3 me-3"/>}
            <div className="mt-3">

            {personaje && (
                <div>
                    <h3>{detalles.name}</h3>
                    <p>Año de nacimiento: {detalles.birth_year}</p>
                    <p>Género: {detalles.gender}</p>
                    <p>Altura: {detalles.height} cm</p>
                    <p>Peso: {detalles.mass} kg</p>
                    <p>Color de cabello: {detalles.hair_color}</p>
                    <p>Color de ojos: {detalles.eye_color}</p>
                </div>
            )}
            {planeta && (
                <div>
                    <h3>{detalles.name}</h3>
                    <p>Clima: {detalles.climate}</p>
                    <p>Población: {detalles.population}</p>
                    <p>Terreno: {detalles.terrain}</p>
                    <p>Superficie acuática: {detalles.surface_water}%</p>
                </div>
            )}
            {vehiculo && (
                <div>
                    <h3>{detalles.name}</h3>
                    <p>Modelo: {detalles.model}</p>
                    <p>Fabricante: {detalles.manufacturer}</p>
                    <p>Capacidad de pasajeros: {detalles.passengers}</p>
                    <p>Consumo de combustible: {detalles.fuel_consumption}</p>
                </div>
            )}
            </div>
            </div>
        </div>
    );
};
