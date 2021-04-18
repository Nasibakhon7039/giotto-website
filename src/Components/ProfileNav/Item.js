import styled from 'styled-components'
import { theme } from '../../theme'

export const MenuBox = styled.div`
  padding: 0;
  position: sticky;
  top: 100px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 20px;
  @media (max-width: 576px) {
    margin: 0;
  }
`

export const MenuList = styled.ul`
  list-style: none;
  width: 100%;
  padding: 0;
`

export const MenuItem = styled.li`
  font-weight: normal;
  color: grey;
  width: 100%;
  padding: 10px 50px;
  transition: 0.4s ease-in-out all;
  cursor: pointer;
  &:hover {
    color: ${theme.primary};
    border-left-color: ${theme.primary};
  }
  @media (max-width: 576px) {
    text-align: center;
  }
`

export const MenuItemActive = styled.li`
  font-weight: bold;
  color: ${theme.primary};
  width: 100%;
  padding: 10px 50px;
  transition: 0.4s ease-in-out all;
  cursor: pointer;
  @media (max-width: 576px) {
    text-align: center;
  }
`

export const MenuLink = styled.a`
  width: 100%;
  text-decoration: none;
`
