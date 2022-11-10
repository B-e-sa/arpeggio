import './menu.sass'

const Menu = ({props}: any): any => {

    return (
        <div id="line-container">
            <ul id="names-container">
                {props[0].map((item: any) => {
                  
                    return (
                        <li>
                            <a
                                onClick={props}
                                key={item[0].props?.children}
                                href={`#${item[0].props?.children.replaceAll(' ', '_')}`}
                            >
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