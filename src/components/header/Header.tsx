import { Link } from "react-router-dom"
import getCurrentPage from "../../utils/getCurrentPage"
import Nav from "../Nav/Nav"
import './header.sass'

const Header = (): JSX.Element => {

    const currentPage = getCurrentPage()

    let color = ''

    // if page has more than just one slash, like "/artist/:name"
    // or it is the gallery
    currentPage.length > 2 || currentPage[1] === 'gallery'
        ? color = 'black' : color = '#e0d9a5'

    return (
        <header>
            <div
                style={{
                    borderBottom: `1px solid ${color}`,
                    backgroundColor:
                        currentPage[1] === 'artists' && getCurrentPage.length === 2
                            ? '#90b0bb' : 'transparent',
                }}>
                <Nav color={color} />
                <span>
                    <Link to='/' style={{ color: color }}>
                        ARPEGGIO
                    </Link>
                </span>
            </div>
        </header>
    )
}

export default Header