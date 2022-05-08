import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useProducts from "../../../hooks/useProducts";
import "./PopularItems.css";
const PopularItems = () => {
  const [isLoading] = useState(false);
  const navigate = useNavigate();
  const [products] = useProducts([]);
  const popularProducts = products.slice(0, 6);

  // Spinner showing
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center m-5 p-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="primary-color pb-lg-5 pb-sm-3">Popular Items</h1>

      <div className="pb-5">
        <div className="container">
          <div className="row gy-3">
            {popularProducts.map((product) => {
              return (
                <div key={product._id} className=" col-md-4 col-sm-12 ">
                  <div
                    className="card "
                    style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                  >
                    <img
                      src={product.image}
                      className="card-img-top img-fluid img-responsive"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">Name: {product.name}</h5>
                      <p className="card-text">
                        Short description: {product.description}{" "}
                      </p>
                      <p className="card-text">price: ${product.price}</p>
                      <p className="card-text">quantity: {product.quantity}</p>
                      <p className="card-text">
                        Supplier: {product.supplierName}
                      </p>
                      <Link
                        to={`inventory/${product._id}`}
                        className="btn btn-primary"
                      >
                        Update Stock
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            className="btn btn-info my-5"
            onClick={() => {
              navigate("/manageItems");
            }}
          >
            Manage Inventories
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularItems;
