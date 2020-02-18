import React, { Component } from 'react';
import Course from '../course/Course';

class Courses extends Component {
  render() {
    return (
      <div>
        {this.props.courses.map(course => (
          <Course course={course} key={course.id} />
        ))}
      </div>
    );
  }
}

export default Courses;
