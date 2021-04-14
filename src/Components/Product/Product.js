import styled from 'styled-components'

export const ProductWrapper = styled.div`
    flex: 0 0 auto;
    min-width: 0;
    width: ${props => props.w};
    padding-left: 16px;
    padding-right: 0;
    margin-bottom: 40px;
    @media (max-width: 576px) {
        width:100%;
        padding: 0 15px;
    }
`

export const Sticky = styled.div`
    position: sticky;
    top: 0;
    padding-top: 26px;
    margin-right: 36px; 
    @media (max-width: 576px) {
        margin:0;
        padding:0;
        
    }
`

export const Image = styled.img`
    display: block;
    max-width: 80%;
    max-height: 100%;
    margin: 0 auto;
    -o-object-fit: contain;
    object-fit: contain;
`

export const ProductTitle = styled.h1`
    font-size: 22px;
    line-height: 28px;
    font-weight: 700;
    color: ${props => props.theme.fontColor};
`

export const PriceRow = styled.div`
    display: flex;
    align-items: baseline;
    flex-direction: row;
    flex-wrap: nowrap;
    padding-top: 26px;
    @media (max-width: 576px) {
        padding:0;
        
    } 
`

export const CurrentPrice = styled.div`
    margin-right: 12px;
    font-size: 32px;
    font-weight: 700;
    color: ${props => props.theme.primary};
    @media (max-width: 576px) {
        font-size:21px;
        
    }
`

export const OldPrice = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    font-size: 18px;
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

export const AvailableInfo = styled.div`
    margin-top: 12px;
    font-size: 16px;
    line-height: 22px;
    font-weight: 500;
    color: ${props => props.theme.success};
`

export const LinkWrapper = styled.div`
    max-width: 330px;
    margin-top: 16px;
`

export const LinkToCart = styled.button`
    display: inline-block;
    width: 100%;
    height: 52px;
    padding: 0 18px;
    border: 1px solid ${props => props.theme.primary};
    border-radius: 4px;
    color: ${props => props.theme.primary};
    font-size: 18px;
    font-weight: 500;
    line-height: 48px;
    transition: all .12s ease-out;
    text-align: center;
    background-color: transparent; 
    cursor: pointer;
    &:hover {
        border-color: ${props => props.theme.primary};
        background-color: ${props => props.theme.primary};
        color: #fff;
    }
    &:focus {
        outline: none;
    }
`

export const InfoRow = styled.div`
    padding-top: 26px; 
    p {
        margin-bottom: 8px;
        font-size: 16px;
        line-height: 22px;
        font-weight: 700;
        color: ${props => props.theme.fontColor};    
    }
    ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
        li {
            position: relative;
            padding-left: 16px;
            font-size: 14px;
            &::before {
                content: ".";
                position: absolute;
                top: -7px;
                left: 0;
                margin-top: -4px;
                font-size: 32px;
                line-height: 28px;
                font-weight: 700;
                color: ${props => props.theme.primary};
            }
        }
    }
`

export const InfoTitle = styled.h3`
    margin-bottom: 8px;
    font-size: 16px;
    line-height: 22px;
    font-weight: 700;
    color: ${props => props.theme.fontColor};
`

export const List = styled.ul`
    padding: 0;
    margin: 0;
    list-style-type: none;
`

export const ListItem = styled.li`
    position: relative;
    padding-left: 16px;
    font-size: 14px;
    &::before {
        content: ".";
        position: absolute;
        top: -7px;
        left: 0;
        margin-top: -4px;
        font-size: 32px;
        line-height: 28px;
        font-weight: 700;
        color: ${props => props.theme.primary};
    }
`

export const StyledLink = styled.div`
    a {
        display: inline-block;
        margin-top: 8px;
        transition: color .12s ease-out;
        text-decoration: none;
        outline: 0;
        touch-action: manipulation;
        color: ${props => props.theme.primary};
        font-size: ${props => props.big ? '16px' : '14px'};
        &:hover {
            color: ${props => props.theme.primary};
            text-decoration: none;
        }
    }
`
export const FeatureContainer = styled.div`
    padding: 68px 0 !important;
    color: #222;
    width: auto;
    display: block;
    margin: 0 auto;
    box-sizing: content-box;
    padding: 0 8px;
    h2 {
        font-size: 22px;
        line-height: 28px;
        font-weight: 700;     
    }
    h3 {
        font-size: 16px;
        line-height: 22px;
        font-weight: 700;
        margin: 26px 0 16px;
    }
    p {
        font-size: 14px;
        line-height: 20px;
    }
    @media (max-width: 576px) {
        padding:20px 15px!important;
        
    }
`
export const Headline = styled.h2`
   font-size: 22px;
   line-height: 28px;
   font-weight: 700;
`
export const SubHeadline = styled.h3`
    font-size: 16px;
    line-height: 22px;
    font-weight: 700;
    margin: 26px 0 16px;
`
export const FeatureItem = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 16px;
`
export const Info = styled.div`
   font-size: 14px;
    line-height: 20px;
`
export const Details = styled.div`
   font-size: 14px;
    line-height: 20px;
    width: 52%;
`
export const Line = styled.h3`
    height: 1px;
    margin: 0 8px;
    background: linear-gradient(90deg,#dcdcdc 33%,transparent 0) repeat-x bottom;
    background-size: 3px 1px;
    flex-grow: 1;
`