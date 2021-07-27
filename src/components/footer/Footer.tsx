import '../../assets/styles/components/footer.scss';
import React from 'react'
import { mockNavFooterItems } from '../../utils/constants/navData';
import NavLinks from '../general/nav-links/NavLinks';

const FooterComponent = () => {
    return (
        <footer>
            <NavLinks navItems={mockNavFooterItems} />
        </footer>
    )
}

export default FooterComponent;