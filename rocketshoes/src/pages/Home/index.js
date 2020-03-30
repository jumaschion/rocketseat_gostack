import React from 'react';

import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-feminino/15/HZM-1729-715/HZM-1729-715_zoom2.jpg?ts=1583429518&ims=326x"
          alt="Tênis feminino rosa"
        />
        <strong>Tênis feminino Nike</strong>
        <span>R$ 200,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="FFF" />3
          </div>
        <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-feminino/15/HZM-1729-715/HZM-1729-715_zoom2.jpg?ts=1583429518&ims=326x"
          alt="Tênis feminino rosa"
        />
        <strong>Tênis feminino Nike</strong>
        <span>R$ 200,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="FFF" />3
          </div>
        <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-feminino/15/HZM-1729-715/HZM-1729-715_zoom2.jpg?ts=1583429518&ims=326x"
          alt="Tênis feminino rosa"
        />
        <strong>Tênis feminino Nike</strong>
        <span>R$ 200,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="FFF" />3
          </div>
        <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
