// src/pages/RecipeModal.jsx
import { useEffect } from "react";
import "./styles.css";
import ButtonClose from "../../components/button/button";


function RecipeModal({ isOpen, recipe, onClose }) {
  if (!isOpen) return null;

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose?.();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <ButtonClose onClick={onClose} />
        <img src={recipe.image} alt={recipe.title} className="modal-image" />
        <h2 className="modal-title">{recipe.title}</h2>
        <div className="modal-info">
            <p><strong>Tempo de preparo:</strong> {recipe.time} mins</p>
            <div className="modal-info-container">
                <div className="ingredients-section">
                    <h3>Ingredientes:</h3>
                    <ul>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
                <div className="instructions-section">
                    <h3>Modo de preparo:</h3>
                    <ol>
                        {recipe.steps.map((step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeModal;