import React from "react";

function Home() {
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-lg-12 text-center mt-4">
          <h1 className="">Welcome Home !</h1>
          <img
            className="img-fluid mt-5"
            src="https://images.pexels.com/photos/10247029/pexels-photo-10247029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            style={{ width: "1000px", height: "500px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
