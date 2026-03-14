import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/pokemon.png";

const Header = () => {
  return (
    <header>
      <section className="container">
        <Link to="/">
          <img src={Logo} alt="Logo pkémon" />
        </Link>
        <div>
          <Link to="/pokemons">
            <button>Pokemons</button>
          </Link>
          <Link to="/types">
            <button>Types</button>
          </Link>
        </div>
      </section>
    </header>
  );
};
export default Header;
