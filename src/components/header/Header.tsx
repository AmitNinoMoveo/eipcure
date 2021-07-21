import React from 'react'

type Props = {
    
}

const Header: React.FC<Props> = ({children}) => {
    return (
        <header>
            <div className="menu"></div>
            <div className="company-logos"></div>
            <nav>{children}</nav>
        </header>
    )
}

export default Header
