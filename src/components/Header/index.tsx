import { NavLink } from 'react-router-dom'
import { CartLink, HeaderContainer, LocationContainer } from './styles'

import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logo} alt="" />
      </NavLink>

      <div>
        <LocationContainer>
          <MapPin weight="fill" size="1.375rem" />
          <p>Porto Alegre, RS</p>
        </LocationContainer>

        <CartLink to="/checkout" title="Checkout">
          <ShoppingCart weight="fill" size="1.375rem" />

          <span>3</span>
        </CartLink>
      </div>
    </HeaderContainer>
  )
}
