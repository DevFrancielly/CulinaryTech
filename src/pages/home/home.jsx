import "./styles.css";
import "../../components/header/header.jsx";
import Header from "../../components/header/header";
import imgBanner from "../../assets/bannerPrincipal.png";

function Home() {
  return (
    <div>
      <Header />
      <div className="banner-container">
        <img src={imgBanner} alt="Imagem do banner principal" className="banner" />
      </div>
    </div>
  );
}

export default Home;