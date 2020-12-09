import { Component } from "react";
import DataTableComponent from "../../Component/DataTable";
import { List, Post, Put, Delete, Get } from "../../Helper/Service";

export default class Odeme extends Component {
  state = {
    Data: [],
  };
  async componentDidMount() {
    await this.GetDataTable();

    const Columns = [
      {
        name: "Tutar",
        selector: "Bakiye",
        sortable: true,
      },
      {
        name: "Method",
        selector: "HareketType",
        sortable: true,
      },
      {
        name: "Zaman",
        selector: "Date",
        sortable: true,
      },
      {
        name: "Durumu",
        selector: "Status",
        sortable: true,
      },
    ];
    this.setState({ Columns });
  }
  async GetDataTable() {
    const UserHareketData = await List("UserHareket");
    this.setState({ Data: UserHareketData });
  }
  render() {
    return (
      <div>
        <DataTableComponent
          NewDataTitle={"Yeni Ürün Tanımı"}
          UpdateDataTitle={"Ürün Düzenle"}
          NewModal={() => <div></div>}
          NewData={false}
          columns={this.state.Columns}
          session={this.props.session}
          data={this.state.Data}
          title={"Ödeme Listesi"}
          filterField={"ProductName"}
          UpdateModal={() => <div></div>}
          UpdateAction={this.UpdateUser}
          UpdateData={false}
          DeleteData={false}
        />
      </div>
    );
  }
}
