import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
                
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <Link to="/" class="nav-link">Home<span class="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Products" class="nav-link">Products</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link to="/Products" class="dropdown-item">Products 1</Link>
                                    <Link to="/Products" class="dropdown-item">Products 2</Link>
                                    <div class="dropdown-divider"></div>
                                    <Link to="/Products" class="dropdown-item">Products 3</Link>
                                </div>
                            </li>
                            <li class="nav-item">
                                <Link to="/Products" class="nav-link disabled">Products</Link>
                            </li>
                        </ul>
                        
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;