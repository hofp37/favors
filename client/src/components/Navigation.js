import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import M from 'materialize-css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { withRouter } from 'react-router';

const Navigation = (props) => {

    const handleLogout = e => {
        e.preventDefault();
        props.setIsAuthenticated(false);
        props.history.push('/');
    };

    useEffect(() => {
        let sidenav = document.querySelector('#slide-out');
        M.Sidenav.init(sidenav, {});
    });

    return (
        <Router>
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
                            <a href="#" className="sidenav-close" onClick={e => handleLogout(e)}>Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </Router>
    );
};

export default withRouter(Navigation);