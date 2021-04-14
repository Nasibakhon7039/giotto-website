import styled from 'styled-components'

export const AuthWrapper = styled.div`
    max-width: 400px;
    margin: 0 auto;
    padding: 15px 30px;
    border-radius: 4px;
    background-color: #fff;
    text-align: center;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`

export const Background = styled.div`
    min-height: calc(100vh - 138px);
    background-color: ${props => props.theme.secondary};
`
