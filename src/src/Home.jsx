//rfc importa funcion
//rafce importa funcion de flecha
///  <Navbar /> despues del div

import React from "react";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import Navbar from "../components/NavBar/NavBar.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />
      <br />
      <h3>Productos</h3>
      <ItemListContainer></ItemListContainer>
    </div>
  );
};

export default Home;
