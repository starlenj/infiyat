import { React, Component } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { SetSocketId } from "../../reducer/actions/socket_action";
import { connect } from "react-redux";
import { Post } from "../../helper/service";
class Home extends Component {
    constructor(props) {
        super(props);
    }
    async componentDidMount() {
        this.props.socket.on("your id", (data) => this.props.SetSocketId(data));
        this.props.socket.on("toplam_kullanici", (data) => console.log(data));
        this.GetOrderHeader();
    }
    async GetOrderHeader() {
        let Session = await this.props.session;
        let response = await Post("GetOrderList", {
            UserId: Session.data.data.data[0]._id
        })
        console.log(response);
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
                                                href="http://localhost:3000/Profile"
                                                class="list-group-item list-group-item-action "
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
                                                href="http://localhost:3000/Siparislerim"
                                                class="list-group-item list-group-item-action active"
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
                                                href="#"
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

                                    <div class="row" style={{ marginBottom: 5, padding: 10, backgroundColor: "white", border: 1, borderRadius: ".25rem" }}>

                                        <h6><b>ÖNEMLİ : Satın almayacağınız ürünü rezerve etmeyiniz.</b></h6>
                                        <h7>Şu anda <span style={{ color: "red" }}>3</span> sipariş iptal hakkınız bulunuyor. 3 iptal hakkınızı kullandığınızda üyeliğiniz 1 hafta süreyle durdurulur.
              </h7>
                                    </div>


                                    <div class="row" style={{ backgroundColor: "white", border: 1, borderRadius: ".25rem" }}>



                                        <div class="row border-bottom-rezerve" style={{ fontSize: 12, backgroundColor: "white" }}>
                                            <div class="col-3">

                                                <img src="https://www.infiyatin.com/assets/krediyukle.png" class="img-responsive" />
                                            </div>
                                            <div class="col-9" style={{ fontSize: 12 }}>

                                                <div>Sipariş No:11</div>
                                                <div>10 TL Yükle</div>
                                                <div>İlk fiyat: 10.00TL</div>
                                                <div>Hizmet Bedeli: 1.4 TL</div>
                                                <div>Son fiyat: 11.4 TL</div>

                                                <div style={{ fontSize: 11 }}>Tarih: 2020-11-21 23:26:04</div>

                                            </div>



                                            <div class="col-12">
                                                <div class="alert alert-info" role="alert">Kredi kasanıza yüklendi.</div>            </div>

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
