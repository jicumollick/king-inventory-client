import React from "react";

const Banner = () => {
  return (
    <div className="">
      <div className="container d-lg-flex justify-content-center align-items-center min-vh-50 py-lg-5 py-sm-5 my-lg-5 my-sm-5  ">
        {/* text part */}
        <div className="col-lg-6">
          <h2>
            Welcome to <span className="primary-color">King Inventory </span>
          </h2>
          <p>
            {" "}
            <small>
              A very trusted inventory manaagament system in the world right
              now.
            </small>{" "}
          </p>
        </div>
        {/* image part */}
        <div className=" col-lg-6">
          <img
            src="https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/Old_Electronics_hero_1.jpg"
            alt=""
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
