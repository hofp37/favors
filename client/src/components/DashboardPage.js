import React from 'react';
import Navigation from './Navigation'

const DashboardPage = (props) => {

    return (
        <React.Fragment>
            <Navigation handleLogout={props.handleLogout} />
            <h1>Dashboard</h1>
            <button onClick={props.handleLogout}>Logout</button>
        </React.Fragment>
    );
};

export default DashboardPage;