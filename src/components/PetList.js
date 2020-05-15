import React, { useContext } from "react";
import { PetContext } from "../contexts/PetContext";
import PetDetails from "./PetDetails";

function PetList() {
  const { pets } = useContext(PetContext);
  //evaluate petlist
  return pets.length ? (
    <div className="pet-list">
      <ul>
        {pets.map((pet) => {
          return <PetDetails class="pet" key={pet.id} pet={pet} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">Empty collection</div>
  );
}

export default PetList;
