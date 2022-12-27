import { Link } from "react-router-dom"
import './nav.sass'

interface IColor {
    color: string
}

const Nav = ({ color }: IColor) => {

    const pageNavs: string[][] = [
        ['HOME', '/',],
        ['ARTISTS', '/artists'],
        ['GALLERY', '/gallery']
    ]

    console.log(color)

    return (
        <nav>
            {pageNavs.map(([name, link]) => {
                return (
                    <span key={name}>
                        <Link to={link} style={{ color: color }}>
                            {name}
                        </Link>
                    </span>);
            })}
        </nav>
    )
}

export default Nav