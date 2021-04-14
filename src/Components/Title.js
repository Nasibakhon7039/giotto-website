import styled from 'styled-components'

export const Title = styled.h2`
    position: relative;
    margin-bottom: 30px;
    font-size: 32px;
    line-height: 36px;
    font-weight: 600;
    text-align: center;
    &::after {
        position: absolute;
        z-index: -1;
        top: 50%;
        left: 50%;
        width: 150px;
        height: 40px;
        margin-left: -75px;
        content: "";
        // background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMzQiPjxwYXRoIGZpbGw9IiM4RUY0QzIiIGQ9Ik0xLjYxNyAyMC40MzNMMCA1LjUyQzMwLjUwNCAyLjIzOSA1Mi4wMjQuNDIyIDY0LjY4OS4wNjggNzEuNzk4LS4xMzEgNzYuMjYuMDg0IDc5LjExMiAxYzEuNjc4LjUzOCAzLjEyNCAxLjMzNyA0LjM3NyAyLjg1MyAyLjExIDIuNTUgMi4zOCA1Ljk0NC45NjcgOC43MzcgMTEuMDQzLTIuMzU5IDI0LjQ1LTUuMzYyIDQwLjEzLTguOTk4TDEyOCAxOC4yMDJjLTQ1Ljc4NCAxMC42MTUtNzEuNjk4IDE1LjgtNzkuNzAyIDE1LjgtMi4wMTQgMC0zLjU5LS4xOC01LjE0NS0uNzg0LTQuMjE1LTEuNjM5LTYuNy02LjMzOC00LjQ4MS0xMC45OCAxLjI4Mi0yLjY4NCAzLjEwNi0zLjk5IDYuOTQxLTYuMDI4LTExLjU0LjkwMi0yNi4yMTQgMi4zMS00My45OTYgNC4yMjJ6Ii8+PC9zdmc+) no-repeat 0 0;
        background-size: contain;
    }
    @media (max-width: 576px) {
        margin: 10px 0;
        font-size:21px;
    }
`

export const ShopTitle = styled.h1`
    position: relative;
    margin-top: 4px;
    margin-bottom: 20px;
    font-size: 32px;
    line-height: 36px;
    font-weight: 600;
    color: ${props => props.theme.fontColor};
`