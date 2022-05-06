import React from "react";

const Blogs = () => {
  return (
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            1) What is the difference between javascript and nodejs ?
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p>
              Javascript is a <strong> pragramming language</strong> but Node js
              is a <strong> runtime environment </strong> for javacript.
              Javascript can only run in <strong>browser </strong> but with the
              help of node js we can run javascript in <strong> server.</strong>{" "}
              Javascript Mostly Used in <strong> client side</strong> but Node
              js is Mostly Used in <strong> server side. </strong>. Javascript
              is the updated version of <strong>ECMA script</strong> and written
              in c++. but Node js is{" "}
              <strong> written in c,c++,javascript.</strong>
            </p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            2) When should you use nodejs and when should you use mongodb ?
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p>
              there is many aspects to use node js .{" "}
              <strong>
                1) when we want to maintain same stack in client and server
                side.
              </strong>{" "}
              <strong>2) when application show real time data.</strong>
              <strong>
                3) when you need to access help of big package manager like npm
              </strong>
            </p>
            <p>
              there is many aspects to use mongodb.
              <strong> 1) when your data is Document Oriented </strong>
              <strong>
                {" "}
                2) when you want a good performance and scalability.
              </strong>
              <strong>
                {" "}
                3) when you want a data format in json and no join.
              </strong>
            </p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            3) what is the differences between sql and nosql databases ?
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p>
              Sql is <strong>relational database management system. </strong>{" "}
              Nosql is{" "}
              <strong>non relational database management system. </strong>
              Sql has <strong>fixed schema</strong>. But Nosql has{" "}
              <strong>dynamic schema.</strong> Sql is not suited for{" "}
              <strong>hierarchical data storage</strong>. But Nosql is{" "}
              <strong>suited.</strong> Sql is{" "}
              <strong>Vertically scalable.</strong> But Nosql is{" "}
              <strong>Horizontally scalable.</strong>
            </p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            4) What is the purpose of jwt and how does it work ?
          </button>
        </h2>
        <div
          id="collapseFour"
          class="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p>
              We use jwt to implement a{" "}
              <strong> secure authentication system. </strong>
            </p>
            <p>
              A JWT is a string made up of three parts.
              <strong>like this: xxxxx.yyyyy.zzzzz.</strong> when we docode it .
              it will give us 3 things .{" "}
              <strong>1) header 2)payload 3) signature</strong>. when client
              send a request with this jwt to a Rest Api , The REST API will
              verify that the JWT’s signature matches its payload and header to
              determine that the JWT is valid. When the REST API has verified
              the JWT, it can use the claims to either grant or deny the
              client’s request.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
