import styled from 'styled-components'

const HomeContainer = styled.div`
    
    @import url('https://fonts.googleapis.com/css2?family=Alkalami&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Alkalami&family=Open+Sans:wght@300&display=swap');
    

    display: flex;
    width: 100vw;
    height: 150vh;

    main {
        width: 100vw;
        height: 97vh;
    }

    #presentation {
        padding: 0 50px 0 50px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    #presentation div:nth-child(1) {
        text-align: end;
        width: 400px;
        align-self: flex-end;
    }

    #presentation div:nth-child(2) p {
        width: 600px;
    }

    h1 {
        font-size: 24vw;
        font-family: 'Alkalami', serif;
    }

    p {
        font-family: 'Open Sans', sans-serif;
        font-size: 43pt;
    }

    background-image: url('../../src/assets/background.jpg');
    background-repeat: no-repeat;
    background-size: cover;

    color: #e0d9a5;

    max-width: 100%;

`

export default HomeContainer