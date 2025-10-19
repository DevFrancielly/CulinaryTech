import "../footer/styles.css";

function Footer() {
    return (
        <div className="footer">
            <nav className="footer-nav">
                <a href="/">Sobre</a>
                <a href="/receitas">Contato</a>
                <a href="/contato">Politicas de privacidade</a>
            </nav>

            <p className="footer-copyright">© 2025 Copyright: Dev.Francielly</p>
        </div>
    );
}

export default Footer;