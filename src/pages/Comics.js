// const Comics = () => {
//   return (
//     <div>
//       <p>comics</p>

//     </div>

//   );
// };

// export default Comics;

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

const Comics = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        //https://marvel-back-projet.herokuapp.com/comics
        `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.MARVEL_API_KEY}`
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
      <p>Les comics Marvel !</p>

      <button onClick={() => setPage(page - 1)}>Page précédente</button>
      <button onClick={() => setPage(page + 1)}>Page suivante</button>
      {data.results.map((comics) => {
        // console.log(offer._id);
        return (
          <section>
            <h2>{comics.title}</h2>

            <div className="descriptif">
              <p>{comics.description}</p>
              <img
                src={comics.thumbnail.path + "." + comics.thumbnail.extension}
                alt="les-comics"
              />
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Comics;
