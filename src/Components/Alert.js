import React from 'react'
import MuiAlert from '@material-ui/lab/Alert'
import Snackbar from '@material-ui/core/Snackbar'

function SnackbarAlert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Alert({ open, onClose, type, errorText }) {
    return (
        <Snackbar open={open} onClose={onClose}>
            <SnackbarAlert onClose={onClose} severity={type}>{errorText}</SnackbarAlert>
        </Snackbar>
    )
}