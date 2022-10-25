import { useState } from "react"
import { Link, useLocation, Location } from "react-router-dom"
import './header.sass'

const pageNavs: string[] = [
    'HOME', '/',
    'ARTISTS', '/artists',
    'GALLERY', '/gallery'
]

const Header = (): JSX.Element => {

    const [pageWasChanged, setPageWasChanged] = useState()

    const location: Location = useLocation()
    const getActualPage: string[] = location.pathname.split('/')
    const actualPage: string = getActualPage[1]
    const navSpans: JSX.Element[] = []

    let color = 
        actualPage === 'gallery' ?
            'black'
            :
            '#e0d9a5'

    if(getActualPage.length > 2) {
        color = 'black'
    }

    const handleClick = (): void => {

    }

    for (let i = 0; i < pageNavs.length - 1; i += 2) {
        navSpans.push(
            <span key={pageNavs[i]}>
                <Link
                    to={pageNavs[i + 1]}
                    style={{ color: color }}
                    onClick={handleClick}
                >{pageNavs[i]}</Link>
            </span>
        )
    }

    return (
        <header>
            <div
                style={{
                    borderBottom: `1px solid ${color}`
                }}>
                <nav>
                    {navSpans.map((item: any) => {
                        return item
                    })}
                </nav>
                <span>
                    ARPEGGIO
                </span>
            </div>
        </header>
    )
}

export default Header