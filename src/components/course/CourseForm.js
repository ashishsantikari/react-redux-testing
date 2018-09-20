import React, {PropTypes} from 'react';
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors}) => {
  return (
    <form>

      <TextInput
        label="Title"
        onChange={onChange}
        name="title"
        error={errors.title}
        value={course.title}/>

      <SelectInput
        label="Author"
        defaultOption="Select Author"
        name="authorId"
        onChange={onChange}
        options={allAuthors}/>

      <TextInput
        label="Category"
        onChange={onChange}
        error={errors.category}
        value={course.category}
        name="category "/>

      <TextInput
        label="length"
        onChange={onChange}
        error={errors.length}
        value={course.length}
        name="length "/>

      <input
        type="submit"
        onSubmit={onSave}
        disabled={loading}
        value={loading ? 'Saving...' : 'Save'}
        className="btn btn-primary"/>

    </form>
  );
};

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  allAuthors: PropTypes.array,
  onSave: PropTypes.func,
  onChange: PropTypes.func,
  loading: PropTypes.bool,
  errors: PropTypes.object
};

export default CourseForm;
