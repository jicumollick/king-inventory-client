import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import useProducts from "../../hooks/useProducts";
import auth from "../firebase.init";

const MyItems = () => {
  const [user, loading, error] = useAuthState(auth);
  const [products, setProducts] = useProducts([]);

  const myProducts = products.filter((product) => product.email === user.email);

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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyItems;
