import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import "./ManageItems.css";
const ManageItems = () => {
  const [products, setProducts] = useProducts([]);

  const navigate = useNavigate();

  const handleAddProduct = () => {
    navigate("/addItems");
  };
  return (
    <div className="">
      <h2 className="my-5">Manage Items</h2>
      <div className="container">
        <button
          className="btn btn-primary my-3 "
          onClick={() => handleAddProduct()}
        >
          Add New Item
        </button>
      </div>

      <div className="container">
        <div className="row gy-3 ">
          {products.map((product) => {
            return (
              <div className=" col-sm-12 col-md-4  ">
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
                      Short description: {product.description}
                    </p>
                    <p className="card-text">price: ${product.price}</p>
                    <p className="card-text">quantity: {product.quantity}</p>
                    <p className="card-text">Supplier: {product.supplier} </p>
                    <a href="/" className="btn btn-primary">
                      Update Stock
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
