
import { React, Component } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { SetSocketId } from "../../reducer/actions/socket_action";
import { connect } from "react-redux";
import { Get, Post, Put } from "../../helper/service";
import { toast } from "react-toastify";
class Profile extends Component {
    state = { Name: "", Email: "", Tc: "", Gender: "", Phone: "" }
    constructor(props) {
        super(props);
        this.GetProfile = this.GetProfile.bind(this);
        this.SaveProfile = this.SaveProfile.bind(this);
        this.HandleInput = this.HandleInput.bind(this);
    }
    async componentDidMount() {
        let session = await this.props.session;
        var UserProf = await Get("User", session.data.data.data._id);
        if (UserProf !== undefined) {
            this.setState({
                Name: UserProf.Name || "",
                Email: UserProf.Email,
                Tc: UserProf.Tc || "",
                Gender: UserProf.Gender || "",
                Phone: UserProf.Phone || ""
            })
        }
    }
    HandleInput(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    async GetProfile() {

    }
    async SaveProfile() {
        var Update = await Put("User",
            {
                Name: this.state.Name,
                Email: this.state.Email,
                Tc: this.state.Tc,
                Gender: this.state.Gender,
                Phone: this.state.Phone
            },
            this.props.User._id);
        if (Update._id) {
            toast.success("Profil güncelleme başarılı.");
            setTimeout(() => window.location.reload(), 2000);
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
                                                class="list-group-item list-group-item-action "
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
                                                href="/Profile"
                                                class="list-group-item list-group-item-action active"
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
                                <div class="col-md-9" style={{ backgroundColor: "white", border: 1, paddingTop: 10 }}>


                                    <div class="alert alert-warning alert-dismissible fade show col-md-12" role="alert">
                                        <strong>Üyelik durumu:</strong> Üyelik aktivasyonunu Profilim sayfasında tamamlayın.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>

                                    <form action="post" id="uyelik">
                                        <div class="form-group">
                                            <label for="e-posta">E-posta</label>
                                            <input type="email" class="form-control" id="e-posta" aria-describedby="emailHelp" placeholder="" disabled="" readOnly={true} value={this.state.Email} />
                                            <small id="emailHelp" class="form-text text-muted">E-posta adresiniz değiştirilemez.</small>
                                        </div>

                                        <div class="form-group">
                                            <label for="cinsiyet">Cinsiyet</label>
                                            <select class="form-control" id="cinsiyet" name="Gender" onChange={this.HandleInput}>
                                                <option value="0">Seçiniz</option>
                                                <option value="Erkek">Erkek</option>
                                                <option value="Kadın">Kadın</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label for="isim">İsminiz</label>
                                            <input type="text" class="form-control" id="isim" name="Name" placeholder="İsminiz" value={this.state.Name} onChange={this.HandleInput} />
                                        </div>
                                        <div class="form-group">
                                            <label for="tc">TC Kimlik No</label>
                                            <input type="number" class="form-control" id="tc" name="Tc" placeholder="TC Kimlik No" value={this.state.Tc} onChange={this.HandleInput} />
                                        </div>
                                        <div class="form-group">
                                            <label for="telefon">Cep Telefonu</label>
                                            <input type="number" class="form-control" id="telefon" name="Phone" placeholder="5xx xxx xx xx" value={this.state.Phone} onChange={this.HandleInput} />
                                        </div>
                                        <div class="form-group form-check">
                                            <input type="checkbox" class="form-check-input" id="sms_bildirim" name="bildirim" />
                                            <label class="form-check-label" for="sms_bildirim">Sms ile kampanya bilgilendirmelerinizi almak istiyorum</label>
                                        </div>
                                        <button type="button" class="btn btn-success" style={{ float: "left", margin: 5 }} onClick={this.SaveProfile}>Kaydet</button>
                                        <button type="button" class="btn btn-primary" style={{ float: "left", margin: 5 }} data-toggle="modal" data-target="#change_pass" >Şifremi değiştir</button>

                                        <button type="button" class="btn btn-warning" style={{ float: "left", margin: 5 }} onclick="sms_aktivasyon()">SMS Aktivasyonunu Tamamla</button>
                                    </form>





                                    <div class="modal fade" id="change_pass" tabindex="-1" role="dialog" aria-labelledby="sifre_label" aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="sifre_label">Şifre değiştir</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">×</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <div id="yeni_uyari"></div>
                                                    <label>Mevcut Şifreniz</label>
                                                    <div class="form-group pass_show">
                                                        <input type="password" class="form-control" id="mevcut_sifre" placeholder="Mevcut Şifreniz" />
                                                    </div>
                                                    <label>Yeni Şifreniz</label>
                                                    <div class="form-group pass_show">
                                                        <input type="password" class="form-control" id="yenipass1" placeholder="Yeni Şifreniz" />
                                                    </div>
                                                    <label>Şifre Onayı</label>
                                                    <div class="form-group pass_show">
                                                        <input type="password" class="form-control" id="yenipass2" placeholder="Şifre Tekrarı" />
                                                    </div>

                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Iptal</button>
                                                    <button type="button" class="btn btn-primary" onclick="yeni_kaydet();">Şifremi Kaydet</button>
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

const mapStateToProps = (props) => {
    return {
        SocketId: props.Socket.SocketId,
        User: props.User.User
    };
};
const mapDispatchToProps = {
    SetSocketId,
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
