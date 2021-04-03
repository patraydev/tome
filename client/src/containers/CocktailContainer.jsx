import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import Modal from "../components/Modal.jsx";
import Search from "../components/Search.jsx";

import {
  readAllCocktails,
  createCocktail,
  updateCocktail,
  destroyCocktail,
} from "../helpers/cocktails.js";

import circle from "../assets/images/circle.png";
import "../assets/style/CocktailContainer.css";

function CocktailContainer(props) {
  const [cocktails, setCocktails] = useState([]);
  const history = useHistory();
  const { currentUser } = props;

  useEffect(() => {
    const fetchCocktails = async () => {
      const result = await readAllCocktails();
      setCocktails(result);
    };
    fetchCocktails();
  }, []);

  // const newCocktail = async (formData) => {
  //   const newCocktail = await createCocktail(formData);
  //   setCocktails((prevState) => [...prevState, newCocktail]);
  //   history.push("/cocktails");
  // };

  // const editCocktail = async (id, formData) => {
  //   const updatedCocktail = await updateCocktail(id, formData);
  //   setCocktails((prevState) =>
  //     prevState.map((cocktail) => {
  //       return cocktail.id === Number(id) ? updatedCocktail : cocktail;
  //     })
  //   );
  //   history.push(`/${id}`);
  // };
  
  // const deleteCocktail = async (id) => {
  //   await destroyCocktail(id);
  //   setCocktails((prevState) =>
  //     prevState.filter((cocktail) => {
  //       return cocktail.id !== id;
  //     })
  //   );
  //   history.push("/cocktails");
  // };

  return <Search cocktails={cocktails}/>;
}

export default CocktailContainer;






