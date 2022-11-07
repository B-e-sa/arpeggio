import art from './art.json'

const getSortedArtworksByDate = () => {
    const sortedArtworksByDate: string[][] = []

    for (let i = 0; i < art.artists.length; i++){
      for (let c = 0; c < art.artists[i].artWorks.length; c++) {
        sortedArtworksByDate.push([
          art.artists[i].artWorks[c].completedIn,
          art.artists[i].artWorks[c].image,
          art.artists[i].artWorks[c].name
        ])
      }
    }

    return sortedArtworksByDate.sort()
}

export default getSortedArtworksByDate