import React from "react";

const Characters = ({ characters }) => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-lg-12 text-center mt-4">
          <h1 className=" mt-3">Stars of Game Of Thrones</h1>
          <button className=" btn btn-primary mb-2">Create</button>
        </div>
        <div className="row">
          {characters.map((character) => {
            return <Card character={character} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Characters;
