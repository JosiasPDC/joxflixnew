import React from 'react';

import Logo from '../../assets/img/JoxFlix.png';
import './Menu.css';
// eslint-disable-next-line import/order
import { Link } from 'react-router-dom';

// Depois de fazer o import do styled-component
import Button from '../Button/index';

// Antes de fazer o import do styled-component
// import ButtonLink from './ButtonLink/index';
import { isAuthenticated } from "../../services/auth";

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img src={Logo} className="Logo" alt="JoxMiroFlix" />
      </Link>

      {isAuthenticated() ? (
        <Button as={Link} className="ButtonLink" to="/cadastro/video">
          Novo vídeo
        </Button>
      ) : (
        <Button as={Link} className="ButtonLink" to="/Login">
          Login
        </Button>
      )}


      {/* <ButtonLink className="ButtonLink" href="/">
                Novo vídeo
            </ButtonLink> */}
    </nav>
  );
}

export default Menu;
