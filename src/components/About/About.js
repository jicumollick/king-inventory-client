import React from "react";

const About = () => {
  return (
    <div className="container">
      <h1 className="text-center primary-color py-5"> About Us</h1>
      <div className="d-lg-flex pb-5 justify-content-center ">
        {/* text part  */}
        <div className="col-lg-6 ">
          <h2>Who We Are ?</h2>
          <p className="py-5">
            King Inventory is an ISO certified inventory management system since
            2003. We basically Manage Electronics type Inventory stock house.
            Where a Stock can be monitor throw dashboard. A company can monitor
            all of his electronics products status in a single application.
          </p>
          <p>
            we ensure a best quality 24/7 service after sell of our product. We
            are encouraging you to trial our application for one time. That's
            all from king inventory{" "}
          </p>
        </div>
        {/* image part  */}
        <div className="col-lg-6">
          <img
            src="http://ww1.prweb.com/prfiles/2020/02/04/16887382/ISO-9001-2015-modality-solutions.jpg"
            alt=""
            className="img-fluid w-75"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
