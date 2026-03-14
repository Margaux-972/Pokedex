import "./Types.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Types = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/type");
        // console.log(response.data); //{count: 21, next: 'https://pokeapi.co/api/v2/type?offset=20&limit=1', previous: null, results: Array(20)}
        // console.log(response.data.results); // [{name: 'normal', url: 'https://pokeapi.co/api/v2/type/1/'}]
        setData(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <main className="types-page">
      <div className="container">
        {isLoading ? (
          <h1>Chargement...</h1>
        ) : (
          <>
            <h1>Types</h1>
            <section>
              {data.map((types, index) => {
                return (
                  <Link
                    to={"/type/" + types.name}
                    key={index}
                    className="links"
                  >
                    <div>{types.name}</div>
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
export default Types;
