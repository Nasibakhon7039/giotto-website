import React, { Component } from 'react';
import { CabinetButton, CabinetForm, CabinetInput, CabinetLabel } from "./item";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Axios from "axios";
import { setUser } from "../../redux/actions/authActions/authActions";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import { Input } from '../Input'
import Alert from '../Alert'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '25ch',
    },
}));


class Cabinet extends Component {

    constructor(props) {
        super(props);
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
            errorType: 'error'
        }
    }

    componentDidMount() {
        this.setState({ ...this.state, name: this.props.user.name, surname: this.props.user.lastname, phone: this.props.user.phone })
        Axios.get(process.env.CUSTOMER_PROFILE_UPDATE, { headers: { Authorization: this.props.user.access_token } })
            .then(res => {
                this.setState({ ...this.state, address: res.data.customer.address ?? '' })
            }).catch(err => {
                console.log(err)
            })
        console.log(this.props.user)
    }

    closeAlert() {
        this.setState({ error: false })
    }

    render() {

        const { password, name, surname, address, confirm_password } = this.state;

        const handleChange = (props) => (event) => {
            let val = event.target.value;
            this.setState({ ...this.state, [props]: val });
        }

        const handleClickShowPassword = () => {
            this.setState({ ...this.state, showPassword: !this.state.showPassword })
        }
        const handleClickShowPasswordConfirm = () => {
            this.setState({ ...this.state, showPasswordConfirm: !this.state.showPasswordConfirm })
        }

        const handleSubmit = () => {
            if (password && confirm_password) {
                Axios.put(process.env.CUSTOMER_PROFILE_UPDATE, {
                    address: address,
                    name: name,
                    lastname: surname,
                    password: password
                },
                    {
                        headers: {
                            Authorization: this.props.user.access_token
                        }
                    }
                ).then(res => {
                    if (res.status === 200)
                        this.setState({
                            error: true,
                            errorText: 'Изменено успешно',
                            errorType: 'success'
                        })
                    mapDispatchToProps(setUser(res.data.customer))

                }).catch(err => {
                    console.log(err)
                })
            } else
                this.setState({
                    error: true,
                    errorText: 'Заполните поле для пароля',
                    errorType: 'error'
                })
        }

        return (
            <div>
                <Grid className="profile-contnet" container style={{
                    marginTop: '30px',

                }}>

                    <Grid item xs={12} md={6} className="profile-input" spacing={2}>
                        <Input label="Имя" value={this.state.name} name={'name'} style={{ width: '90%', margin: '10px 0' }} onChange={handleChange('name')} variant="outlined" />
                    </Grid>
                    <Grid item xs={12} md={6} className="profile-input" spacing={2}>
                        <Input label="Фамилия" className="profile-input" value={this.state.surname} name={'surname'} style={{ width: '90%', margin: '10px 0' }} onChange={handleChange('surname')} variant="outlined" />
                    </Grid>
                    <Grid item xs={12} md={6} className="profile-input" spacing={2}>
                        <Input label="Номер телефона" value={this.state.phone} style={{ width: '90%', margin: '10px 0' }} name={'phone'} placeholder={`Phone`} onChange={handleChange('phone')} variant="outlined" />
                    </Grid>
                </Grid>
                <Grid className="profile-contnet" container style={{ marginBottom: '30px' }}>
                    <Grid item xs={12} md={6} className="profile-input" spacing={2}>
                        <Input
                            name={'password'}
                            type="password"
                            onChange={handleChange('password')}
                            label="Пароль"
                            value={this.state.password}
                            style={{ width: '90%', margin: '10px 0' }}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} className="profile-input" md={6} spacing={2}>
                        <Input
                            name={'confirm_password'}
                            type="password"
                            onChange={handleChange('confirm_password')}
                            label="Подтверждение пароля"
                            value={this.state.confirm_password}
                            style={{ width: '90%', margin: '10px 0' }}
                            variant="outlined"
                        />
                    </Grid>
                </Grid>
                <Grid className="profile-contnet" container justify={"flex-end"} spacing={3} style={{ marginBottom: '30px' }}>
                    <Grid className="profile-input" item xs={12} md={2} style={{ marginRight: '20px' }}>
                        <CabinetButton onClick={handleSubmit}>Обновить</CabinetButton>
                    </Grid>
                </Grid>
                <Alert open={this.state.error} onClose={() => this.closeAlert()} type={this.state.errorType} errorText={this.state.errorText} />
            </div>
        );
    }
}

Cabinet.propTypes = {};

export default Cabinet;