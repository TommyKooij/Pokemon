import React, { useEffect, useState } from "react";
import axios from "axios";
//import "./App.css";
import "./Sets.css";
import { Link } from "react-router-dom";
import Searchfield from "./Eindopdracht/SetSearchfield";

const Sets = () => {
  const [pokemonSetsData, setPokemonsetsdata] = useState<any[]>([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    fetchAllSets();
  }, []);

  const fetchAllSets = () => {
    axios
      .get("https://api.pokemontcg.io/v2/sets")
      .then((data) => {
        console.log(data.data.data);
        setPokemonsetsdata(data.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchOneSet = () => {
    axios
      .get("https://api.pokemontcg.io/v2/sets?q=name:" + value)
      .then((data) => {
        console.log(data.data.data);
        setPokemonsetsdata(data.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (value) {
      fetchOneSet();
    } else {
      fetchAllSets();
    }
  };

  return (
    <div className="site">
      <div className="contents">
        <div className="buttons">
          <Link to="/">
            <button className="homeButton">Home</button>
          </Link>

          <Link to="/Sets">
            <button className="setsButton">Sets</button>
          </Link>
        </div>
        <h1>Pokémon TCG Card Finder</h1>
        <h2>Search here for your favourite sets</h2>
        <Searchfield
          value={value}
          setValue={setValue}
          handleSubmit={handleSubmit}
        />
        <div className="sets">
          {pokemonSetsData.map((sets, key) => (
            <div key={key}>
              <img src={sets.images.logo} alt="set" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sets;
