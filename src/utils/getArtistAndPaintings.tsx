import art from './art.json'

const getArtistsAndPaintings = (onclick: any = () => "") => {

    let lazyLoad = 0

    const artist: any = []

    for (let i = 0; i < art.artists.length; i++) {

        /*
        * for each artist, an paragraph with his name
        * will be pushed with an array after, that will be
        * used to push his artworks on the loop below
        */
        artist.push([
            <p>{art.artists[i].nickName.toUpperCase()}</p>, []
        ])

        // pushes 3 artist artworks to his respective array
        for (let c = 0; c < art.artists[i].artWorks.length - 2; c++) {
            lazyLoad++
            artist[i][1].push(
                <img
                    key={art.artists[i].artWorks[c].name}
                    loading={lazyLoad > 3 ? 'lazy' : undefined}
                    onClick={onclick}
                    draggable="false"
                    src={art.artists[i].artWorks[c].image}
                    alt={art.artists[i].artWorks[c].name}
                />
            )
        }
    }

    return artist
}

export default getArtistsAndPaintings