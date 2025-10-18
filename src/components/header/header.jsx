import "../header/styles.css";
import { CookingPot, CircleUserRound, Bookmark } from 'lucide-react';
import Search from "../search/search.jsx";

function Header() {
  return (
    <header className="header">

      <div className="header-logo">
        <CookingPot />
        <h2 className="header-title">
          Historias de Panela
        </h2>

        <nav className="header-nav">
          <a href="/">Home</a>
          <a href="/receitas">Receitas</a>
          <a href="/contato">Ingredientes</a>
        </nav>
      </div>

      <div className="header-itens" >
        <Search />
        <Bookmark className="header-bookmark-icon" />
        <CircleUserRound className="header-user-icon" />
      </div>
    </header >
  );
}

export default Header;