import React from 'react';
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent ,Menu, MenuItem} from 'react-pro-sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faPlusSquare,faEdit, faSignOutAlt, faCalendar, faGripHorizontal, faUsers ,faUserPlus, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import "./Sidebar.css"
import { Link, useRouteMatch } from 'react-router-dom';

const Sidebar = () => {
    const { url } = useRouteMatch()
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                <li>
                    <Link to={`${url}/manage-books`} className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Manage Books</span>
                    </Link>
                </li>
                <li>
                    <Link to={`${url}/add-books`} className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faPlusSquare} /> <span>Add Books</span> 
                    </Link>
                </li>
                <li>
                    <Link to={`${url}/edit-books/:editId`} className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faEdit} /> <span>Edits Books</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin" className="text-white text-decoration-none" >
                      <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" className="text-white text-decoration-none">
                    <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;