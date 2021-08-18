import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/Header.css';


const MainView = () => {
    return(
        <div className="headerScreenContainer">
            <div class="fixed-header">
                <div class="container">
                    <nav>
                    <NavLink className="textLink" to="/" activeClassName="textLinkActive">Poll Simulator</NavLink>
                    <NavLink className="textLink" to="/become-candidate">Become Candidate</NavLink>
                    <NavLink className="textLink" to="/cast-vote">Cast Vote</NavLink>
                    <NavLink className="textLink" to="election-result">Election Result</NavLink>
                    </nav>
                </div>
            </div>
            <div className="pageLayout">
                <h1>Welcome to Poll Simulator</h1>
            </div>
        </div>
    )
};

export default MainView;