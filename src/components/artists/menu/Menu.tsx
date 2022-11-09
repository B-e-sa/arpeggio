import './menu.sass'

const Menu = ({props}: any, isActive: boolean): JSX.Element => {
    return (
        <div id="line-container">
            <ul id="names-container">
                {props.map((item: any) => {
                    return (
                        <li>
                            <a href={`#${item[0].props?.children.replaceAll(' ', '_')}`}>
                                {item[0].props?.children}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Menu