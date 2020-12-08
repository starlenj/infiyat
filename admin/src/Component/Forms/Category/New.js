import { Component, React } from "react";
import { Field, reduxForm } from "redux-form";
import { toast } from "react-toastify";
class CategoryNewForm extends Component {
  Valid = (v) => {
    if (!v || v !== "") {
      return "Bu Alan Zorunludur";
    }
    return undefined;
  };
  render() {
    const Input = ({ input, meta }) => (
      <div>
        <input {...input} className="form-control" />
        {meta.touched && meta.error && (
          <span style={{ color: "red", fontWeight: "bold", fontSize: 14 }}>
            {meta.error}
          </span>
        )}
      </div>
    );
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">Adı :</label>
          <Field
            name="Name"
            component={Input}
            className="form-control"
            type="text"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Kaydet
        </button>
        <br />
      </form>
    );
  }
}

CategoryNewForm = reduxForm({
  // a unique name for the form
  form: "Category-New-Form",
})(CategoryNewForm);
export default CategoryNewForm;
