// import axios from "axios";

// const Characters = async () => {
//   const response = await axios.get(
//     `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=IsLyKywdgOOzT7UY`
//   );
//   return <div>{response.data}</div>;
// };

// export default Characters;

import { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

const Characters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://marvel-back-projet.herokuapp.com/characters"
      );
      // console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [page]);
  return isLoading === true ? (
    <div>En cours de chargement</div>
  ) : (
    <div>
      <p>Les personnages Marvel !</p>

      <button onClick={() => setPage(page - 1)}>Page précédente</button>
      <button onClick={() => setPage(page + 1)}>Page suivante</button>
      {data.results.map((character) => {
        // console.log(offer._id);
        return (
          <section>
            <Link to={`/character/${character._id}`} key={character._id}>
              <h2>{character.name}</h2>

              <div className="descriptif">
                <p>{character.description}</p>
                <img
                  src={
                    character.thumbnail.path +
                    "." +
                    character.thumbnail.extension
                  }
                  alt="super-hero"
                />
              </div>
            </Link>
          </section>
        );
      })}
    </div>
  );
};

export default Characters;
