import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import './App.css';
import CourseListPage from './course-list-page/CourseListPage.jsx';
import NewCoursePage from './new-course-page/NewCoursePage.jsx';
import Header from './header/header.jsx';

function App() {
  const routing = (
    <Router>
      <Header />
      <div className="App">
        <Switch>
          <Route exact path="/" component={CourseListPage} />
          <Route path="/newCourse" component={NewCoursePage} />
        </Switch>
      </div>
    </Router>
  )
  return (
    <div>
      {routing}
    </div>
  );
}

export default App;
