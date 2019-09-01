import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./nav/NavBar/Header";
import SubjectCreate from "./subject/SubjectCreate";
import SubjectDelete from "./subject/SubjectDelete";
import SubjectEdit from "./subject/SubjectEdit";
import SubjectList from "./subject/SubjectList";
import SubjectShow from "./subject/SubjectShow";
import HomePage from "./Home/HomePage";
import SubjectDetailedPage from "./subject/SubjectDetail/SubjectDetailedPage";
import PeopleDashboard from "./user/PeopleDashboard/PeopleDashboard";
import SettingsDashboard from "./user/Settings/SettingsDashboard";
import UserDetailedPage from "./user/UserDetailed/UserDetailedPage";
const App = () => {
  return (
    <React.Fragment>
      <Route path='/' exact component={HomePage} />
      <Route
        path='/(.+)'
        render={() => (
          <div className='ui container'>
            <Header />
            <Switch>
              <Route path='/subjects' component={SubjectList} />
              <Route path='/subjects/:id' component={SubjectDetailedPage} />
              <Route path='/subjects/new' exact component={SubjectCreate} />
              <Route path='/subjects/edit' exact component={SubjectEdit} />
              <Route path='/subjects/delete' exact component={SubjectDelete} />
              <Route path='/subjects/show' exact component={SubjectShow} />
              <Route path='/people' component={PeopleDashboard} />
              <Route path='/profile/:id' component={UserDetailedPage} />
              <Route path='/Settings' component={SettingsDashboard} />
            </Switch>
          </div>
        )}
      />
    </React.Fragment>
  );
};

export default App;
