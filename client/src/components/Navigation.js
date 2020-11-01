import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import M from 'materialize-css';
import { Link } from 'react-router-dom';

const Navigation = () => {

    useEffect(() => {
        let sidenav = document.querySelector('#slide-out');
        M.Sidenav.init(sidenav, {});
    });

    return (
        <nav className="grey darken-3">
            <div className="nav-wrapper container">
                <a href="#!" className="brand-logo center">Favors</a>
                <a href="#" data-target="slide-out" className="sidenav-trigger show-on-large">
                    <FontAwesomeIcon icon="bars" />
                </a>
                <ul className="sidenav" id="slide-out">
                    <li>
                        <Link to="/favors">Public Favors</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <a href="/auth/logout">Logout</a>
                    </li>
                </ul>
            </div>
        </nav>
    );

};

export default Navigation;