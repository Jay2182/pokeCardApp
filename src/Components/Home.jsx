import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pokelist } from "./Pokelist";
import { Pagination } from "./Pagination";
import { Loading } from "./Loading";

export const Home = () => {
    const [pokemon, setPokemon] = useState([]);
    const [currentPageUrl, setCurrentPageUrl] = useState(
        "https://pokeapi.co/api/v2/pokemon/"
    );
    const [nextPageUrl, setNextPageUrl] = useState();
    const [prevPageUrl, setPrevPageUrl] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        let cancel;
        axios
            .get(currentPageUrl, {
                cancelToken: new axios.CancelToken((c) => (cancel = c)),
            })
            .then((res) => {
                setLoading(false);
                setNextPageUrl(res.data.next);
                setPrevPageUrl(res.data.previous);
                setPokemon(res.data.results.map((p) => p));
            });

        return () => {
            cancel();
        };
    }, [currentPageUrl]);

    const gotoPrevPage = () => {
        setCurrentPageUrl(prevPageUrl);
    };
    const gotoNextPage = () => {
        setCurrentPageUrl(nextPageUrl);
    };

    if (loading)
        return (
            <div className="loading">
                <Loading />
            </div>
        );

    return (
        <main className="main-body">
            <Pokelist pokemon={pokemon} />
            <Pagination
                gotoNextPage={nextPageUrl ? gotoNextPage : null}
                gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
            />
        </main>
    );
};
