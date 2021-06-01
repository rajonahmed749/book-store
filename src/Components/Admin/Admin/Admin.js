import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import AddBooks from '../AddBooks/AddBooks';
import MangeBooks from '../MangeBooks/MangeBooks';
import Sidebar from '../Sidebar/Sidebar';

const Admin = () => {
    const { path } = useRouteMatch()
    return (
        <div className="row">
           <div className="col-md-3">
               <Sidebar/>            
           </div>
           <div className="col-md-9">
           <Switch>
            <Route path={`${path}/manage-books`}>
              <MangeBooks/>
            </Route>
            <Route path={`${path}/add-books`}>
              <AddBooks/>
            </Route>
            {/* <Route path={`${path}/edit-books/:editId`}>
              <EditBooks></EditBooks>
            </Route> */}
            <Route exact path={`${path}`}>
              <AddBooks></AddBooks>
            </Route>
          </Switch>
           </div>
            
        </div>
    );
};

export default Admin;