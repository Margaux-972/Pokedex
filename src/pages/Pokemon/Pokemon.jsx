import "./Pokemon.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Pokemon = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { name } = useParams();
  // console.log(name); // bulbasaur

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon/" + name,
        );
        // console.log(response.data); //{abilities: Array(2), base_experience: 64, cries: {…}, forms: Array(1), game_indices: Array(20), …}
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [name]);
  return (
    <main className="pokemon-page">
      <div className="container">
        {isLoading ? (
          <h1>Chargement...</h1>
        ) : (
          <section>
            <h1>Pokemon</h1>
            <div>
              <section className="pokecard">
                {data.forms.map((element, index) => {
                  return (
                    <div key={index} className="name">
                      {element.name}
                    </div>
                  );
                })}
                <img src={data.sprites.front_default} alt="pokéPic" />
              </section>
              <section className="infos">
                {data.types.map((element, index) => {
                  return (
                    <Link
                      to={"/type/" + element.type.name}
                      key={index}
                      className="links"
                    >
                      <div>{element.type.name}</div>
                    </Link>
                  );
                })}
              </section>
            </div>
          </section>
        )}
      </div>
    </main>
  );
};
export default Pokemon;
