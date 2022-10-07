import styled, { CSSObject } from 'styled-components'

interface Props {
    image: any
}

const HomeContainer = styled.div<Props>`
    
    background-image: url(${props => props.image});
    background-position: center;
    background-repeat: none;
    background-size: cover;

    color: #e0d9a5;

    width: 100vw;
    height: 100vh;

`

export default HomeContainer