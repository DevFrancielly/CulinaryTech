import "./styles.css";
import "../../components/header/header.jsx";
import Header from "../../components/header/header";
import imgBanner from "../../assets/bannerPrincipal.png";
import RecipeCard from "../../components/cardPopular/cardPopular.jsx";
import Footer from "../../components/footer/footer.jsx";

function Home() {
  const receitasPopulares = [
    {
      image: "https://images.unsplash.com/photo-1751151497799-8b4057a2638e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=736",
      title: "Spaghetti ao Molho de Tomate",
      description: "Clássico italiano com toque de manjericão fresco.",
    },
    {
      image: "https://images.unsplash.com/photo-1606149186228-4e5ac94a742e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      title: "Panqueca de Banana",
      description: "Doce, leve e perfeita pro café da manhã.",
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1699881081705-755bbc84a1e1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=756",
      title: "Salada Mediterrânea",
      description: "Refrescante, colorida e cheia de nutrientes.",
    },
    {
      image: "https://images.unsplash.com/photo-1606313564573-104197cf8f91?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      title: "Brownie de Chocolate",
      description: "Irresistivelmente e cheio de sabor.",
    }
  ];
  const novasReceitas = [
    {
      image: "https://plus.unsplash.com/premium_photo-1661730329741-b3bf77019b39?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      title: "Tacos Mexicanos",
      description: "Recheados com carne temperada, guacamole e aquele toque picante que conquista qualquer paladar.",
    },
    {
      image: "https://images.unsplash.com/photo-1617196034738-26c5f7c977ce?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      title: "Sushi Tradicional",
      description: "Um clássico japonês preparado com peixe fresco, arroz perfeitamente temperado e elegância minimalista.",
    },
    {
      image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
      title: "Hambúrguer Artesanal",
      description: "Pão selado na manteiga, carne suculenta e queijo derretendo — o lanche perfeito para qualquer momento.",
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1694850980302-f568e6de0f6d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      title: "Risoto de Cogumelos",
      description: "Cremoso, aromático e cheio de sabor — um prato sofisticado que é puro conforto em cada colherada.",
    },
  ];

  return (
    <div>
      <Header />

      <div className="banner-container">
        <img src={imgBanner} alt="Imagem do banner principal" className="banner" />
      </div>

      <section className="section-popular-recipes">
        <h2 className="title-section">Receitas Populares</h2>
        <div className="container-cards">
          {receitasPopulares.map((receita, index) => (
            <RecipeCard
              key={index}
              image={receita.image}
              title={receita.title}
              description={receita.description}
            />
          ))}
        </div>
      </section>

      <section className="section-popular-recipes">
        <h2 className="title-section">Novas receitas</h2>
        <div className="container-cards">
          {novasReceitas.map((novasReceitas, index) => (
            <RecipeCard
              key={index}
              image={novasReceitas.image}
              title={novasReceitas.title}
              description={novasReceitas.description}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;