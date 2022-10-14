import styled from 'styled-components'

interface IProps {
    scrollPosition: number
}

const GalleryContainer = styled.div<IProps>`

    @import url('https://fonts.googleapis.com/css2?family=Alkalami&family=Open+Sans:wght@300&display=swap');

    height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #d9d7d3 ;

    #scroll {
        position: relative;
        height: fit-content;
        width: 160px;
        background-color: rgb(202, 200, 196);
        border-radius: 20px;
        margin-left: 5px;
    }

    #scroll > div {
        position: relative;
        height: 4px;
        width: 40px;
        border-radius: 20px;
        background-color: rgb(144, 143, 138);
        
        left: ${props => (props.scrollPosition) + "px"} ;

        transition: left 0.1s linear
    }

    #scroll-container {
        display: flex;
        align-items: center;
    }

    #scroll-container span {

        font-family: 'Noto Gujarati', serif;

        color: #69665b;
        
        font-size: 45pt;
    }

    #artwork-info {
        position: relative;
    }

    #artwork-container {
        position: relative;
        display: flex;
        align-items: center;
        overflow-y: hidden;
        overflow-x: auto;
        max-width: 100%;
    }

    #artwork-info > div {
        width: 100%;
        height: calc(98% + 2px);
        position: absolute;
        color: black;
    }

    #artwork-info p {

        cursor: pointer;

        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;

        width: 100%;
        height: 100%;
        color: white;
        color: transparent;
    }

    #artwork-info p:hover {
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        transition: background-color 1s, color 1s
    }

    #image-container:nth-child(even) img{
        height: 300px;
        width: 280px;
    }

    #image-container {

        height: 350px;

        margin-left: 25px;

    }

    #image-container:nth-child(even) {
        height: 300px;
    }

    img {

        width: 290px;
        height: 350px;

        object-fit: cover;

    }

`

export default GalleryContainer