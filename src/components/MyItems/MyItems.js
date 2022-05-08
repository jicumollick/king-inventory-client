import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import useProducts from "../../hooks/useProducts";
import auth from "../firebase.init";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [products, setProducts] = useProducts([]);

  const myProducts = products.filter((product) => product.email === user.email);

  // handle product delete
  const handleProductDelete = (id) => {
    const procced = window.confirm("Are you sure to delete ?");
    if (procced) {
      console.log(id);
      const url = `https://evening-badlands-51648.herokuapp.com/products/${id}`;

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
      <h1 className="py-5">You have {myProducts.length} items</h1>
      <div className="container pb-5">
        <div className="row g-4">
          {myProducts.map((product) => (
            <div
              key={product._id}
              class="card col-sm-12 col-md-4 p-5"
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            >
              <img class="card-img-top img-fluid" src={product.image} alt="" />
              <div class="card-body">
                <h5 class="card-title">{product.name}</h5>
                <p class="card-text">{product.description}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleProductDelete(product._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyItems;
