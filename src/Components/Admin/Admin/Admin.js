import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import AddBooks from '../AddBooks/AddBooks';
import Developing from '../Developing';
import MangeBooks from '../MangeBooks/MangeBooks';
import Sidebar from '../Sidebar/Sidebar';

const Admin = () => {
  const { path } = useRouteMatch()
  return (
    <div className="row">
      <div className="col-md-3">
        <Sidebar />
      </div>
      <div className="col-md-9">
        <Switch>
          <Route path={`${path}/manage-books`}>
            <Developing />
          </Route>
          <Route path={`${path}/add-books`}>
            <AddBooks />
          </Route>
          <Route path={`${path}/edit-books/:editId`}>
            <Developing />
          </Route>
          <Route exact path={`${path}`}>
            <AddBooks/>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Admin;