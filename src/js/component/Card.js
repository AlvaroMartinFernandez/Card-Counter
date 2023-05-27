import React from 'react'
export default function Card({props}){
    return (
        <div className="card col-1">
            <div className="card-body">
                <h1 className="card-text">{props}</h1>
            </div>
        </div>
    );
}