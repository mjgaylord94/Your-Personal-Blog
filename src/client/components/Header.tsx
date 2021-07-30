import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <>
            <div id="header-container" className="row">
                <div className="col-md-3"></div>
                <h1 id="header-title" className="col-md-6">
                    Your Personal Blog (For Steven Universe Songs)
                </h1>
                <div className="col-md-3"></div>
                <div id="link-container" className="row d-flex justify-content-center">
                    <Link to={'/'} id="home-button" className="btn btn-dark col-md-4 m-2">Home</Link>
                    <Link to={'/new'} id="new-button" className="btn btn-dark col-md-4 m-2">New Post</Link>
                </div>
            </div>
        </>
    )
};

export default Header;