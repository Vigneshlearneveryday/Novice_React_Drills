import React from "react";

const Cart = ({ total, items }) => {
  return (
    <div>
      <ol className="list-group list-group-numbered">
        {items.map((item) => {
          return (
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">{item.name}</div>
                Rs : {item.price}
              </div>
              <span class="badge text-bg-primary rounded-pill">X</span>
            </li>
          );
        })}
      </ol>
      <h1 className="mt-5 p-5">Total : {total}</h1>
    </div>
  );
};

export default Cart;
