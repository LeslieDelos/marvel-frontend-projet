import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <header className="header-component">
        <img
          src="https://res.cloudinary.com/lereacteur-apollo/image/upload/v1582097342/react-new-exercices/Marvel/langfr-1920px-MarvelLogo.svg_uw9pi8.png"
          alt="logo"
          height="100px"
          width="200px"
        />
        <br></br>
        <Link to={"/characters"}>Personnages</Link> <br></br>
        <Link to={"/comics"}>Comics</Link> <br></br>
        <Link to={"/favoris"}>Favoris</Link>
      </header>
    </div>
  );
};

export default Home;
