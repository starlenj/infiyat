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
    SetOdeme(tutar) {
        if (tutar > 0) {
            localStorage.setItem("TUTAR", tutar);
            window.location.href = "/Odeme";
        }
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
                                    <a href="https://www.infiyatin.com/">Anasayfa</a>
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
                                                href="/Profile"
                                                class="list-group-item list-group-item-action"
                                            >
                                                Özet Sayfam
                    </a>
                                            <a
                                                href="/Kredi"
                                                class="list-group-item list-group-item-action active"
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
                                                href="/Adreslerim"
                                                class="list-group-item list-group-item-action"
                                            >
                                                Adreslerim
                    </a>
                                            <a
                                                href="/UserProfile"
                                                class="list-group-item list-group-item-action"
                                            >
                                                Profilim
                    </a>
                                            <a
                                                href="#"
                                                class="list-group-item list-group-item-action"
                                            >
                                                Destek Taleplerim
                    </a>
                                            <a
                                                href="#"
                                                class="list-group-item list-group-item-action"
                                            >
                                                Hareket Geçmişi
                    </a>
                                            <a
                                                href="/Logout"
                                                class="list-group-item list-group-item-action"
                                            >
                                                Çıkış
                    </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-9">
                                    <div class="row" style={{ backgroundColor: "white", border: 1, borderRadius: ".25rem" }}>
                                        <div class="col-md-12">
                                            <div class="card-body">
                                                <h5 class="card-title">Kasanızda şu anda <span style={{ color: "red", fontWeight: "bolder" }}> TL</span> bulunmaktadır.</h5>
                                                <p class="card-text">
                                                </p><ul>
                                                    <li>Kasanıza kredi yüklemek için aşağıdaki kuponlardan seçim yapınız.</li>
                                                    <li>Kasanızdaki kredi tutarını Son Fiyatları görmek için veya ürün satın alırken kullanabilirsiniz.</li>
                                                    <li>Kasanızdaki tutarın iadesini istediğiniz an talep edebilirsiniz.</li>

                                                </ul>
                                                <p></p>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="frame" style={{ backgroundColor: "white", marginBottom: 20 }}>



                                                <div class="card card-1 kredi_yukleme" data="16" onClick={() => this.SetOdeme(1)}>
                                                    <div class="card-top">Kredi Yükle</div>
                                                    <div class="card-info">
                                                        <div class="card-cost">
                                                            <div class="card-value">1 TL</div>
                                                            <div class="card-month">Yükle</div>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div class="card card-2 kredi_yukleme" data="18" onClick={() => this.SetOdeme(5)}>
                                                    <div class="card-top">Kredi Yükle</div>
                                                    <div class="card-info">
                                                        <div class="card-cost">
                                                            <div class="card-value">5 TL</div>
                                                            <div class="card-month">Yükle</div>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div class="card card-3 kredi_yukleme" data="20" onClick={() => this.SetOdeme(10)}>
                                                    <div class="card-top">Kredi Yükle</div>
                                                    <div class="card-info">
                                                        <div class="card-cost">
                                                            <div class="card-value">10 TL</div>
                                                            <div class="card-month">Yükle</div>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div class="card card-4 kredi_yukleme" data="19" onClick={() => this.SetOdeme(20)}>
                                                    <div class="card-top">Kredi Yükle</div>
                                                    <div class="card-info">
                                                        <div class="card-cost">
                                                            <div class="card-value">20 TL</div>
                                                            <div class="card-month">Yükle</div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
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
