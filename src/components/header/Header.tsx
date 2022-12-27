import { Link, Location, useLocation } from "react-router-dom"
import './header.sass'

const pageNavs: string[] = [
    'HOME', '/',
    'ARTISTS', '/artists',
    'GALLERY', '/gallery'
]

const Header = (): JSX.Element => {

    const location: Location = useLocation()
    const getCurrentPage: string[] = location.pathname.split('/')
    const currentPage: string = getCurrentPage[1]
    const navSpans: JSX.Element[] = []

    let color = ''

    // if page has more than just one slash, like "/artist/:name"
    // or it is the gallery
    if (getCurrentPage.length > 2 || currentPage === 'gallery') {
        color = 'black'
    } else {
        color = '#e0d9a5'
    }

    for (let i = 0; i < pageNavs.length - 1; i += 2) {
        navSpans.push(
            <span key={pageNavs[i]}>
                <Link
                    to={pageNavs[i + 1]}
                    style={{ color: color }}
                > {pageNavs[i]}</Link>
            </span >
        )
    }

    return (
        <header>
                <div
                    style={{
                        borderBottom: `1px solid ${color}`,
                        backgroundColor:
                            currentPage === 'artists' && getCurrentPage.length === 2
                                ? '#90b0bb' : 'transparent',
                    }}>
                    <nav>
                        {navSpans.map((item: JSX.Element) => { return item })}
                    </nav>
                    <span>
                        <Link
                            to='/'
                            style={{ color: color }}>
                            ARPEGGIO
                        </Link>
                    </span>
                </div>
        </header>
    )
}

export default Header