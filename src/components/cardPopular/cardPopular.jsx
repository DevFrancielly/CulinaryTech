import "./styles.css";

function RecipeCard({ image, title, description, onClick}) {
  return (
    <div className="container-card-receitas-populares" onClick={onClick}>
      <img src={image} alt={title} className="img-card" />
      
      <div className="container-receitas-populares">
        <h2 className="container-title">{title}</h2>
        <p className="container-description">{description}</p>
      </div>
    </div>
  );
}

export default RecipeCard;