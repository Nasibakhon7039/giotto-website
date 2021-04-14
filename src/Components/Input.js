import styled from 'styled-components'
import { TextField } from '@material-ui/core'

export const Input = styled(TextField)`
    & .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
        border-color: ${props => props.theme.borderColor};
    }
    & .MuiInputLabel-outlined.Mui-focused {
        color: ${props => props.theme.primary};
    }
    & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
        border: 1px solid ${props => props.theme.primary}
    }
    ${props => props.margin && `margin: ${props.margin}`};
    ${props => props.background && `background-color: ${props.theme.secondary}`};
`