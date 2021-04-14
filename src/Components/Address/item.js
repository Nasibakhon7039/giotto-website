import styled from "styled-components";
import {theme} from "../../styles/theme";

export const AddButton = styled.button`
    background-color: 0;
    padding: 10px 15px;
    margin-bottom: 10px;
    border: none;
    display: flex;
    color: ${theme.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    cursor: pointer;
    &:focus,&:hover{
        outline: none;
    }
`;

export const AddressCard = styled.div`
    box-shadow: 0 0 6px rgba(0,0,0,.16);
    border-radius: 4px;
    font-size: 0.85em;
`;

export const AddressHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 15px;
    border-bottom: 0.3px solid lightgray;
    font-weight: bold;
`;

export const AddressBody = styled.div`
    min-height: 100px;
    padding: 12px 15px;
`;

export const ButtonGroup = styled.div`
    display: flex;
    flex-direction: raw;
`;

export const EditButton = styled.button`
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    background-color: #037bfe;
    color: white;
    border: none;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
    &:focus, &:hover{
        outline: none;
    } 
`;

export const DeleteButton = styled.button`
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    background-color: ${theme.primary};
    color: white; 
    border: none;
    border-radius: 50%;
    cursor: pointer;
    &:focus, &:hover{
        outline: none;
    } 
`;