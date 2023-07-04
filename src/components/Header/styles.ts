import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  padding: 0.5rem;
  border-radius: 0.375rem;

  background: ${(props) => props.theme['purple-300']};

  svg {
    color: ${(props) => props.theme['purple-500']};
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['purple-700']};
  }
`

export const CartLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  padding: 0.5rem;
  border-radius: 0.375rem;

  background: ${(props) => props.theme['yellow-300']};

  svg {
    color: ${(props) => props.theme['yellow-700']};
  }

  span {
    position: absolute;
    right: -0.5rem;
    top: -0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    height: 1.25rem;
    width: 1.25rem;

    font-size: 0.75rem;
    font-weight: 700;

    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme['yellow-700']};
  }
`
