import React from "react";
import { Link } from "react-router-dom";

export const Header = ({ name }) => {
    return (
        <header>
            <div className="header">
                <div className="logo">
                    <span>{name}</span>
                </div>
                <div className="menu">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/pokeCardApp">Home</Link>
                            </li>
                            <li>
                                <Link to="/pokeCardApp/about">About</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};
