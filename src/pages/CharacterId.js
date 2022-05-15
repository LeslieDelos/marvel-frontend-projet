// import axios from "axios";
// import Characters from "./characters";

// const CharactersId = async () => {
//   const response = await axios.get(
//     `https://lereacteur-marvel-api.herokuapp.com/characters/${Characters._id}`
//   );
//   return <div>{response.data.comics}</div>;
// };

// export default CharactersId;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function CharacterId() {
  // const params = useParams();
  const params = useParams();

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://marvel-back-projet.herokuapp.com/comics/${params.characterId}`
        );
        console.log(params.characterId);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [params.characterId]);

  return isLoading === true ? (
    <div>En cours de chargement</div>
  ) : (
    <div>
      {data.comics.map((comics, index) => {
        return <div key={index}> {comics.title}</div>;
      })}
    </div>
  );
}

export default CharacterId;
