import React from 'react';
import Navigation from './Navigation'

const DashboardPage = (props) => {
    return (
        <React.Fragment>
            <Navigation setIsAuthenticated={props.setIsAuthenticated} />
            <h1>Dashboard</h1>
        </React.Fragment>
    );
};

export default DashboardPage;