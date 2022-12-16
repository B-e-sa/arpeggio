import { Link, useLocation } from "react-router-dom"
import './fof.sass'

const Fof = () => {

    const location = useLocation()

    return (
        <div id="fof-container">
            <div>
                <h1>404</h1>
                <p><b>Page not found</b></p>
                <p>
                    The requested URL {location.pathname} was not found on this server
                </p>
            </div>
            <div>
                <p>You can go to:</p>
                <nav>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/artists'}>Artists</Link>
                    <Link to={'/gallery'}>Gallery</Link>
                </nav>
            </div>
        </div>
    )
}

export default Fof