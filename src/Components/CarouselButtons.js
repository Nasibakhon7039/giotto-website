import React from "react";
import styled from 'styled-components'

export const Dots = styled.div`
    position: absolute;
    width: 100%;
    bottom: 0;
    display: flex;
    list-style: none;
    justify-content: center;
    padding-bottom: 10px;
`

const EmblaButton = styled.button`
    outline: 0;
    cursor: pointer;
    background-color: transparent;
    touch-action: manipulation;
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    border: 0;
    ${props => props.left && `left: ${props.left}px`};
    ${props => props.right && `right: ${props.right}px`};
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
    fill: ${props => props.theme.primary};
    padding: 0;
    &:disabled {
        cursor: default;
        opacity: 0.3;
    }
    @media (max-width: 576px) {
        display:none;
    }
`

const ButtonSvg = styled.svg`
    width: 100%;
    height: 100%;
`

const EmblaDot = styled.button`
    background-color: transparent;
    cursor: pointer;
    position: relative;
    padding: 0;
    outline: 0;
    border: 0;
    width: 30px;
    height: 30px;
    margin-right: 7.5px;
    margin-left: 7.5px;
    display: flex;
    align-items: center;
    &::after {
        background-color: ${props => props.theme.secondary};
        width: 100%;
        height: 4px;
        border-radius: 2px;
        content: "";
        ${props => props.selected && `
        background-color: ${props.theme.primary};
        opacity: 1;
    `}
    }
    @media (max-width: 576px) {
        display:none;
    }
`

export const PrevButton = ({ enabled, onClick }) => (
    <EmblaButton
        left={27}
        onClick={onClick}
        disabled={!enabled}
    >
        <ButtonSvg viewBox="137.718 -1.001 366.563 644">
            <path d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z" />
        </ButtonSvg>
    </EmblaButton>
);

export const NextButton = ({ enabled, onClick }) => (
    <EmblaButton
        right={27}
        onClick={onClick}
        disabled={!enabled}
    >
        <ButtonSvg viewBox="0 0 238.003 238.003">
            <path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z" />
        </ButtonSvg>
    </EmblaButton>
);

export const DotButton = ({ selected, onClick }) => (
    <EmblaDot
        selected={selected}
        type="button"
        onClick={onClick}
    />
);