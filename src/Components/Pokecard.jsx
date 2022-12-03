import axios from "axios";
import React, { useState, useEffect } from "react";
import "../PokeCard.css";

export const Pokecard = ({ pokemon }) => {
    const [pokeDetail, setPokeDetail] = useState([]);

    useEffect(() => {
        // let cancel;
        // axios
        //     .get(pokemon.url, {
        //         cancelToken: new axios.CancelToken((c) => (cancel = c)),
        //     })
        //     .then((res) => {
        //         setPokeDetail(res.data);
        //     });

        // return () => {
        //     cancel();
        // };
        axios.get(pokemon.url).then((res) => {
            setPokeDetail(res.data);
        });
    }, [pokemon.url]);

    return (
        <div className="poke-card">
            <h2 className="poke-name">
                {"#" + pokeDetail.id + " "}
                {pokemon.name}
            </h2>
            {/* <p className="poke-url">{pokemon.url}</p> */}
            <div className="poke-detail">
                <div className="img-container">
                    <img
                        className="poke-image"
                        src={
                            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" +
                            pokeDetail.id +
                            ".svg"
                        }
                        alt={pokeDetail.name}
                    />
                </div>
                <div className="poke-table">
                    <table>
                        <tbody>
                            <tr>
                                <td className="poke-title">Height:</td>
                                <td className="poke-desc">
                                    {pokeDetail.height * 10} cm
                                </td>
                            </tr>
                            <tr>
                                <td className="poke-title">Weight:</td>
                                <td className="poke-desc">
                                    {pokeDetail.weight / 10} kg
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
