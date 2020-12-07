import { Component } from "react";
import { connect } from "react-redux";
import DataTableComponent from "../../Component/DataTable";
import { List, Post, Put, Delete, Get } from "../../Helper/Service";
import { SetSelectData } from "../../Redux/Action/DataTable";
import EditForm from "../../Component/Forms/Product/Edit";
import NewForm from "../../Component/Forms/Product/New";
import { toast } from "react-toastify";

class Product extends Component {
  state = {
    Data: [],
    Columns: [],
    SelectUser: [],
    UpdateStatus: false,
    DeleteStatus: false,
    EditStatsus: true,
  };
  constructor(props) {
    super(props);
    this.HandleInput = this.HandleInput.bind(this);
    this.HandleSubmit = this.HandleSubmit.bind(this);
    this.HandleDelete = this.HandleDelete.bind(this);
  }
  HandleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  async HandleDelete() {
    const response = await Delete(
      "Product",
      this.props.DataTableReducer.SelectData._id
    );
    if (response) {
      toast.success("İşlem Başarılı");
      setTimeout(() => window.location.reload(), 2000);
    }
  }
  async HandleSubmit(value) {
    let response = await Put(
      "Product",
      value,
      this.props.DataTableReducer.SelectData._id
    );
    if (response) {
      toast.success("İşlem Başarılı");
      setTimeout(() => window.location.reload(), 2000);
    }
  }

  async HandleUpdate(value) {
    let response = await Post("Product", value);
    if (response) {
      toast.success("İşlem Başarılı");
      setTimeout(() => window.location.reload(), 2000);
    }
  }
  async componentDidMount() {
    let ProductData = await List("Product");
    let ProductFilterData = [];
    ProductData.map(async (Product) => {
      let response = await Get("Category", Product.CategoryId);
      ProductFilterData.push({
        ...Product,
        Category: response.Name,
      });
    });
    let Category = await List("Category");
    let UserData = [];
    const columns = [
      {
        name: "Adı",
        selector: "Name",
        sortable: true,
      },
      {
        name: "Kategori",
        selector: "Category",
        sortable: true,
      },
      {
        name: "Fiyatı",
        selector: "Price",
        sortable: true,
      },
      {
        name: "Durumu",
        selector: "Status",
        sortable: true,
      },
    ];

    this.setState({ Data: UserData, Columns: columns });
  }
  render() {
    const { SelectData } = this.props.DataTableReducer;
    const NewModal = () => <NewForm onSubmit={this.HandleUpdate} />;
    const UpdateModal = () => (
      <div className="column">
        {this.state.EditStatsus === true && (
          <div className="form-group">
            <label>Name : </label>
            <input
              type="text"
              className="form-control"
              name="Name"
              value={SelectData.Name}
              onChange={this.HandleInput}
              readOnly={true}
            />
          </div>
        )}
        {this.state.EditStatsus === true && (
          <div>
            <div className="row">
              <div className="form-group">
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    this.setState({
                      EditStatsus: false,
                    })
                  }
                >
                  Düzenle
                </button>
              </div>
            </div>
            <div className="row">
              <div className="form-group">
                <button className="btn btn-danger" onClick={this.HandleDelete}>
                  Sil
                </button>
              </div>
            </div>
          </div>
        )}
        {this.state.EditStatsus === false && (
          <EditForm onSubmit={this.HandleSubmit} />
        )}
        {this.state.EditStatsus === false && (
          <div>
            <br />
            <div className="form-group">
              <button
                className="btn btn-danger"
                onClick={() => this.setState({ EditStatsus: true })}
              >
                İptal
              </button>
            </div>
          </div>
        )}
      </div>
    );
    return (
      <div>
        <DataTableComponent
          NewDataTitle={"Yeni Ürün Tanımı"}
          UpdateDataTitle={"Ürün Düzenle"}
          NewModal={<NewModal />}
          columns={this.state.Columns}
          session={this.props.session}
          data={this.state.Data}
          title={"Ürün Listesi"}
          filterField={"Name"}
          UpdateModal={<UpdateModal />}
          UpdateAction={this.UpdateUser}
        />
      </div>
    );
  }
}
const mapStateToProps = ({ DataTableReducer }) => {
  return {
    DataTableReducer,
  };
};
const mapDispatchToProps = {
  SetSelectData,
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);
