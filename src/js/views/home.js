import React from "react";
import "../../styles/home.css";
import { CardPersonajes } from "../component/cardPersonajes";
import { CardPlanetas } from "../component/cardPlanetas";
import { CardVehiculos } from "../component/cardVehiculos";

export const Home = () => (

	<div>
		<CardPersonajes />
		<CardPlanetas />
		<CardVehiculos />
	</div>
);