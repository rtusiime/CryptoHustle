import React from 'react';
import './SideNav.css';
import CryptoScam from "./CryptoScam";

const SideNav = React.memo(() => {
    return (
        <div className='sidenav'>
            <h1>Crypto Scams</h1>
            <CryptoScam />
        </div>
    );
})

export default SideNav;
