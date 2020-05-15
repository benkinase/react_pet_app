import React, { useContext, useState } from "react";
import { PetContext } from "../contexts/PetContext";

const AddPetForm = () => {
  const { dispatch } = useContext(PetContext);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_PET", pet: { name, age, date } });
    setName("");
    setAge("");
    setDate("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="orange-text">
        <div class="input-field">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="input"
          />
          <label for="message">Name</label>
        </div>
        <div class="input-field">
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="input"
          />
          <label for="message">Age</label>
        </div>
        <div class="input-field">
          <input
            type="text"
            value={date}
            className="datepicker input"
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <label for="message">Date acquired</label>
        </div>
        <input type="submit" className="btn" value="Add new pet" />
      </form>
    </div>
  );
};

export default AddPetForm;
