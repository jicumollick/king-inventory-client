import React from "react";

const PopularItems = () => {
  return (
    <div>
      <h1 className="primary-color pb-lg-5 pb-sm-3">Popular Items</h1>

      <div>
        <div className="container">
          <div className="row">
            <div className=" col-md-4 col-sm-12 ">
              <div
                class="card "
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
              >
                <img src="..." class="card-img-top img-fluid" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Name</h5>
                  <p class="card-text">Short description</p>
                  <p class="card-text">price</p>
                  <p class="card-text">quantity</p>
                  <p class="card-text">Supplier</p>
                  <a href="/" class="btn btn-primary">
                    Update Stock
                  </a>
                </div>
              </div>
            </div>
            <div className=" col-md-4 col-sm-12 ">
              <div
                class="card "
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
              >
                <img src="..." class="card-img-top img-fluid" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Name</h5>
                  <p class="card-text">Short description</p>
                  <p class="card-text">price</p>
                  <p class="card-text">quantity</p>
                  <p class="card-text">Supplier</p>
                  <a href="/" class="btn btn-primary">
                    Update Stock
                  </a>
                </div>
              </div>
            </div>
            <div className=" col-md-4 col-sm-12 ">
              <div
                class="card "
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
              >
                <img src="..." class="card-img-top img-fluid" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Name</h5>
                  <p class="card-text">Short description</p>
                  <p class="card-text">price</p>
                  <p class="card-text">quantity</p>
                  <p class="card-text">Supplier</p>
                  <a href="/" class="btn btn-primary">
                    Update Stock
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularItems;
