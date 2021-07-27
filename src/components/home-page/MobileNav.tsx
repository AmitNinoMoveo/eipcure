import '../../assets/styles/components/home-page/nav-mobile.scss';
import React from 'react'
import { mockHomePageMobileNavItems } from '../../utils/constants/navData';
import NavLinks from '../general/nav-links/NavLinks';

const MobileNavComponent = () => {
    return (
        <section className="home-mobile-nav">
            <NavLinks navItems={mockHomePageMobileNavItems} />
        </section>
    )
}

export default MobileNavComponent;
