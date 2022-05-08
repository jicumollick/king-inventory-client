import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
const InventoryUpdate = () => {
  const [user, loading, error] = useAuthState(auth);
  const [product, setProduct] = useState({});
  const [delivered, setDelivered] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const url = `http://localhost:5000/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  // handle update
  const handleUpdateProduct = (e) => {
    // e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target.image.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    let quantity = e.target.quantity.value;
    const supplierName = e.target.supplierName.value;
    const AddQuantity = parseInt(e.target.AddQuantity.value);
    if (AddQuantity) {
      quantity = parseInt(quantity) + AddQuantity;
    }
    if (delivered) {
      quantity--;
    }

    const updatedProduct = {
      name,
      email,
      image,
      description,
      price,
      quantity,
      supplierName,
    };

    const url = `http://localhost:5000/products/${id}`;

    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log("success", data);
        alert("product Updated succesfully");
        // e.target.reset();
      });

    // console.log(name, email, image, description, price, quantity, supplierName);
  };

  return (
    <div>
      <h2>Updating Product {product.name}</h2>

      <div>
        <div className="w-50 mx-auto">
          <form onSubmit={(e) => handleUpdateProduct(e)}>
            <div className="form-group">
              <label htmlFor="name">Product Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                defaultValue={product.name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                // defaultValue={user.email || ""}
                defaultValue={product.email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="image">Image URL</label>
              <input
                type="text"
                className="form-control"
                id="image"
                defaultValue={product.image}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                defaultValue={product.description}
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                className="form-control"
                id="price"
                defaultValue={product.price}
              />
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Quantity</label>
              <input
                type="text"
                className="form-control"
                id="quantity"
                defaultValue={product.quantity}
              />
            </div>
            <div className="form-group">
              <label htmlFor="supplierName">Supplier Name</label>
              <input
                type="text"
                className="form-control"
                id="supplierName"
                defaultValue={product.supplierName}
              />
            </div>

            <button type="submit" className="btn btn-primary my-3">
              Update
            </button>
            <div className="form-group py-5">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setDelivered(!delivered);
                }}
                style={{ float: "right" }}
              >
                Delivered
              </button>
            </div>
            <div className="form-group py-5">
              <label className="me-2" htmlFor="AddQuantity">
                {" "}
                Add More Quantity:
              </label>
              <input
                type="number"
                id="AddQuantity"
                name="AddQuantity"
                min="1"
                max="5000"
              />
              <button className="btn btn-primary ms-2" type="submit">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InventoryUpdate;
