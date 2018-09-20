/*
 * Copyright (c) 2018. https://ashishsantikari.info
 */

import React, {PropTypes} from 'react';
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const CourseForm = ({course, allAuthors, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Manage Course</h1>
      <TextInput
        label="Title"
        onChange={onChange}
        name="title"
        error={errors.title}
        value={course.title}/>

      <SelectInput
        label="Author"
        defaultOption="Select Author"
        value={course.authorId}
        name="authorId"
        onChange={onChange}
        options={allAuthors}/>

      <TextInput
        label="Category"
        onChange={onChange}
        error={errors.category}
        value={course.category}
        name="category"/>

      <TextInput
        label="length"
        onChange={onChange}
        error={errors.length}
        value={course.length}
        name="length"/>

      <input
        type="submit"
        onClick={onSave}
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"/>
    </form>
  );
};

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  allAuthors: PropTypes.array,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default CourseForm;
