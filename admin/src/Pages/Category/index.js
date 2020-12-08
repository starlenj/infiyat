import { Component } from "react";
import { connect } from "react-redux";
import DataTableComponent from "../../Component/DataTable";
import { List, Post, Put, Delete } from "../../Helper/Service";
import { SetSelectData } from "../../Redux/Action/DataTable";
import EditForm from "../../Component/Forms/Category/Edit";
import NewForm from "../../Component/Forms/Category/New";
import { toast } from "react-toastify";

class Category extends Component {
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
      "Category",
      this.props.DataTableReducer.SelectData._id
    );
    if (response) {
      toast.success("İşlem Başarılı");
      setTimeout(() => window.location.reload(), 2000);
    }
  }
  async HandleSubmit(value) {
    let response = await Put(
      "Category",
      value,
      this.props.DataTableReducer.SelectData._id
    );
    if (response) {
      toast.success("İşlem Başarılı");
      setTimeout(() => window.location.reload(), 2000);
    }
  }

  async HandleUpdate(value) {
    console.log(value);

    let response = await Post("Category", value);
    if (response) {
      toast.success("İşlem Başarılı");
      setTimeout(() => window.location.reload(), 2000);
    }
  }
  async componentDidMount() {
    let UserData = await List("Category");
    const columns = [
      {
        name: "Adı",
        selector: "Name",
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
          NewDataTitle={"Yeni Kategori Tanımı"}
          UpdateDataTitle={"Kategori Düzenle"}
          NewModal={<NewModal />}
          columns={this.state.Columns}
          session={this.props.session}
          data={this.state.Data}
          title={"Kategori Listesi"}
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
export default connect(mapStateToProps, mapDispatchToProps)(Category);
