import React, { useState } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { AddButton } from "./item";
import AddIcon from "@material-ui/icons/Add";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/actions/authActions/authActions";
import { Input } from '../Input'
import Alert from '../Alert'

export default function SimpleDialog(props) {
    const { setUserInfo, user, userInfo, onClose, selectedValue, isOpenDialog, open, address, setAddress } = props;
    const [error, setError] = useState(false)
    const [errorType, setErrorType] = useState('error')
    const [errorText, setErrorText] = useState('')

    const dispatch = useDispatch();
    //const user = useSelector(state => state.auth.user)

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleSubmit = () => {
        Axios.put(process.env.CUSTOMER_PROFILE_UPDATE, { ...userInfo }, {
            headers: {
                Authorization: user ? user.access_token : ""
            }
        }).then(res => {
            dispatch(setUser(res.data.customer))
            setError(true)
            setErrorType('success')
            setErrorText('Адрес добавлен')
        }).catch(err => {
            setError(true)
            setErrorType('error')
            setErrorText('Произошло ошибка')
            console.log(err)
        })
        isOpenDialog(false)
        setAddress(userInfo.address)
    };

    const handleChange = (event) => {
        let val = event.target.value;
        setUserInfo({ ...userInfo, address: val })
    }

    return (
        <>
            <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
                <div className="address-form" style={{ width: '400px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <DialogTitle id="simple-dialog-title" style={{ textAlign: 'center', color: '#222222', marginTop: '10px' }}>Изменить адрес</DialogTitle>
                    <Input onChange={handleChange} value={userInfo.address} variant="outlined" multiline rows={10} margin="0 15px" background />
                    <AddButton onClick={handleSubmit}>
                        <AddIcon />
                        <span style={{ margin: '0 4px' }}>Сохранить адрес</span>
                    </AddButton>
                </div>
            </Dialog>
            <Alert open={error} type={errorType} onClose={() => setError(false)} errorText={errorText} />
        </>
    )
}
