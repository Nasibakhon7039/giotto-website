import React, { useState } from 'react'
import { ContactContainer } from './ContactUsElements'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Alert from '../../Components/Alert'
import { CircularProgress } from '@material-ui/core'

const ContactUs = () => {
  const { register, handleSubmit, reset } = useForm()
  const [error, setError] = useState(false)
  const [errorText, setErrorText] = useState('')
  const [errorType, setErrorType] = useState('error')
  const [loading, setLoading] = useState(false)

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/contacts`,
        data
      )

      if (response.status === 200) {
        setLoading(false)
        setErrorType('success')
        setError(true)
        setErrorText('Ваше сообщение было отправлено успешно!')
        reset()
      }
      console.log(response)
    } catch (error) {
      setLoading(false)
      setErrorType('error')
      setError(true)
      setErrorText('Что-то пошло не так. Попробуйте позже.')
      console.log(error)
    }
  }

  return (
    <>
      <ContactContainer>
        <h1>Свяжитесь с нами</h1>
        <p className='sub-title'>
          Не стесняйтесь связываться с нами в любое время. Мы свяжемся с вами,
          как только сможем.
        </p>
        <div id='contact-container'>
          <div className='contact-info'>
            <h4>Контакты</h4>
            <p>Заполните форму и нажмите отправить</p>
            <div className='icon-text'>
              <i className='fa fa-phone' aria-hidden='true'></i>
              <span>+998 71 234 96 65</span>
            </div>
            <div className='icon-text'>
              <i className='fa fa-envelope' aria-hidden='true'></i>
              <span>giottoilgelato@gmail.com</span>
            </div>
            <div className='icon-text'>
              <i className='fa fa-map-marker' aria-hidden='true'></i>
              <span>Tashkent, Amir Temur Avenue 1</span>
            </div>
            <div className='social-media'>
              <a
                href='https://www.facebook.com/giotto.uz/'
                className='icon-circle'
              >
                <i className='fa fa-facebook-official' aria-hidden='true'></i>
              </a>
              <a href='https://t.me/giottoilgelato' className='icon-circle'>
                <i className='fa fa-telegram' aria-hidden='true'></i>
              </a>
              <a
                href='https://www.instagram.com/giotto.uz/?hl=ru'
                className='icon-circle'
              >
                <i className='fa fa-instagram' aria-hidden='true'></i>
              </a>
              <a href='/' className='icon-circle'>
                <i className='fa fa-twitter' aria-hidden='true'></i>
              </a>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='column2'>
              <div className='form-group'>
                <label>Имя</label>
                <input {...register('name', { required: true })} type='text' />
              </div>
            </div>
            <div className='column2'>
              <div className='form-group'>
                <label>Номер телефона</label>
                <input
                  type='tel'
                  defaultValue='+998'
                  {...register('phone', { required: true })}
                />
              </div>
            </div>
            <div className='column2'>
              <div className='form-group solo'>
                <label>Сообщение</label>
                <textarea {...register('text')} />
              </div>
            </div>
            <div className='column2'>
              <div className='form-group solo right'>
                <button type='submit' className='primary'>
                  {loading ? (
                    <CircularProgress size='30px' color='white' />
                  ) : (
                    'Отправить'
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </ContactContainer>
      <Alert
        open={error}
        type={errorType}
        onClose={() => setError(false)}
        errorText={errorText}
      />
    </>
  )
}

export default ContactUs
