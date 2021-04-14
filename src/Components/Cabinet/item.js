import styled from 'styled-components'
import {theme} from "../../styles/theme";

export const CabinetForm = styled.form`
    padding: 30px 20px;
    width: 100%;    
`;

export const CabinetInput = styled.input`
    width: 90%;
    background-color: rgba(245,245,245,1);
    margin: 10px 0;
    padding: 10px 15px;
    border: 0.4px solid transparent;
    border-radius: 5px;
    font-size: 1em;
    margin-bottom: 20px;
`;

export const CabinetLabel = styled.label`
    margin-left: 5px;
    font-size: 0.9em;
    font-weight: bold; 
`;

export const CabinetButton = styled.button`
    width: 100%;
    border-radius: 4px;
    border: 1px solid ${theme.primary};
    background-color: transparent;
    padding: 15px 0;
    color: #fff;
    background-color: ${theme.primary};
    cursor: pointer;
    font-size: 15px;
    &:focus,
    &:hover{
        outline: none;
    }
`;