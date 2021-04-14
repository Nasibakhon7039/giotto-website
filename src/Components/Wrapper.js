import styled from 'styled-components'

export const Wrapper = styled.div`
    display: block;
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 8px;
    @media (max-width: 576px) {
             padding: 10px 8px 25px 8px;
         }
`

export const ShopWrapper = styled(Wrapper)`
    position: relative;
    z-index: 1;
    max-width: 1280px;
    padding: 40px;
    border-radius: 4px;
    background-color: #fff; 
`