import styled from "styled-components";

interface IProps {
    page: any
}

const HeaderContainer = styled.div<IProps>`

    @import url('https://fonts.googleapis.com/css2?family=Alkalami&family=Open+Sans:wght@300&display=swap');

    position: absolute;

    width: 100%;
    display: flex;
    justify-content: center;

    header {

        font-family: 'Open Sans', sans-serif;

        a {
            color: ${props => props.page === 'gallery' ? 'black ' : '#e0d9a5'};
        }

        border-bottom: 1px solid ${props => props.page === 'gallery' ? 'black ' : '#e0d9a5'};
       
        padding: 10px 0 10px 0;

        display: flex;
        
        width: 98vw;
    }

    nav span:not(:nth-child(1)) {
        margin-left: 25px;
    }

`

export default HeaderContainer