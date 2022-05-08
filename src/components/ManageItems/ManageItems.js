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

  const handleProductDelete = (id) => {
    const procced = window.confirm("Are you sure to delete ?");
    if (procced) {
      console.log(id);
      const url = `http://localhost:5000/products/${id}`;

      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log("delete succesfully");
            const remaining = products.filter((product) => product._id !== id);
            setProducts(remaining);
          }
        });
    }
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

      <div className="container pb-5">
        <div className="row gy-3 ">
          {products.map((product) => {
            return (
              <div key={product._id} className=" col-sm-12 col-md-4  ">
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
                    <p className="card-text">
                      Supplier: {product.supplierName}{" "}
                    </p>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleProductDelete(product._id)}
                    >
                      Delete
                    </button>
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
