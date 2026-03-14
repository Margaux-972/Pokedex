import "./Pokemons.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Pokemons = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
        // console.log(response.data); //{count: 1350, next: 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20', previous: null, results: Array(20)}
        // console.log(response.data.results); // [{name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/'}]
        setData(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="pokemons-page">
      <div className="container">
        {isLoading ? (
          <h1>Chargement...</h1>
        ) : (
          <>
            <h1>Pokemons</h1>
            <section>
              {data.map((pokemons, index) => {
                //   console.log(pokemons); // {name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/'}
                return (
                  <Link
                    to={"/pokemon/" + pokemons.name}
                    key={index}
                    className="links"
                  >
                    <article className="pokecard">
                      <div>{pokemons.name}</div>
                      <img
                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                        alt="bulbasaur"
                      />
                    </article>
                  </Link>
                );
              })}
            </section>
          </>
        )}
      </div>
    </main>
  );
};
export default Pokemons;
