import styled from 'styled-components'
import {theme} from "../../styles/theme";

export const OrderContainer = styled.div`
    position: relative;
    width: 100%;
    box-shadow: 0 0 6px rgba(0,0,0,.16);
    border-radius: 4px;
    padding: 10px 30px;
    display: flex;
    flex-direction: column;
    margin:10px 0 30px 0;
`;

export const OrderTitle = styled.h3`
    color: black;
    font-weight: bold;
`;

export const OrderSubTitle = styled.h5`
    font-size: 15px;
    color: black;
    font-weight: normal;
`;

export const OrderInfo = styled.p`
    color: darkgray;
    font-weight: normal;
`;

export const OrderHorizontalList = styled.ul`
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    padding: 0;
`;

export const OrderHorizontalItem = styled.li`
    display: flex;
    flex-direction: stretch;
    margin: 5px 3px;
    font-size: 0.9em;
    padding-left: 13px;
    padding-right: 28px;
    border-right: 0.3px solid lightgrey;
    &:first-child{
        padding-left: 0;
    }
    &:last-child{
        border: none!important;
    }
`;

export const OrderHorizontalChild = styled.div`
    display: flex;
    flex-direction: column;
    & span:first-child{
        font-weight: bold;
    }
    & span{
        margin: 4px 0;
    }
    padding: 0;
`;

export const OrderVerticalList = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    padding: 0;
`;

export const OrderVerticalItem = styled.ul`
    display: flex;
    margin: 10px 3px;
    font-size: 0.95em;
    padding: 0;
    span{
        word-break: break-word;
        box-sizing: border-box;
        width: 20%;
        &:first-child {
            width: 40%;
        }
    }
    & span:last-child{
        font-weight: lighter;
    }
`;

export const OrderBackButton = styled.a`
    position: absolute;
    top: 10px;
    right: 30px;
    width: auto;
    height: 32px;
    z-index: 10;
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
`;