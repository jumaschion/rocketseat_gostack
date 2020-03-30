import React from 'react';
import { Link } from 'react-router-dom';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';
import Logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={Logo} alt="RocketShoes" />
      </Link>

      <Cart to="/">
        <div>
          <strong>Meu carrinho</strong>
          <span>itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}
