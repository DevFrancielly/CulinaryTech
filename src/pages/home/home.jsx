import "./styles.css";
import "../../components/header/header.jsx";
import Header from "../../components/header/header";
import imgBanner from "../../assets/bannerPrincipal.png";
import RecipeCard from "../../components/cardPopular/cardPopular.jsx";
import RecipeModal from "../infoReceitas/infoReceitas.jsx";
import Footer from "../../components/footer/footer.jsx";
import { useState } from "react";

function Home() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const receitasPopulares = [
    {
      image: "https://images.unsplash.com/photo-1751151497799-8b4057a2638e?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=736",
      title: "Spaghetti ao Molho de Tomate",
      description: "Clássico italiano com toque de manjericão fresco.",
      time: 30,
      ingredients: [
        "200g de spaghetti",
        "2 xícaras de molho de tomate",
        "2 dentes de alho picados",
        "Manjericão fresco a gosto",
        "Azeite, sal e pimenta a gosto"
      ],
      steps: [
        "Cozinhe o macarrão conforme as instruções da embalagem.",
        "Em uma panela, aqueça o azeite e refogue o alho até dourar.",
        "Adicione o molho de tomate e tempere com sal, pimenta e manjericão.",
        "Misture o macarrão ao molho e sirva quente com folhas frescas de manjericão."
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1606149186228-4e5ac94a742e?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170",
      title: "Panqueca de Banana",
      description: "Doce, leve e perfeita pro café da manhã.",
      time: 20,
      ingredients: [
        "1 banana madura amassada",
        "1 ovo",
        "3 colheres (sopa) de aveia",
        "Canela a gosto",
        "Mel para finalizar"
      ],
      steps: [
        "Misture a banana, o ovo, a aveia e a canela até formar uma massa homogênea.",
        "Aqueça uma frigideira antiaderente e despeje pequenas porções da massa.",
        "Cozinhe dos dois lados até dourar.",
        "Sirva com mel e rodelas de banana."
      ]
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1699881081705-755bbc84a1e1?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=756",
      title: "Salada Mediterrânea",
      description: "Refrescante, colorida e cheia de nutrientes.",
      time: 15,
      ingredients: [
        "Tomate-cereja cortado ao meio",
        "Pepino fatiado",
        "Azeitonas pretas",
        "Queijo feta esfarelado",
        "Azeite, limão, sal e orégano"
      ],
      steps: [
        "Misture todos os ingredientes em uma tigela.",
        "Tempere com azeite, limão, sal e orégano.",
        "Sirva gelada como entrada ou acompanhamento."
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1606313564573-104197cf8f91?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=687",
      title: "Brownie de Chocolate",
      description: "Irresistivelmente macio e cheio de sabor.",
      time: 35,
      ingredients: [
        "200g de chocolate meio amargo",
        "100g de manteiga",
        "1 xícara de açúcar",
        "2 ovos",
        "1/2 xícara de farinha de trigo",
        "1 pitada de sal"
      ],
      steps: [
        "Derreta o chocolate e a manteiga em banho-maria.",
        "Adicione o açúcar, os ovos e misture bem.",
        "Acrescente a farinha e o sal, mexendo até incorporar.",
        "Despeje em uma forma e leve ao forno a 180°C por cerca de 25 minutos."
      ]
    }
  ];
  const novasReceitas = [
    {
      image: "https://plus.unsplash.com/premium_photo-1661730329741-b3bf77019b39?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=687",
      title: "Tacos Mexicanos",
      description: "Recheados com carne temperada, guacamole e aquele toque picante que conquista qualquer paladar.",
      time: 25,
      ingredients: [
        "6 tortilhas de milho",
        "300g de carne moída",
        "1 cebola picada",
        "Molho de pimenta a gosto",
        "Guacamole e queijo ralado para servir"
      ],
      steps: [
        "Refogue a cebola e adicione a carne moída até dourar.",
        "Tempere com sal e molho de pimenta.",
        "Aqueça as tortilhas e recheie com carne, guacamole e queijo.",
        "Sirva imediatamente com limão e pimenta extra."
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1617196034738-26c5f7c977ce?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170",
      title: "Sushi Tradicional",
      description: "Um clássico japonês preparado com peixe fresco, arroz perfeitamente temperado e elegância minimalista.",
      time: 50,
      ingredients: [
        "2 xícaras de arroz japonês",
        "300g de salmão fresco",
        "Vinagre de arroz",
        "Açúcar e sal a gosto",
        "Alga nori"
      ],
      steps: [
        "Cozinhe o arroz e tempere com vinagre, açúcar e sal.",
        "Corte o salmão em fatias finas.",
        "Monte o sushi sobre a alga nori ou como nigiri.",
        "Sirva com shoyu, wasabi e gengibre."
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1171",
      title: "Hambúrguer Artesanal",
      description: "Pão selado na manteiga, carne suculenta e queijo derretendo — o lanche perfeito para qualquer momento.",
      time: 30,
      ingredients: [
        "2 pães de hambúrguer",
        "300g de carne moída",
        "Queijo cheddar",
        "Alface, tomate e cebola",
        "Manteiga, sal e pimenta"
      ],
      steps: [
        "Modele os hambúrgueres e tempere com sal e pimenta.",
        "Grelhe até atingir o ponto desejado.",
        "Sele os pães na manteiga e monte o lanche com queijo, alface, tomate e cebola.",
        "Sirva com batatas fritas."
      ]
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1694850980302-f568e6de0f6d?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=687",
      title: "Risoto de Cogumelos",
      description: "Cremoso, aromático e cheio de sabor — um prato sofisticado que é puro conforto em cada colherada.",
      time: 40,
      ingredients: [
        "1 xícara de arroz arbório",
        "200g de cogumelos fatiados",
        "1/2 cebola picada",
        "1/2 xícara de vinho branco",
        "1L de caldo de legumes",
        "Queijo parmesão e manteiga"
      ],
      steps: [
        "Refogue a cebola e os cogumelos na manteiga.",
        "Adicione o arroz e o vinho branco, mexendo até evaporar.",
        "Acrescente o caldo aos poucos, mexendo sempre até o arroz ficar cremoso.",
        "Finalize com parmesão e sirva quente."
      ]
    }
  ];

  const handleCardClick = (recipe) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedRecipe(null);
    setIsModalOpen(false);
  };

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
              onClick={() => handleCardClick(receita)}
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
              onClick={() => handleCardClick(novasReceitas)}
            />
          ))}
        </div>
      </section>
      <RecipeModal
        isOpen={isModalOpen}
        onClose={closeModal}
        recipe={selectedRecipe}
      />
      <Footer />
    </div>
  );
}

export default Home;