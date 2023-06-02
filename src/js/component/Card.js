import React from 'react'
export default function Card({props}){
    return (
        <div className="card col-1 bg-secondary text-white ">
            <div className="card-body">
                <h1 className="card-text">{props}</h1>
            </div>
        </div>
    );
}