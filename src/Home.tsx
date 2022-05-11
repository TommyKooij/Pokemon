import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Searchfield from "./Eindopdracht/Searchfield";
import { Link } from "react-router-dom";

//API-KEY = "dc1b51ef-4895-437a-9528-7eb6dc0ea43a";

const Home = () => {
  const [pokemonData, setPokemondata] = useState<any[]>([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    fetchAllPokemons();
  }, []);

  const fetchAllPokemons = () => {
    axios
      .get("https://api.pokemontcg.io/v2/cards")
      .then((data) => {
        console.log(data.data.data);
        setPokemondata(data.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchOnePokemon = () => {
    axios
      .get("https://api.pokemontcg.io/v2/cards?q=name:" + value)
      .then((data) => {
        console.log(data.data.data);
        setPokemondata(data.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (value) {
      fetchOnePokemon();
    } else {
      fetchAllPokemons();
    }
  };

  return (
    <div className="site">
      <div className="contents">
        <div className="buttons">
          <Link to="/">
            <button type="button" className="homeButton">
              Home
            </button>
          </Link>
          //Hallo
          <Link to="/Sets">
            <button type="button" className="setsButton">
              Sets
            </button>
          </Link>
        </div>
        <h1>Pokémon TCG Card Finder</h1>
        <h2>The Site to find your Pokémon cards</h2>
        <Searchfield
          value={value}
          setValue={setValue}
          handleSubmit={handleSubmit}
        />
        <div className="pokemons">
          {pokemonData.map((pokemon, key) => (
            <div key={key}>
              <img src={pokemon.images.small} alt="pokemon" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
