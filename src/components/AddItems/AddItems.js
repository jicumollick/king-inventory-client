import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const AddItems = () => {
  const [user, loading, error] = useAuthState(auth);
  // console.log(user);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target.image.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const supplierName = e.target.supplierName.value;

    const product = {
      name,
      email,
      image,
      description,
      price,
      quantity,
      supplierName,
    };

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        alert("product added succesfully");
        // e.target.reset();
      });

    console.log(name, email, image, description, price, quantity, supplierName);
  };
  return (
    <div>
      <h2>Add a product please</h2>
      <div className="w-50 mx-auto">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="name">Product Name</label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              defaultValue={user.email || ""}
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image URL</label>
            <input type="text" className="form-control" id="image" />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input type="text" className="form-control" id="description" />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input type="text" className="form-control" id="price" />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input type="text" className="form-control" id="quantity" />
          </div>
          <div className="form-group">
            <label htmlFor="supplierName">Supplier Name</label>
            <input type="text" className="form-control" id="supplierName" />
          </div>

          <button type="submit" className="btn btn-primary my-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
