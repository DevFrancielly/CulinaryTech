import "./styles.css";

export default function ButtonClose({ onClick }) {
  return (
    <button
      type="button"
      aria-label="Fechar modal"
      className="button-close"
      onClick={onClick}
    >
      ×
    </button>
  );
}