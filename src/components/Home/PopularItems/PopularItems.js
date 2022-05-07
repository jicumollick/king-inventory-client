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
                className="card "
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
              >
                <img src="..." className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Name</h5>
                  <p className="card-text">Short description</p>
                  <p className="card-text">price</p>
                  <p className="card-text">quantity</p>
                  <p className="card-text">Supplier</p>
                  <a href="/" className="btn btn-primary">
                    Update Stock
                  </a>
                </div>
              </div>
            </div>
            <div className=" col-md-4 col-sm-12 ">
              <div
                className="card "
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
              >
                <img src="..." className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Name</h5>
                  <p className="card-text">Short description</p>
                  <p className="card-text">price</p>
                  <p className="card-text">quantity</p>
                  <p className="card-text">Supplier</p>
                  <a href="/" className="btn btn-primary">
                    Update Stock
                  </a>
                </div>
              </div>
            </div>
            <div className=" col-md-4 col-sm-12 ">
              <div
                className="card "
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
              >
                <img src="..." className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Name</h5>
                  <p className="card-text">Short description</p>
                  <p className="card-text">price</p>
                  <p className="card-text">quantity</p>
                  <p className="card-text">Supplier</p>
                  <a href="/" className="btn btn-primary">
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
