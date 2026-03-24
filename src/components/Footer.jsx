import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-logo">Igreja Batista Reformada</h3>
          <p className="footer-tagline">Soli Deo Gloria</p>
          <p className="footer-address">
            📍 Av. Eng. Corintho Campelo da Paz, Nº 80 - Santos Dumont
            <br />
            Maceió - AL, CEP 57075-720
          </p>
        </div>

        <div className="footer-section">
          <h4>Atividades Da Semana</h4>
          <ul className="footer-hours">
            <li>
              <strong>Quarta-Feira: </strong>
              <br></br>
              Reunião de Oração 19:30
            </li>
            <li>
              <strong>Domingo:</strong> <br></br>
              Escola Bíblica Dominical 09:00<br></br>Culto Público 18:30
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Links Rápidos</h4>
          <ul className="footer-links">
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre Nós</Link>
            </li>
            <li>
              <Link to="/ministerios">Ministérios</Link>
            </li>
            <li>
              <Link to="/escala">Escala</Link>
            </li>
            <li>
              <Link to="/transparencia">Transparência</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contato</h4>
          <p className="footer-contact">
            📧 contato@ibr.com.br
            <br />
            📱 (00) 00000-0000
          </p>
          <div className="footer-social">
            <a href="#" className="social-link" aria-label="YouTube">
              ▶️
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              📷
            </a>
            <a href="#" className="social-link" aria-label="WhatsApp">
              💬
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Igreja Batista Reformada. Todos os
          direitos reservados.
        </p>
        <p className="footer-doctrine">
          Crenças fundamentadas na Confissão de Fé de Londres de 1689
        </p>
      </div>
    </footer>
  );
};

export default Footer;
