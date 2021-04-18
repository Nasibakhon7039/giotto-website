import React, { useState } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import AuthModal from '../../Components/AuthModal/AuthModal'
import logo from '../../Images/logo.png'
import {
  HeroContainer,
  User,
  Cart,
  NavIcon,
  Styles,
  HeroContent,
  HeroItems,
  HeroBtn,
  HeroH1,
} from './HeroElements'
import { useSelector } from 'react-redux'

const Hero = () => {
  const [show, setShow] = useState(false)
  const history = useHistory()
  const user = useSelector((state) => state.auth.user)

  const handleClose = () => setShow(false)
  const handleShow = () => {
    if (!user) {
      setShow(true)
    } else {
      history.push('/profile')
    }
  }

  return (
    <>
      <HeroContainer>
        <Styles>
          <Navbar collapseOnSelect expand='lg' className='nav-back'>
            <Container>
              <Navbar.Brand href='/'>
                <img
                  src={logo}
                  height='90'
                  width='170'
                  className='d-inline-block align-top'
                  alt='Logo'
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls='responsive-navbar-nav' />
              <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='mr-auto'>
                  <Nav.Link>
                    <Link to='/'>Главная</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to='/menu'>Меню</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to='/about'>О нас</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to='/news'>Новости</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to='/contacts'>Контакты</Link>
                  </Nav.Link>
                </Nav>
                <NavIcon onClick={handleShow}>
                  <User />
                </NavIcon>
                <NavIcon>
                  <Link to='/cart'>
                    <Cart />
                  </Link>
                </NavIcon>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Styles>
        <AuthModal show={show} handleClose={handleClose} />
        <HeroContent>
          <HeroItems>
            <HeroH1>
              <span className='d-block'>Настоящий итальянский gelato</span> и
              бельгийские вафли
            </HeroH1>
            <HeroBtn onClick={() => history.push('/menu')}>Заказать</HeroBtn>
          </HeroItems>
        </HeroContent>
      </HeroContainer>
    </>
  )
}

export default Hero
