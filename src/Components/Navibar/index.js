import React, { useState } from 'react'
import { Navbar, Container, Nav, Form, Modal, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { User, Cart, NavIcon, Styles } from './NavibarElements'
import logo from '../../Images/logo.png'

const Navibar = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const handleChange = () => true

  return (
    <>
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
              <NavIcon to='/'>
                <Cart />
              </NavIcon>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Добро пожаловать</Modal.Title>
        </Modal.Header>
        <Modal.Body className='mr-5 ml-5'>
          <Form style={{ textAlign: 'center' }}>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label for='phone' className='m-4'>
                Войдите с вашим номером телефона
              </Form.Label>
              <Form.Control
                type='text'
                id='phone'
                name='phone'
                pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
                required
                placeholder='+998'
                onChange={handleChange}
              />
              <Button className='mb-3 mt-4' type='submit'>
                Войти
              </Button>
              <Form.Text>
                <span class='mr-2'>У вас нет аккаунта?</span>
                <a href='/' class='text-danger'>
                  Регистрация
                </a>
              </Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Navibar
