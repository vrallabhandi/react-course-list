import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Courses from '../courses/Courses';
import './CourseListPage.css';
import Course from '../course/Course';
import { connect } from 'react-redux';
import { addCourse } from '../_store/action-creators/courses';

class CourseListPage extends Component {
  constructor() {
    super();
    this.addNewCourse = this.addNewCourse.bind(this);
  }
  addNewCourse() {
    console.log('here');
    console.log(this.props);
    this.props.addCourse({
      id: 4,
      name: 'Video Course 4',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only
      five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with
      the release of Letraset sheets containing Lorem Ipsum passages, and
      more recently with desktop publishing software like Aldus PageMaker
      including versions of Lorem Ipsum.`,
      duration: '1h 48min',
      publishDate: '20 Aug, 2019'
    });
  }
  render() {
    return (
      <div>
        <div className="new-project">
          {/* <Link to="/newCourse"> */}
          <button className="action-button" onClick={this.addNewCourse}>
            <i className="fa fa-plus" aria-hidden="true"></i>
            New Course
          </button>
          {/* </Link> */}
        </div>
        <Courses courses={this.props.courses} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state, ownProps);
  return {
    courses: [...state.courses]
  };
};

const mapDispatchToProps = () => ({
  addCourse
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseListPage);
