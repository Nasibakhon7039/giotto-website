import styled from 'styled-components'

export const FormWrapper = styled.div`
    display: block;
    padding-top: ${props => props.paddingTop ? `${props.paddingTop}px` : `68px`}; 
`

export const FormTitle = styled.h3`
    padding-bottom: ${props => props.paddingBottom ? props.paddingBottom : `24px`}; 
    margin-bottom: 0;
    margin-top: 0;
    font-size: 22px;
    line-height: 28px;
    font-weight: 700;
    color: ${props => props.theme.fontColor};
`

export const InputWrapper = styled.div`
    display: inline-block;
    min-width: ${props => props.span || `480px`};
    margin-top: 16px;
    @media (max-width: 576px) {
        min-width:280px;
        
    }
`

export const Text = styled.p`
    margin-top: ${props => props.marginTop || '40px'};
    font-weight: 400;
    font-size: ${props => props.fontSize ? `${props.fontSize}px` : `12px`};
    line-height: 16px;
`

export const ButtonWrapper = styled.div`
    max-width: 366px;
    padding-top: ${props => props.paddingTop || '68px'}; 
`

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: ${props => props.height || '64px'};
    padding: 0 18px;
    border-radius: 4px;
    border: none;
    transition: all .12s ease-out;
    background-color: ${props => props.theme.primary}; 
    color: #fff;
    font-size: ${props => props.fontSize || '18px'};
    font-weight: 500;
    line-height: ${props => props.lineHeight || '60px'};
    cursor: pointer;
    &:hover {
        outline: none;
        transform: translateY(-1px);
        opacity: 0.8; 
    }
`

export const RadioGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: -16px;
    margin-top: -16px;
`

export const RadioWrapper = styled.div`
    display: flex;
    margin-top: 16px;
    position: relative;
    margin-left: 16px;
`

export const Label = styled.label`
    display: inline-block;
    position: relative;
`

export const RadioBlock = styled.div`
    min-height: 100%;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    display: flex;
    flex-direction: column;
    padding: 16px;
    cursor: pointer;
    transition: all .2s;
    border-radius: 4px;
    background-color: transparent;
    border: 1px solid ${props => props.theme.borderColor};
    user-select: none;
    position: relative;
    &::before {
        border-radius: 2px;
        top: -1px;
        bottom: -1px;
        left: -1px;
        right: -1px;
        content: "";
        position: absolute;
    }
    &:hover {
        border-color: ${props => props.theme.borderColor};
    }
`

export const InputRadio = styled.input`
    position: absolute;
    opacity: 0;
    &:checked + ${RadioBlock} {
        &:hover {
            border-color: transparent;
        }
        &::before {
            border-color: transparent;
            box-shadow: 0 0 0 2px ${props => props.theme.primary};
        }
    }
`

export const Wrapper = styled.div`
    width: 200px;
`

export const RadioTitle = styled.span`
    display: block;
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    color: ${props => props.theme.fontColor};
`

export const RadioDesc = styled.span`
    display: block;
    margin-top: 4px;
    letter-spacing: -.1px;
    color: ${props => props.theme.spanColor};
    font-size: 14px;
    line-height: 20px;
`

export const RadioIcon = styled.img`
    width: 30px;
    height: 30px;
`

export const CheckoutHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
`

export const CheckoutTitle = styled.h2`
    font-size: 22px;
    line-height: 28px;
    font-weight: 700;
    color: ${props => props.theme.fontColor};
`

export const CheckoutLink = styled.a`
    font-size: 16px;
    line-height: 22px;
    font-weight: 500;
    color: ${props => props.theme.primary};
    transition: color .12s ease-out;
    text-decoration: none;
    outline: 0;
    touch-action: manipulation;
    &:hover {
        text-decoration: none;
    }
`

export const Item = styled.div`
    display: flex;
    margin: 10px 0;
`

export const ItemImage = styled.div`
    min-width: 64px;
    width: 64px;
    min-height: 64px;
    height: 64px;
    img {
        display: block;
        max-width: 64px;
        height: 100%;
        margin: 0 auto;
    }
`

export const ItemBody = styled.div`
    margin-left: 14px;
    font-size: 14px;
    line-height: 18px;
`

export const ItemQuantity = styled.span`
    display: block
    font-size: 12px;
    line-height: 16px;
    margin-top: 4px;
`

export const Container = styled.div`
    padding: 20px;
    border-radius: 4px; 
    border: 1px solid ${props => props.theme.borderColor};
`