import { React, Component } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { SetSocketId } from "../../reducer/actions/socket_action";
import { connect } from "react-redux";
class Home extends Component {
  componentDidMount() {
    this.props.socket.on("your id", (data) => this.props.SetSocketId(data));
    this.props.socket.on("toplam_kullanici", (data) => console.log(data));
  }
  render() {
    return (
      <div>
        <div>
          <Header socket={this.props.socket} session={this.props.session} />{" "}
          <div
            class="container"
            style={{ marginBottom: 20, minHeight: 644 }}
            id="main_container"
          >
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="/">Anasayfa</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Özet Sayfam
              </li>
              </ol>
            </nav>

            <div class="container">
              <div class="row">
                <div class="col-md-3 ">
                  <div class="list-group ">
                    <a
                      href="#"
                      class="list-group-item list-group-item-action"
                      data-toggle="collapse"
                      data-target="#hizli_menu"
                      aria-expanded="true"
                      aria-controls="hizli_menu"
                    >
                      Hızlı Menü{" "}
                      <i
                        class="fa fas fa-sort-down"
                        style={{ float: "right" }}
                      ></i>
                    </a>
                    <div class="collapse show" id="hizli_menu">
                      <a
                        href="http://localhost:3000/Profile"
                        class="list-group-item list-group-item-action active"
                      >
                        Özet Sayfam
                    </a>
                      <a
                        href="http://localhost:3000/Kredi"
                        class="list-group-item list-group-item-action"
                      >
                        Kredi Yükle
                    </a>
                      <a
                        href="/Siparislerim"
                        class="list-group-item list-group-item-action"
                      >
                        Siparişlerim
                    </a>
                      <a
                        href="https://www.infiyatin.com/User/adreslerim"
                        class="list-group-item list-group-item-action"
                      >
                        Adreslerim
                    </a>
                      <a
                        href="https://www.infiyatin.com/User/profilim"
                        class="list-group-item list-group-item-action"
                      >
                        Profilim
                    </a>
                      <a
                        href="https://www.infiyatin.com/Support/"
                        class="list-group-item list-group-item-action"
                      >
                        Destek Taleplerim
                    </a>
                      <a
                        href="https://www.infiyatin.com/User/all_process"
                        class="list-group-item list-group-item-action"
                      >
                        Hareket Geçmişi
                    </a>
                      <a
                        href="https://www.infiyatin.com/Login/logout"
                        class="list-group-item list-group-item-action"
                      >
                        Çıkış
                    </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-9">
                  <div class="row">
                    <div class="card col-md-4">
                      <div class="card-body">
                        <h5 class="card-title">Kasanızdaki tutar:</h5>
                        <p class="card-text"> TL</p>
                        <a
                          href="/Kredi"
                          class="btn btn-success"
                        >
                          Kredi yükle
                      </a>
                      </div>
                    </div>

                    <div class="card col-md-4">
                      <div class="card-body">
                        <h5 class="card-title">Siparişleriniz</h5>
                      </div>{" "}
                      <p class="card-text">
                        Satın almak istediğiniz bir ürün bulunmuyor.
                    </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ Socketid }) => {
  return {
    Socketid,
  };
};
const mapDispatchToProps = {
  SetSocketId,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
