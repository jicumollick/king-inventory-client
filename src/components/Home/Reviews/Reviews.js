import React from "react";
import "./Reviews.css";
import { StarIcon } from "@heroicons/react/solid";
const Reviews = () => {
  const users = [
    {
      id: 1,
      name: "jicu Mollick",
      img: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
      comment: "An absolute application for my company.",
      identity: "CEO, Nelson Bngladesh",
    },
    {
      id: 2,
      name: "Samanta Gomez",
      img: "https://randomuser.me/api/portraits/thumb/women/75.jpg",
      comment: "Unique feture with regular update. loved it",
      identity: "Technician, Europa bebaraz",
    },
    {
      id: 3,
      name: "Andre Simon",
      img: "https://randomuser.me/api/portraits/thumb/men/25.jpg",
      comment: "An up to date software we are using since 2015",
      identity: "CTO, Ineuron India",
    },
  ];
  return (
    <div className="reviews pb-5">
      <h2 className="py-5">What Our Customer Says</h2>
      <div className="cards-container">
        {users.map((customer) => {
          return (
            <div
              key={customer.id}
              className="card "
              style={{
                width: "23rem",
                padding: "15px",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 3fr 2fr",
                }}
              >
                <img
                  src={customer.img}
                  alt="user_image"
                  style={{
                    borderRadius: "50%",
                  }}
                />
                <h6 className="name fw-bold fs-5">{customer.name}</h6>
                <p>
                  <StarIcon
                    className="h-3 w-3 text-blue-500"
                    style={{
                      color: "orangered",
                      width: "20px",
                      height: "20px",
                    }}
                  ></StarIcon>
                  <StarIcon
                    className="h-3 w-3 text-blue-500"
                    style={{
                      color: "orangered",
                      width: "20px",
                      height: "20px",
                    }}
                  ></StarIcon>{" "}
                  <StarIcon
                    className="h-3 w-3 text-blue-500"
                    style={{
                      color: "orangered",
                      width: "20px",
                      height: "20px",
                    }}
                  ></StarIcon>
                  <StarIcon
                    className="h-3 w-3 text-blue-500"
                    style={{
                      color: "orangered",
                      width: "20px",
                      height: "20px",
                    }}
                  ></StarIcon>
                  <StarIcon
                    className="h-3 w-3 text-blue-500"
                    style={{
                      color: "orangered",
                      width: "20px",
                      height: "20px",
                    }}
                  ></StarIcon>
                </p>
              </div>
              <div className="card-comment mt-3">{customer.comment}</div>
              <div>
                <h4>{customer.identity}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
