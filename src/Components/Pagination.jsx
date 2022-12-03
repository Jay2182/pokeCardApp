import React from "react";

export const Pagination = ({ gotoNextPage, gotoPrevPage }) => {
    return (
        <div className="page-navigation">
            {gotoPrevPage && (
                <button className="btn prev-btn" onClick={gotoPrevPage}>
                    Previous
                </button>
            )}
            {gotoNextPage && (
                <button className="btn next-btn" onClick={gotoNextPage}>
                    Next
                </button>
            )}
        </div>
    );
};
