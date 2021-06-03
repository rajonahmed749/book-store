import React from 'react';
import { Link } from 'react-router-dom';

const Developing = () => {
    return (
        <div>
            <div className="mt-5 text-center">
                <div className="mt-5">
                    <h4>This page is under developing</h4>
                        <Link to="/admin"> Go to Dashboard</Link>
                </div>
            </div>
            
        </div>
    );
};

export default Developing;