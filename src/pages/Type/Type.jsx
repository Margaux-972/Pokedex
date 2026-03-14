import "./Type.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Type = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { type } = useParams();
  //   console.log(type); // normal

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/type/" + type,
        );
        // console.log(response.data); //{damage_relations: {…}, game_indices: Array(6), generation: {…}, id: 3, move_damage_class: {…}, …}
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [type]);

  return (
    <main className="type-page">
      <div className="container">
        {isLoading ? (
          <h1>Chargement...</h1>
        ) : (
          <>
            <h1>Type : {type}</h1>
            <section>
              {
                <div>
                  {data.pokemon.map((element, index) => {
                    const id = element.pokemon.url.split("/")[6];
                    return (
                      <Link
                        to={"/pokemon/" + element.pokemon.name}
                        key={index}
                        className="links"
                      >
                        <div>
                          <div>{element.pokemon.name}</div>
                          <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                            alt={element.pokemon.name}
                          />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              }
            </section>
          </>
        )}
      </div>
    </main>
  );
};
export default Type;
