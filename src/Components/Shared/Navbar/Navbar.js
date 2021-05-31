import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
           <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">
                        <h2 className="siteLogo">BOOK STORE</h2>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <Link class="nav-link active me-4 fw-bold" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link fw-bold me-4" aria-current="page" href="#">Orders</a>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link me-4 fw-bold" aria-current="page" to="/admin">Admin</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link  me-4 fw-bold" aria-current="page" to="/login">Login</Link>
                        </li>
                    </ul>
             </div>
            </div>
            </nav>
        </div>
    )
}
export default Navbar;