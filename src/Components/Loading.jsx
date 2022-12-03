import React from "react";
import "../Loading.css";

export const Loading = () => {
    return (
        <div className="loading-screen">
            <div class="loading-container">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="loading-text">
                <span>Loading...</span>
            </div>
        </div>
    );
};
