import styled from 'styled-components'

export const Button = styled.button`
    width: auto;
    height: 32px;
    margin-top: 16px;
    padding: 0 14px;
    border: 1px solid ${props => props.theme.dark};
    border-radius: 4px;
    font-size: 14px;
    line-height: 30px;
    transition: all .12s ease-out;
    background-color: ${props => props.outlined ? '#fff' : props.theme.dark};
    color: ${props => props.outlined ? props.theme.dark : '#fff'};
    outline: none;
    cursor: pointer;
    &:hover {
        background-color: ${props => props.outlined ? '#fff' : props.theme.dark}; 
        transform: translateY(-1px);
        opacity: 0.8;
    }
    &:focus {
        outline-color: ${props => props.theme.primary};
    }
`

export const LinkButton = styled.a`
    width: auto;
    height: 32px;
    margin-top: 16px;
    padding: 0 14px;
    border: 1px solid ${props => props.theme.dark};
    border-radius: 4px;
    font-size: 14px;
    line-height: 30px;
    transition: all .12s ease-out;
    background-color: ${props => props.outlined ? '#fff' : props.theme.dark};
    color: ${props => props.outlined ? props.theme.dark : '#fff'};
    outline: none;
    cursor: pointer;
    &:hover {
        background-color: ${props => props.outlined ? '#fff' : props.theme.dark}; 
        transform: translateY(-1px);
        opacity: 0.8;
    }
    &:focus {
        outline-color: ${props => props.theme.primary};
    }
`