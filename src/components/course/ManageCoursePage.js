/*
 * Copyright (c) 2018. https://ashishsantikari.info
 */

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from "./CourseForm";
import toastr from 'toastr';

class ManageCoursePage extends React.Component {

  constructor(props, context) {
    super(props, context);

    //default state
    this.state = {
      course: Object.assign({}, props.course),
      errors: {},
      saving: false
    };

    //binding the methods to component
    this.saveCourse = this.saveCourse.bind(this);
    this.updateCourseState = this.updateCourseState.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // check to see if props has changed
    if (this.props.course.id !== nextProps.course.id) {
      this.setState({course: Object.assign({}, nextProps.course)});
    }
  }

  //updates the course state on form change events
  updateCourseState(event) {
    const field = event.target.name;
    let course = Object.assign({}, this.state.course);
    course[field] = event.target.value;
    this.setState({course: course});
  }

  // use to save the course
  saveCourse(event) {
    event.preventDefault();
    this.setState({saving: true});
    this.props.actions.saveCourse(this.state.course).then(this.redirect).catch(err => {
      toastr.error(err);
      this.setState({saving: false});
    });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Course saved');
    this.context.router.push('/courses');
  }

  render() {
    return (
      <CourseForm
        allAuthors={this.props.authors}
        errors={this.state.errors}
        course={this.state.course}
        onSave={this.saveCourse}
        onChange={this.updateCourseState}
        saving={this.state.saving}
      />
    );
  }

}


//prop types validation
ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};


//context types settings (routes being passed)
ManageCoursePage.contextTypes = {
  router: PropTypes.object
};


//to get course by id from list of course, returns null if not found
function getCourseById(courses, courseId) {
  let course = courses.filter(courses => courses.id === courseId);
  if (course) return course[0];
  return null;
}


function mapStateToProps(state, ownProps) {

  const courseId = ownProps.params.id;

  let course = {
    id: '',
    title: '',
    watchHref: '',
    authorId: '',
    length: '',
    category: ''
  };

  if (courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId);
  }


  const authorsFormattedForDropdown = state.authors.map(author => {
    return {
      text: `${author.firstName} ${author.lastName}`,
      value: author.id
    };
  });

  return {
    course: course,
    authors: authorsFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
