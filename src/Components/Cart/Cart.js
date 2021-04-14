import styled from 'styled-components'
import { TextField } from '@material-ui/core'

export const CartWrapper = styled.div`
    width: auto;
    min-height: calc(100vh - 500px);
    display: flex;
    flex-wrap: nowrap;
    margin-left: -16px;
    margin-right: 0;
    @media (max-width: 576px) {
        flex-direction:column;
        margin:0;
    }
`

export const CartList = styled.div`
    flex: 0 0 auto;
    width: 62.5%;
    min-width: 0;
    padding-left: 16px;
    padding-right: 0;
    margin-bottom: 20px;
    border-top: 1px solid ${props => props.theme.borderColor};
    @media (max-width: 1000px) {
        width:100%
        
    }
`

export const CartItem = styled.div`
    position: relative;
    display: flex;
    padding: 24px 0;
    border-bottom: 1px solid ${props => props.theme.borderColor};
`

export const CartImage = styled.div`
    width: 100px;
    height: 100px;
    img {
        display: block;
        max-width: 100%;
        max-height: 100%;
        margin: 0 auto;
    }
    @media (max-width: 576px) {
        padding:0 10px;
        
    }
`

export const CartBody = styled.div`
    display: flex;
    width: 100%;
    padding: 8px 0 8px 16px;
    @media (max-width: 576px) {
        flex-direction: row;
        padding:0 10px;
        display:flex;
        justify-content:center;

    }
`

export const CartInfo = styled.div`
    flex: 3 3;
    width: 100%;
    padding-right: 16px;
`

export const Title = styled.span`
    display: block;
    font-size: 16px;
    line-height: 22px;
    font-weight: 600;
    word-break: break-word;
    color: ${props => props.theme.fontColor};
`

export const Quantity = styled.span`
    display: block;
    margin-top: 8px;
    font-size: 14px;
    line-height: 18px;
    color: ${props => props.theme.fontColor};
`

export const ActionsBlock = styled.div`
    position: relative;
    width: 150px;
`

export const Actions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 7px;
    border: 1px solid ${props => props.theme.borderColor};
    border-radius: 2px;
    &:hover {
        border-color: #898f97;
    }
`

export const ActionButton = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8px;
    font-size: 14px;
    font-weight: 500;
    line-height: 30px;
    color: ${props => props.theme.fontColor};
    transition: all .12s ease-out;
    outline: none;
    border: none;
    background: transparent;
    cursor: pointer;
    &:focus {
        outline: none;
    }
`

export const Count = styled.span`
    display: block;
    font-size: 18px;
    font-weight: 500;
    color: ${props => props.theme.fontColor};
    cursor: default;
`

export const Price = styled.div`
    margin-top: 8px;
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    color: ${props => props.theme.fontColor};
    text-align: center;
`

export const PriceBlock = styled.div`
    position: relative;
    width: 130px;
    margin-left: 30px;
    display: flex;
    align-items: center;
    @media (max-width: 576px) {
        margin-left:15px;
    }
`

export const TotalPrice = styled.span`
    display: inline-block;
    margin-bottom: 5px;
    font-size: 22px;
    font-weight: 700;
    color: ${props => props.theme.fontColor};
    @media (max-width: 576px) {
        font-size:15px;
    }
`

export const OldPrice = styled.span`
    position: relative;
    display: inline-block;
    font-size: 14px;
    font-weight: 700;
    color: ${props => props.theme.fontColor};
    &::after {
        content: "";
        position: absolute;
        top: -1px;
        left: -4%;
        width: 110%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 6px;
        pointer-events: none;
        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjMiIGhlaWdodD0iMTMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuMDU3IDguNDY3YTQ3MC42ODkgNDcwLjY4OSAwIDAxMjkuNTA1LTUuMDg1QTQ5OC43MTkgNDk4LjcxOSAwIDAxNjAuOTQuMDUzYTEgMSAwIDAxMS4wNjkuODU4bC4yNzYgMS45NjhhMSAxIDAgMDEtLjkyIDEuMTM3Yy04LjgyOS42MjUtMTguMzcgMS42NTgtMjguNjI1IDMuMDk5YTUzNi43MjggNTM2LjcyOCAwIDAwLTMxLjAwNSA1LjI5NCAxIDEgMCAwMS0xLjE4Ny0uODQybC0uMjgtMS45ODFhMSAxIDAgMDEuNzg5LTEuMTE5eiIgZmlsbD0iI0Y3M0QzNCIgZmlsbC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIuOCIvPjwvc3ZnPg==);
    }
`

export const TrashWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TrashButton = styled(ActionButton)`
    width: 20px;
    min-width: 20px;
    height: 20px;
    padding: 0;
    font-size: 20px;
    font-weight: 400;
    transition: opacity .2s ease-in-out;
    opacity: 0.8;
    color: ${props => props.theme.fontColor};
    &:hover {
        opacity: 1;
    }
`

export const CheckoutWrapper = styled(CartList)`
    width: 33.333%;
    margin-left: 4.1%;
    border: none;
    @media (max-width: 1000px) {
        width:100%;
        margin:0 8px!important;
        padding:10px;
    }
`
export const CheckoutBlock = styled.div`
    position: sticky;
    top: 90px;
    ${props => props.cart && `
            padding: 20px;
            border-radius: 4px; 
            border: 1px solid ${props.theme.borderColor};
        `
    }
    color: ${props => props.theme.fontColor};
    font-size: 16px;
    line-height: 22px;
`
export const CheckoutInfo = styled.div`
    margin: 20px 0; 
`

export const CheckoutInfoRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    align-items: baseline;
    margin-top: 4px;
    ${props => props.total && `
            margin-top: 24px;
            padding: 16px 0;
            border-top: 1px solid ${props.theme.borderColor};
            border-bottom: 1px solid ${props.theme.borderColor};
        `
    }
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    &:first-child {
        margin-top: 0;
    }
    &:last-child {
        font-weight: 700;
    }
`

export const CheckoutButton = styled.a`
    display: block;
    width: 100%;
    height: 52px;
    padding: 0 18px;
    border: 2px solid ${props => props.theme.primary};
    border-radius: 4px;
    transition: all .12s ease-out;
    background-color: ${props => props.theme.primary};
    color: #fff;
    font-size: 18px;
    line-height: 48px;
    font-weight: 500;
    text-decoration: none;
    text-align: center;
    &:hover {
        color: #fff;
        text-decoration: none;
        transform: translateY(-1px);
        opacity: 0.8;
    } 
`

export const ShoppingButton = styled(CheckoutButton)`
    margin-top: 12px;
    background-color: #fff;
    color: ${props => props.theme.primary};
    cursor: pointer;
    &:hover {
        color: ${props => props.theme.primary}
    } 
`

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
`