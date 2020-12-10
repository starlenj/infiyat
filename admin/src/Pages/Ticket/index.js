import { Component } from "react";
import { connect } from "react-redux";
import DataTableComponent from "../../Component/DataTable";
import { List, Post, Put, Delete } from "../../Helper/Service";
import { SetSelectData } from "../../Redux/Action/DataTable";
import EditForm from "../../Component/Forms/Pages/Edit";
import NewForm from "../../Component/Forms/Pages/New";
import { toast } from "react-toastify";
import moment from "moment";
class Ticket extends Component {
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
    console.log(this.props.DataTableReducer.SelectData);
    const response = await Post("SetTicketStatus", {
      id: this.props.DataTableReducer.SelectData._id,
      Status: 3,
    });
    if (response) {
      toast.success("İşlem Başarılı");
      setTimeout(() => window.location.reload(), 2000);
    }
  }
  async HandleSubmit(value) {
    let response = await Put(
      "TicketHeader",
      value,
      this.props.DataTableReducer.SelectData._id
    );
    if (response) {
      toast.success("İşlem Başarılı");
      setTimeout(() => window.location.reload(), 2000);
    }
  }

  async HandleUpdate(value) {
    let response = await Post("TicketHeader", value);
    if (response) {
      toast.success("İşlem Başarılı");
      setTimeout(() => window.location.reload(), 2000);
    }
  }
  async componentDidMount() {
    let TicketHeaderData = await List("TicketHeader");
    const columns = [
      {
        name: "Başlık",
        selector: "Title",
        sortable: true,
      },
      {
        name: "Gönderen",
        selector: "UserName",
        sortable: true,
      },
      {
        name: "Tarih",
        selector: "createdAt",
        sortable: true,
        format: (row, index) => {
          return moment(row.createdAt).format("DD.MM.YYYY HH:MM:SS ");
        },
      },
      {
        name: "Durumu",
        selector: "Status",
        sortable: true,
        format: (row, index) => {
          if (row.Status === 1) {
            return (
              <span style={{ color: "blue", fontweight: "bold" }}>
                kayıt kapandı
              </span>
            );
          } else if (row.Status === 2) {
            return (
              <span style={{ color: "green", fontweight: "bold" }}>
                kayıt kapandı
              </span>
            );
          } else if (row.Status === 3) {
            return (
              <span style={{ color: "red", fontWeight: "bold" }}>
                Kayıt Kapandı
              </span>
            );
          } else {
            return "İşlem Bekleniyor";
          }
        },
      },
    ];
    this.setState({ Data: TicketHeaderData, Columns: columns });
  }
  render() {
    const { SelectData } = this.props.DataTableReducer;
    const NewModal = () => <NewForm onSubmit={this.HandleUpdate} />;
    const UpdateModal = () => (
      <div className="column">
        {this.state.EditStatsus === true && (
          <div className="form-group">
            <label>Başlık : </label>
            <input
              type="text"
              className="form-control"
              name="Name"
              value={SelectData.Title}
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
                  Cevapla
                </button>
              </div>
            </div>
            <div className="row">
              <div className="form-group">
                <button className="btn btn-danger" onClick={this.HandleDelete}>
                  Kaydı Kapat
                </button>
              </div>
            </div>
          </div>
        )}
        {this.state.EditStatsus === false && (
          <EditForm
            onSubmit={this.HandleSubmit}
            FormValues={this.props.DataTableReducer.SelectData}
          />
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
          NewDataTitle={" "}
          UpdateDataTitle={""}
          NewModal={<NewModal />}
          columns={this.state.Columns}
          session={this.props.session}
          data={this.state.Data}
          title={"Ticket Listesi"}
          filterField={"UserName"}
          UpdateModal={<UpdateModal />}
          UpdateAction={this.UpdateUser}
          UpdateData={true}
          DeleteData={false}
          NewData={false}
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
export default connect(mapStateToProps, mapDispatchToProps)(Ticket);
