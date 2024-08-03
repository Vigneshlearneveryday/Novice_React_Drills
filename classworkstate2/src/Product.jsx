import React from "react";

const Product = ({ product, addItem }) => {
  return (
    <div className="d-flex ">
      <div className="card" style={{ width: "15rem", height: "" }}>
        <img
          src={product.image}
          className="card-img-top"
          alt="image loading wait until render completely"
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <h6>{product.price}</h6>
          <button
            onClick={() => {
              addItem(product);
            }}
            className="btn btn-primary"
          >
            Add to cart
          </button>
          <p className=" text-start small m-4">
            {" "}
            *Surprise awaiting in the checkout
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
