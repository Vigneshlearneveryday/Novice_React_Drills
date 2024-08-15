import React from 'react'
import "./App.css"



function Card({character}) {
  return (
    <div className= "card m-1" style={{ width: "20rem" }}>
      <img src={character.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text">{character.description}</p>
        <a href="#" className="btn btn-primary">
          Read More!
        </a>
      </div>
    </div>
  );
}

export default Card
