import React from "react";
import PetContextProvider from "./contexts/PetContext";
import PetList from "./components/PetList";
import Navbar from "./components/Navbar";
import AddPetForm from "./components/AddPetForm";

function App() {
  return (
    <div className="App content grey darken-2">
      <PetContextProvider>
        <Navbar />
        <PetList />
        <AddPetForm />
      </PetContextProvider>
    </div>
  );
}

export default App;
