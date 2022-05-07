import React from "react";
import { useParams } from "react-router-dom";

const InventoryUpdate = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>I am inventory Update</h2>
      <h2>Updating User {id}</h2>
    </div>
  );
};

export default InventoryUpdate;
