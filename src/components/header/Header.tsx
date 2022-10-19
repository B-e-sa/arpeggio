import { Link, useLocation, Location } from "react-router-dom"
import './header.sass'

const pageNavs: string[] = [
    'HOME', '/',
    'ARTISTS', '/artists',
    'GALLERY', '/gallery',
    'Arpeggio', '/'
]

const Header = (): JSX.Element => {

    const location: Location = useLocation()
    const getActualPage: string[] = location.pathname.split('/')
    const actualPage: string = getActualPage[1]
    const navSpans: JSX.Element[] = []

    const color =
        actualPage === 'gallery' ?
            'black'
            :
            '#e0d9a5'

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
                    {
                        navSpans.map((item: any) => {
                            return item
                        })
                    }
                </nav>
            </div>
        </header>
    )
}

export default Header