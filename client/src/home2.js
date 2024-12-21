import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const redirect_to_roles = () => {
    navigate("/roles");
  };

  return (
    <div className="container">
      <div className="header">
        <h3>Pharmaceutical Supply Chain Flow:</h3>
      </div>
      <br />
      <div className="register">
        <h6>
          (Note: Here <u>Owner</u> is the person who deployed the smart contract
          on the blockchain)
        </h6>
        <h5>
          Step 1: Owner Should Register Raw material suppliers, Manufacturers,
          Distributors, and Retailers
        </h5>
        <h6>(Note: This is a one-time step. Skip to step 2 if already done)</h6>
        <button
          onClick={redirect_to_roles}
          className="btn btn-outline-primary btn-sm"
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Home;
