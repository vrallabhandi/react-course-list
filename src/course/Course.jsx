import React from "react";
import "./Course.css";

function Course(props) {
  const { name, description, duration, publishDate } = props.course;
  return (
    <div className="course-card">
      <div className="course-info">
        <div className="title">
          {name}
          <div className="course-meta">
            <span>
              <i className="fa fa-clock-o" aria-hidden="true"></i>
              {duration}
            </span>
            <span>
              <i className="fa fa-calendar" aria-hidden="true"></i>
              {publishDate}
            </span>
          </div>
        </div>
        <div className="description">{description}</div>
      </div>
      <div className="actions">
        <button className="action-button">
          <i className="fa fa-pencil" aria-hidden="true"></i>
          Edit
        </button>
        <button className="action-button">
          <i className="fa fa-trash" aria-hidden="true"></i>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Course;
