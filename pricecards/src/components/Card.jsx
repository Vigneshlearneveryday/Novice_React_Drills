import PropTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";
Card.propTypes = {
  plan: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  users: PropTypes.number.isRequired,
  storage: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  help: PropTypes.bool.isRequired,
};
function Card({ plan, price, users, storage, email , help }) {
  return (
    <div className="card mb-4 rounded-3 shadow-sm">
      <div className="card-header py-3">
        <h4 className="my-0 fw-normal">{plan}</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">
          ${price}
          <small className="text-body-secondary fw-light">/mo</small>
        </h1>
        <ul className="list-unstyled mt-3 mb-4">
          <li>{users} users included</li>
          <li>{storage} GB of storage</li>
          {email == "Normal" && <li>Email support</li>}
          {email == "Priority" && <li>Priority email support</li>}
          {email == "Phone" && <li>Phone and email support</li>}
          {help && <li>Help center access</li>}
        </ul>
        <button type="button" className="w-100 btn btn-lg btn-outline-primary">
          Sign up for free
        </button>
      </div>
    </div>
  );
}
export default Card;
