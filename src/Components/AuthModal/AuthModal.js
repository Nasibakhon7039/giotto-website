import React, { useState } from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import { useForm, Controller } from 'react-hook-form'
import NumberFormat from 'react-number-format'
import { getUnmaskedPhoneNumber } from '../../utils/getUnmaskedPhoneNumber'
import axios from 'axios'
import Alert from '../Alert'
import { CircularProgress } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../../redux/actions/authActions/authActions'
import { useHistory } from 'react-router-dom'

export default function AuthModal({ show, handleClose }) {
  const { register, handleSubmit, control, reset } = useForm()
  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  console.log('state => ', state)
  const history = useHistory()

  const [error, setError] = useState(false)
  const [errorText, setErrorText] = useState('')
  const [errorType, setErrorType] = useState('error')
  const [loading, setLoading] = useState(false)
  const [registerModal, setRegisterModal] = useState(false)

  const onSubmit = (data) => {
    data.phone = getUnmaskedPhoneNumber(data.phone)
    setLoading(true)

    if (data.phone.length !== 13) {
      setError(true)
      setErrorText('Пожалуйста, введите действующий телефонный номер')
      return
    }

    if (!registerModal) {
      login(data)
    } else {
      signup(data)
    }
  }

  const login = async (data) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/clients/login`,
        data
      )

      if (response.status === 200) {
        setLoading(false)
        dispatch(setUser(response.data))
        handleClose()
        history.push('/profile')
      }
    } catch (error) {
      setLoading(false)
      setError(true)
      setErrorText('Номер телефона или пароль неверный')
      console.error(error.message)
    }
  }

  const goRegister = (event) => {
    event.preventDefault()
    reset()
    setRegisterModal(true)
  }
  const closeRegister = (event) => {
    event.preventDefault()
    reset()
    setRegisterModal(false)
  }

  const signup = async (data) => {
    if (data.password === data.password_confirm) {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/clients/register`,
          data
        )

        if (response.status === 200) {
          setLoading(false)
          dispatch(setUser(response.data))
          handleClose()
          history.push('/profile')
        }
      } catch (error) {
        setLoading(false)
        setError(true)
        setErrorText('Пользователь уже существует')
        console.error(error.message)
      }
    } else {
      setLoading(false)
      setError(true)
      setErrorText('Пароль не совпадает')
    }
  }

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Добро пожаловать</Modal.Title>
        </Modal.Header>
        <Modal.Body className='mr-5 ml-5'>
          <Form
            style={{ textAlign: 'center' }}
            onSubmit={handleSubmit(onSubmit)}
          >
            {!registerModal ? (
              <Form.Group>
                <Form.Label htmlFor='phone' className='m-4'>
                  Войдите с вашим номером телефона и паролем
                </Form.Label>
                <Controller
                  name='phone'
                  control={control}
                  rules={{ required: true }}
                  as={
                    <NumberFormat
                      format='+998 ## ### ## ##'
                      mask='_'
                      name='phone'
                      allowEmptyFormatting
                      placeholder='+998 __ ___ __ __'
                      className='form-control'
                    />
                  }
                />
                <Form.Control
                  type='password'
                  id='password'
                  name='password'
                  className='mt-3'
                  minLength='6'
                  required
                  placeholder='Введите пароль'
                  ref={register}
                />
              </Form.Group>
            ) : (
              <Form.Group>
                <Form.Label htmlFor='first_name' className='m-4'>
                  Регистрация
                </Form.Label>
                <Form.Control
                  type='text'
                  id='first_name'
                  name='first_name'
                  required
                  placeholder='Имя'
                  ref={register}
                />
                <Form.Control
                  type='text'
                  id='last_name'
                  name='last_name'
                  className='mt-3'
                  required
                  placeholder='Фамилия'
                  ref={register}
                />
                <Controller
                  name='phone'
                  control={control}
                  rules={{ required: true }}
                  as={
                    <NumberFormat
                      format='+998 ## ### ## ##'
                      mask='_'
                      name='phone'
                      allowEmptyFormatting
                      placeholder='+998 __ ___ __ __'
                      className='form-control mt-3'
                    />
                  }
                />
                <Form.Control
                  type='password'
                  id='password'
                  name='password'
                  className='mt-3'
                  minLength='6'
                  required
                  placeholder='Введите пароль'
                  ref={register}
                />
                <Form.Control
                  type='password'
                  id='password_confirm'
                  name='password_confirm'
                  className='mt-3'
                  minLength='6'
                  required
                  placeholder='Подтверждения пароля'
                  ref={register}
                />
              </Form.Group>
            )}
            <Button className='mb-3 mt-4' type='submit' disabled={loading}>
              {loading ? (
                <CircularProgress size='20px' color='inherit' />
              ) : (
                'Войти'
              )}
            </Button>
            {!registerModal ? (
              <Form.Text>
                <span class='mr-2'>У вас нет аккаунта?</span>
                <a href='/' class='text-danger' onClick={goRegister}>
                  Регистрация
                </a>
              </Form.Text>
            ) : (
              <Form.Text>
                <span class='mr-2'>Аккаунт уже есть?</span>
                <a href='/' class='text-danger' onClick={closeRegister}>
                  Войти
                </a>
              </Form.Text>
            )}
          </Form>
        </Modal.Body>
      </Modal>
      <Alert
        open={error}
        type={errorType}
        onClose={() => setError(false)}
        errorText={errorText}
      />
    </div>
  )
}
