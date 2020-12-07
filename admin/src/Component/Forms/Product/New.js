import { Component, React } from "react";
import { Field, reduxForm } from "redux-form";
import { List } from "../../../Helper/Service";
class ProductNewForm extends Component {
  state = { Category: [] };
  async componentDidMount() {
    let Category = await List("Category");
    this.setState({ Category });
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="form-group">
          <Field name="CategoryId" className="form-control" component="select">
            <option>--Lütfen Kategori Seçiniz--</option>
            {this.state.Category.length > 0 &&
              this.state.Category.map((Category) => (
                <option value={Category._id}>{Category.Name}</option>
              ))}
          </Field>
        </div>
        <div className="form-group">
          <label htmlFor="firstName">Adı :</label>
          <Field
            name="Name"
            component="input"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">Fiyat :</label>
          <Field
            name="Price"
            component="input"
            className="form-control"
            type="number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">Ürün Görseli :</label>
          <Field
            name="Picture"
            component="input"
            className="form-control"
            type="file"
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">Açıklama :</label>
          <Field
            name="Info"
            component="input"
            className="form-control"
            type="textarea"
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

ProductNewForm = reduxForm({
  // a unique name for the form
  form: "Category-New-Form",
})(ProductNewForm);
export default ProductNewForm;
