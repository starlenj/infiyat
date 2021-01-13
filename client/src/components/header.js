import { Component } from "react";
import { Post } from "../helper/service";
import { SetSocketId } from '../reducer/actions/socket_action'
import { GetBakiye } from '../reducer/actions/user_action'
import { connect } from 'react-redux';
import Login from "./Home/Header/Login";


class Header extends Component {
  state = { Session: [], Logged: false };
  constructor(props) {
    super(props);
  }
  async componentDidMount() {

    this.GetBakiye();
  }
  async GetBakiye() {
    let Session = await this.props.session
    if (Session.data.message !== "Token Geçersiz") {
      this.setState({ Logged: true, Session: Session.data.data.data[0] })
      var UserResponse = await Post("GetBakiye", { UserId: Session.data.data.data[0]._id });
      this.props.GetBakiye(UserResponse.data);
    }
  }
  render() {
    return (
      <div>
        <div id="my_sidebar" class="page-wrapper chiller-theme">
          <nav id="sidebar" class="sidebar-wrapper">
            <div class="sidebar-content">
              <div class="sidebar-brand">
                <a href="#">Hızlı Menü</a>
                <div id="close-sidebar">
                  <i class="fas fa-times"></i>
                </div>
              </div>
              <div class="sidebar-menu">
                <ul>
                  <li>
                    <a href="/" class="dropdown-item">
                      <span>Anasayfa</span>
                    </a>
                  </li>

                  <li>
                    <a href="Login" class="dropdown-item">
                      <span>Giriş Yap</span>
                    </a>
                  </li>
                  <li>
                    <a href="Davet/index.html" class="dropdown-item">
                      <span>Davet Et Kredi Kazan!</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div id="header_container">
          <div id="header" class="container">
            <div id="mobil_menu">
              <i class="material-icons">menu</i>
            </div>

            <div id="logom">
              <a href="/">
                <img
                  style={{ maxWidth: 180 }}
                  src="assets/logo.png"
                  alt="Logo"
                />
              </a>
            </div>

            <div id="logo_mobil" class="mobil_butonlar">
              <a href="Login/giris.html">
                <span id="mobil_kasa_text">
                  <img
                    src="assets/KasaIcon_mobil.png"
                    alt="Logo"
                    style={{ maxWidth: 20, maxHeight: 20, margin: 3 }}
                  />
                  Kasam:
                </span>
                <span class="buyuk">Giriş yap</span>
              </a>
            </div>
            {this.state.Logged === false ? (
              <Login />
            ) : (
                <div id="giris">
                  <li class="nav-item dropdown" id="ust_profil">
                    <a
                      href="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="true"
                    >
                      <div class="media align-items-center">
                        <div class="media-body">
                          <i class="material-icons">arrow_drop_down</i>

                          <div id="my_email">{this.state.Session.Email}</div>
                        </div>
                      </div>
                    </a>
                    <div
                      class="dropdown-menu dropdown-menu-arrow dropdown-menu-right "
                      x-placement="bottom-end"
                      style={{
                        position: "absolute",
                        transform: "translate3d(24px, 44px, 0px)",
                        top: 0,
                        left: 0,
                        willChange: "transform",
                      }}
                    >
                      <a
                        href="/Profile"
                        class="dropdown-item"
                      >
                        <span>Özet Sayfam</span>
                      </a>
                      <a
                        href="/Kredi"
                        class="dropdown-item"
                      >
                        <span>Kredi Yükle</span>
                      </a>
                      <a
                        href="/Siparislerim"
                        class="dropdown-item"
                        style={{ position: "relative" }}
                      >
                        <span>Siparişlerim </span>
                      </a>
                      <a
                        href="/Adreslerim"
                        class="dropdown-item"
                      >
                        <span>Adreslerim</span>
                      </a>
                      <a
                        href="https://www.infiyatin.com/User/profilim"
                        class="dropdown-item"
                      >
                        <span>Profilim</span>
                      </a>
                      <a
                        href="https://www.infiyatin.com/Support/"
                        class="dropdown-item"
                      >
                        <span>Destek</span>
                      </a>

                      <div class="dropdown-divider"></div>
                      <a href="/Logout" class="dropdown-item">
                        <span>Çıkış Yap</span>
                      </a>
                    </div>
                  </li>
                </div>
              )}

            <div id="kasa_alani">
              <div id="kasam">
                <img
                  src="/assets/KasaIcon.png"
                  alt="Logo"
                  height="50"
                  width="50"
                />
                kasam:
              </div>
              <div id="kasam_toplam">
                <span id="my_limit">{parseFloat(this.props.UserBakiye).toFixed(2)} </span>
                <span id="top_tl">TL</span>
                <i
                  class="fas fa-plus"
                  id="kredi_plus"
                  data-toggle="popover"
                  data-placement="top"
                  data-content="Önce üye girişi yapmalısınız."
                  data-original-title=""
                  title=""
                ></i>
                <span style={{ textAlign: "right" }}>
                  <div id="en_az">{parseFloat(this.props.UserBakiye / 0.05).toFixed(0)} kez son fiyat görebilirsiniz</div>
                </span>
              </div>
            </div>
          </div>

          <div id="top_menu_border">
            <div id="top_menu" class="container">
              <div class="top_menu_item ">
                <a class="nav-item nav-link" href="satilmis-urunler.html">
                  Satılmış ürünler
                </a>
              </div>
              <div class="top_menu_item ">
                <a class="nav-item nav-link" href="nasil-calisir.html">
                  Nasıl çalışır?
                </a>
              </div>
              <div class="top_menu_item " id="davet_et_kazan">
                <a
                  class="nav-item nav-link"
                  id=""
                  href="index.php/Login/giris.html"
                >
                  Davet Et, Kredi Kazan
                </a>
              </div>
              <div id="desktop_durum" class="bilgi1 anasayfa gizle_mecbur">
                Şu anda sitede{" "}
                <span id="ziyaretci_text" class="ziyaretci_text">
                  ...
                </span>{" "}
                ziyaretçi,{" "}
                <span class="toplam_urun" id="urun_text">
                  9
                </span>{" "}
                ürün ve{" "}
                <span id="toplam_indirim" class="toplam_indirim">
                  ...
                </span>{" "}
                indirim var.
              </div>

              <div class="siralama_filtresi">
                <select class="siralama_select">
                  <option value="fiyat" selected>
                    İndirim tutarı [TL] azalan
                  </option>
                  <option value="oran">İndirim oranı [%] azalan</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div id="dropdown_mobil">
          <select class="siralama_select">
            <option value="fiyat" selected>
              Sırala : Tutara göre en indirimli en üstte [TL]
            </option>
            <option value="oran">
              Sırala : Orana göre en indirimli en üstte [%]
            </option>
          </select>
        </div>

      </div>
    );
  }
}
const mapStateToProps = (props) => {
  return {
    Socketid: props.Socket.Socketid,
    UserBakiye: props.User.UserBakiye
  };
};
const mapDispatchToProps = {
  SetSocketId,
  GetBakiye
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);


