import React from "react";
import { Pokecard } from "./Pokecard";
import "../PokeList.css";

export const Pokelist = ({ pokemon }) => {
    return (
        <div className="poke-list-container">
            {pokemon.map((p) => (
                <Pokecard key={p.name} pokemon={p} />
            ))}
        </div>
    );
};
