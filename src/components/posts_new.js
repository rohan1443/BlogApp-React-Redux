import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { createPost } from '../actions';
import { connect } from 'react-redux';

class PostNew extends Component {
  renderField(field) {
    const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
        {field.meta.touched ? field.meta.error : ""}
      </div>
      </div>
    )
  }


  formSubmit(values) {
    //need to create an action to post the values to the server
    
    this.props.createPost(values, () => {
      this.props.history.push('/')
    })
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.formSubmit.bind(this))}>
          <Field
            label="Title"
            name="title"
            component={this.renderField}
          >
          </Field>
          <Field
            label="Categories"
            name="categories"
            component={this.renderField}
          >
          </Field>
          <Field
            label="Post Content"
            name="content"
            component={this.renderField}
          >
          </Field>
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
      </div>
    )
  }
}

function validate(values){
//console.log(values) ==> {tiltle:'', categories:'', content:''}
const error = {};

//Validate the inputs from the values
if(!values.title) {
  error.title = "Please enter a title!"  
}
if(!values.categories){
  error.categories = "enter some category"
}
if(!values.content){
  error.content = "enter some category"
}

return error;
}

export default reduxForm({
  validate,
  form: 'PostNewForm'
})(
  connect(null, {createPost})(PostNew)
)