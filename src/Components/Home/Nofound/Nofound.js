import React from 'react';
import { Link } from 'react-router-dom';

const Nofound = () => {
    return (
        <div>
            <div className="ms-auto text-center mt-5">
                <span className="fs-3 text-danger fw-bold ">404! </span>
                <h5>Page not found</h5>
                 <Link to="/"><button className="btn btn-info border-info mt-2"> Go Back</button></Link>
            </div>
        </div>
    );
};

export default Nofound;