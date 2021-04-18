import React, { Component } from 'react'
import { CabinetButton } from './item'
import { Grid } from '@material-ui/core'
import axios from 'axios'
import { setUser } from '../../redux/actions/authActions/authActions'
import mapDispatchToProps from 'react-redux/lib/connect/mapDispatchToProps'
import { Input } from '../Input'
import Alert from '../Alert'
import { connect } from 'react-redux'

class Cabinet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      surname: '',
      phone: '',
      password: '',
      confirm_password: '',
      showPassword: false,
      showPasswordConfirm: false,
      address: '',
      error: false,
      errorText: '',
      errorType: 'error',
    }
  }

  componentDidMount() {
    const { user } = this.props

    this.setState({
      ...this.state,
      name: user.first_name,
      surname: user.last_name,
      phone: user.phone,
    })

    // axios.get(
    //   `https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_BASE_URL}/clients/${user.id}`,
    //   {
    //     headers: { Token: user.token },
    //   }
    // )
    //   .then((res) => {
    //     this.setState({
    //       ...this.state,
    //       address: res.data.customer.address ?? '',
    //     })
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
  }

  closeAlert() {
    this.setState({ error: false })
  }

  render() {
    const { password, name, surname, phone, confirm_password } = this.state
    const { user } = this.props

    const handleChange = (props) => (event) => {
      let val = event.target.value
      this.setState({ ...this.state, [props]: val })
    }

    const handleSubmit = () => {
      if (password !== confirm_password) {
        this.setState({
          error: true,
          errorType: 'error',
          errorText: 'Пароль не совпадает',
        })
        return
      }

      if (phone.length !== 13) {
        this.setState({
          error: true,
          errorType: 'error',
          errorText: 'Пожалуйста, введите действующий телефонный номер',
        })
        return
      }

      axios
        .put(
          `${process.env.REACT_APP_BASE_URL}/clients/${user.id}`,
          {
            first_name: name,
            last_name: surname,
            phone,
            password,
          },
          {
            headers: {
              token: user.token,
            },
          }
        )
        .then((res) => {
          if (res.status === 200)
            this.setState({
              error: true,
              errorType: 'success',
              errorText: 'Изменено успешно',
            })
          mapDispatchToProps(setUser(res.data))
        })
        .catch((err) => {
          console.log(err)
        })
    }

    return (
      <div>
        <Grid
          className='profile-contnet'
          container
          style={{
            marginTop: '30px',
          }}
        >
          <Grid item xs={12} md={6} className='profile-input' spacing={2}>
            <Input
              label='Имя'
              value={this.state.name}
              name={'name'}
              style={{ width: '90%', margin: '10px 0' }}
              onChange={handleChange('name')}
              variant='outlined'
            />
          </Grid>
          <Grid item xs={12} md={6} className='profile-input' spacing={2}>
            <Input
              label='Фамилия'
              className='profile-input'
              value={this.state.surname}
              name={'surname'}
              style={{ width: '90%', margin: '10px 0' }}
              onChange={handleChange('surname')}
              variant='outlined'
            />
          </Grid>
          <Grid item xs={12} md={6} className='profile-input' spacing={2}>
            <Input
              label='Номер телефона'
              value={this.state.phone}
              style={{ width: '90%', margin: '10px 0' }}
              name={'phone'}
              placeholder={`Phone`}
              onChange={handleChange('phone')}
              variant='outlined'
            />
          </Grid>
        </Grid>
        <Grid
          className='profile-contnet'
          container
          style={{ marginBottom: '30px' }}
        >
          <Grid item xs={12} md={6} className='profile-input' spacing={2}>
            <Input
              name={'password'}
              type='password'
              onChange={handleChange('password')}
              label='Пароль'
              value={this.state.password}
              style={{ width: '90%', margin: '10px 0' }}
              variant='outlined'
            />
          </Grid>
          <Grid item xs={12} className='profile-input' md={6} spacing={2}>
            <Input
              name={'confirm_password'}
              type='password'
              onChange={handleChange('confirm_password')}
              label='Подтверждение пароля'
              value={this.state.confirm_password}
              style={{ width: '90%', margin: '10px 0' }}
              variant='outlined'
            />
          </Grid>
        </Grid>
        <Grid
          className='profile-contnet'
          container
          justify={'flex-end'}
          spacing={3}
          style={{ marginBottom: '30px' }}
        >
          <Grid
            className='profile-input'
            item
            xs={12}
            md={2}
            style={{ marginRight: '20px' }}
          >
            <CabinetButton onClick={handleSubmit}>Обновить</CabinetButton>
          </Grid>
        </Grid>
        <Alert
          open={this.state.error}
          onClose={() => this.closeAlert()}
          type={this.state.errorType}
          errorText={this.state.errorText}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { auth } = state
  return { user: auth.user }
}

export default connect(mapStateToProps)(Cabinet)
