import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { AddButton } from "./item";
import AddIcon from '@material-ui/icons/Add';
import SimpleDialog from "./popup";
import AddressCardItem from "./card";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/actions/authActions/authActions";
import Alert from '../Alert'
import SEO from '../seo'

export default function AddressItem() {
    const [openDialog, isOpenDialog] = useState(false)
    const [error, setError] = useState(false)
    const [errorType, setErrorType] = useState('error')
    const [errorText, setErrorText] = useState('')

    const handleClose = () => {
        isOpenDialog(false)
    }
    const [address, setAddress] = useState(null);

    const user = useSelector(state => state.auth.user)

    const [userInfo, setUserInfo] = useState({
        phone: '',
        name: '',
        lastname: '',
        address: ""
    })

    const dispatch = useDispatch();

    useEffect(() => {
        setUserInfo({
            ...userInfo,
            phone: user.phone,
            name: user.name,
            lastname: user.lastname
        })
        Axios.get(process.env.CUSTOMER_PROFILE_UPDATE, { headers: { Authorization: user.access_token } })
            .then(res => {
                setAddress(res.data.customer.address)
            }).catch(err => {
                console.log(err)
            })
    }, [])

    const deleteAddress = () => {
        Axios.put(process.env.CUSTOMER_PROFILE_UPDATE, { ...userInfo }, {
            headers: {
                Authorization: user ? user.access_token : ""
            }
        }).then(res => {
            dispatch(setUser(res.data.customer))
            setUserInfo({ ...userInfo, address: '' })
            setAddress('')
            setError(true)
            setErrorType('success')
            setErrorText('Адрес удален')
        }).catch(err => {
            setError(true)
            setErrorType('error')
            setErrorText('Произошло ошибка')
            console.log(err)
        })
    }

    const editAddress = () => {
        isOpenDialog(true)

    }
    return (
        <div>
            <SEO />
            {
                !address ?
                    <Grid container justify={"flex-end"}>
                        <Grid item md={2} xs={12}>
                            <AddButton onClick={() => {
                                isOpenDialog(true)
                            }}>
                                <AddIcon />
                                <span style={{ margin: '0 4px', whiteSpace: 'nowrap' }}>Добавить адрес</span>
                            </AddButton>
                        </Grid>
                    </Grid> :
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <AddressCardItem editAddress={editAddress} deleteAddress={deleteAddress} address={address} isOpenDialog={isOpenDialog} />
                        </Grid>
                    </Grid>
            }

            <SimpleDialog
                setUserInfo={setUserInfo}
                user={user}
                userInfo={userInfo}
                isOpenDialog={isOpenDialog}
                address={address}
                setAddress={setAddress}
                open={openDialog}
                onClose={handleClose}
            />
            <Alert open={error} type={errorType} onClose={() => setError(false)} errorText={errorText} />
        </div>
    )
}