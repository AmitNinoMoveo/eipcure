import React from 'react'
import { mockNavFooterItems } from '../../utils/constants/mockData/mockNavData';
import NavLinks from '../general/nav-links/NavLinks';
import './footer.scss';

const FooterComponent = () => {
    return (
        <footer>
            <NavLinks navItems={mockNavFooterItems} />
        </footer>
    )
}

export default FooterComponent;