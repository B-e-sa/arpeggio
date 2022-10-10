import { useEffect, useState } from "react"
import HeaderContainer from "./Header.style"
import { Link, Outlet, useLocation, Location } from "react-router-dom"

const pageNavs: string[] = [
    'HOME', '/',
    'ARTISTS', '/artists',
    'GALLERY', '/gallery'
]

const navSpans: JSX.Element[] = []

for (let i = 0; i < pageNavs.length - 1; i += 2) {
    navSpans.push(
        <span key={pageNavs[i]}>
            <Link to={pageNavs[i + 1]} >{pageNavs[i]}</Link>
        </span>
    )
}

const Header = (): JSX.Element => {

    const location: Location = useLocation()

    const getActualPage: string[] = location.pathname.split('/')

    const actualPage: string = getActualPage[1]

    useEffect(() => {
        
    }, [])

    return (
        <HeaderContainer page={actualPage}>
            <header>
                <nav>
                    {
                        navSpans.map((item: any) => {
                            return item
                        })
                    }
                </nav>
                <Outlet />
            </header>
        </HeaderContainer>
    )
}

export default Header