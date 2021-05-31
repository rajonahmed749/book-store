import React from 'react';
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent ,Menu, MenuItem} from 'react-pro-sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSteamSquare } from '@fortawesome/free-brands-svg-icons';
import { faEdit, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import "./Sidebar.css"
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <ProSidebar className="sidebar-height mt-5 bg-secondary bg-gradient rounded-pill ">
            <SidebarHeader>
                <h3 className="text-center">BOOK STORE</h3>
            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape="square">               
                    <MenuItem  className="unlist pe-2" icon={<FontAwesomeIcon icon={faSteamSquare} color="green"  size="2x" />}>
                        <span className="text-light"> Manage Books</span> 
                        {/* <Link to={`${url}/manage-books`} /> */}
                    </MenuItem>
                    <MenuItem className="unlist" icon={<FontAwesomeIcon icon={faPlusSquare} size="2x" />}>
                        Add Books
                        {/* <Link to={`${url}/add-books`} /> */}
                     </MenuItem>
                        <MenuItem className="unlist" icon={<FontAwesomeIcon icon={faEdit} size="2x" />}>
                            Edit Books
                            {/* <Link to={`${url}/edit-books/noValidId`} /> */}
                        </MenuItem>
                </Menu>
            </SidebarContent>
            <SidebarFooter>
                <p className="text-center">© 2021  All Rights Reserved</p>
                {/* <Button as={Link} to="/" variant="outline-light">Back to Home</Button> */}
            </SidebarFooter>
        </ProSidebar>
    );
};

export default Sidebar;