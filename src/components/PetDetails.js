import React, { useContext } from "react";
import { PetContext } from "../contexts/PetContext";

//pass pet from PetList as prop
function PetDetails({ pet }) {
  const { dispatch } = useContext(PetContext);

  return (
    <li className="pet-detail" id={pet.id}>
      <div className="card  orange lighten-3">
        <div className="name "> Name: {pet.name}</div>
        <div className="age"> Age: {pet.age}</div>
        <div className="date"> Date acquired: {pet.date}</div>

        <button
          className="delete-btn right"
          onClick={() => dispatch({ type: "DELETE_PET", id: pet.id })}
        >
          {"delete"}
        </button>
      </div>
    </li>
  );
}

export default PetDetails;
