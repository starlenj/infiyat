import { React, Component } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { SetSocketId } from "../../reducer/actions/socket_action";
import { connect } from "react-redux";
import { Delete, Post, Put } from "../../helper/service";
import { toast } from "react-toastify";
class Adreslerim extends Component {
    state = { _id: "", Il: "", Address: "", Ilce: "", Semt: "", Name: "", Session: [], UserId: "", AddressList: [], SelectAddress: [] }
    constructor(props) {
        super(props);
        this.HandleInput = this.HandleInput.bind(this);
        this.NewAddress = this.NewAddress.bind(this);
        this.UpdateAddress = this.UpdateAddress.bind(this);
        this.DeleteAddress = this.DeleteAddress.bind(this);
        this.props.session.then((Session) => {
            this.setState({
                UserId: Session.data.data.data[0]._id
            })
        })
    }
    componentDidMount() {
        this.props.socket.on("your id", (data) => this.props.SetSocketId(data));
        this.props.socket.on("toplam_kullanici", (data) => console.log(data));
        this.GetAddress();
    }
    async GetAddress() {
        var Session = await this.props.session
        const UserAddress = await Post("/GetAddress", { UserId: Session.data.data.data[0]._id });
        this.setState({ AddressList: UserAddress.data });


    }
    async SelectAddress(Address) {
        this.setState({ ...Address });
    }
    SetOdeme(tutar) {
        if (tutar > 0) {
            localStorage.setItem("TUTAR", tutar);
            window.location.href = "/Odeme";
        }
    }
    HandleInput(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    async NewAddress() {
        let Response = await Post("Address", {
            Name: this.state.Name,
            UserId: this.state.UserId,
            Address: this.state.Address, Il: this.state.Il,
            Ilce: this.state.Ilce,
            Semt: this.state.Semt
        });
        if (Response._id) {
            toast.success("Adres Ekleme Başarılı");
            setTimeout(() => window.location.reload(), 3000);
        }
    }
    async UpdateAddress() {
        let Response = await Put("Address", this.state, this.state._id);
        if (Response._id) {
            toast.success("Güncelleme Başarılı");
            setTimeout(() => {
                window.location.reload();
            }, (3000));
        }
    }
    async DeleteAddress() {
        let Response = await Delete("Address", this.state._id);
        if (Response) {
            toast.success("Kayıt Silme Başarılı");
            setTimeout(() => {
                window.location.reload();
            }, 3000);
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
                                    <a href="/">Anasayfa</a>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">
                                    Adreslerim
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
                                                class="list-group-item list-group-item-action"
                                            >
                                                Özet Sayfam
                    </a>
                                            <a
                                                href="http://localhost:3000/Kredi"
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
                                    <table class="table" style={{ backgroundColor: "white", border: 1, borderRadius: 0.25 }}>
                                        <thead>
                                            <tr class="footable-header">
                                                <th data-breakpoints="xs" style={{ display: "table-cell" }}>Adres Adı</th><th style={{ display: "table-cell" }}>Adres</th>
                                                <th data-breakpoints="xs" style={{ display: "table-cell" }}>Şehir</th>
                                                <th data-breakpoints="xs sm" style={{ display: "table-cell" }}>İlçe</th>
                                                <th data-breakpoints="xs sm md" data-title="" style={{ display: "table-cell" }}></th></tr>
                                        </thead>
                                        <tbody>

                                            {this.state.AddressList === [] && (
                                                <tr class="footable-empty"><td colspan="5">Adres kaydı henüz oluşturulmadı.</td></tr>
                                            )}
                                            {
                                                this.state.AddressList && this.state.AddressList.map((Address) => {
                                                    return (
                                                        <tr id="adres_4" data-expanded="true">
                                                            <td className="footable-first-visible">{Address.Name}</td>
                                                            <td className="footable-first-visible">{Address.Address}</td>
                                                            <td className="footable-first-visible">{Address.Il}</td>
                                                            <td className="footable-first-visible">{Address.Ilce}</td>
                                                            <td className="footable-first-visible">
                                                                <button className="btn btn-primary" data-toggle="modal" data-target="#adres_guncelle" onClick={() => this.SelectAddress(Address)}>Düzenle</button>
                                                                <button className="btn btn-danger" data-toggle="modal" data-target="#adres_sil" onClick={() => this.SelectAddress(Address)}>Sil</button>
                                                            </td>

                                                        </tr>

                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>

                                    <button type="button" class="btn btn-success" data-toggle="modal" data-target="#adres_ekleme">
                                        Yeni Adres oluştur
        </button>

                                    <div class="modal" tabindex="-1" role="dialog" id="adres_ekleme">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="adresModal">Adres Düzenleme</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">×</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <input type="hidden" name="adres_id" value="0" id="adres_id" />
                                                    <div class="form-group">
                                                        <label for="adres_adi">Adres Adı:</label>
                                                        <input type="text" class="form-control" name="Name" id="adres_adi" aria-describedby="adres_adim" placeholder="Adres adınız" required="true" onChange={this.HandleInput} />
                                                        <small id="adres_adim" class="form-text text-muted">Bu isim kayıtlı adreslerinize verdiğiniz isimdir. (Ev adresi, İş adresi...)</small>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="ilim">İl:</label>

                                                        <select name="Il" class="form-control" id="ilim" required="true" onChange={this.HandleInput}>
                                                            <option value="0">------</option>
                                                            <option >Adana</option>
                                                            <option >Adıyaman</option>
                                                            <option >Afyonkarahisar</option>
                                                            <option >Ağrı</option>
                                                            <option >Amasya</option>
                                                            <option >Ankara</option>
                                                            <option>Antalya</option>
                                                            <option>Artvin</option>
                                                            <option>Aydın</option>
                                                            <option>Balıkesir</option>
                                                            <option>Bilecik</option>
                                                            <option>Bingöl</option>
                                                            <option>Bitlis</option>
                                                            <option>Bolu</option>
                                                            <option>Burdur</option>
                                                            <option>Bursa</option>
                                                            <option>Çanakkale</option>
                                                            <option>Çankırı</option>
                                                            <option>Çorum</option>
                                                            <option>Denizli</option>
                                                            <option>Diyarbakır</option>
                                                            <option>Edirne</option>
                                                            <option >Elazığ</option>
                                                            <option >Erzincan</option>
                                                            <option >Erzurum</option>
                                                            <option >Eskişehir</option>
                                                            <option >Gaziantep</option>
                                                            <option >Giresun</option>
                                                            <option >Gümüşhane</option>
                                                            <option >Hakkâri</option>
                                                            <option >Hatay</option>
                                                            <option >Isparta</option>
                                                            <option >Mersin</option>
                                                            <option >İstanbul</option>
                                                            <option >İzmir</option>
                                                            <option >Kars</option>
                                                            <option >Kastamonu</option>
                                                            <option >Kayseri</option>
                                                            <option >Kırklareli</option>
                                                            <option >Kırşehir</option>
                                                            <option >Kocaeli</option>
                                                            <option >Konya</option>
                                                            <option >Kütahya</option>
                                                            <option >Malatya</option>
                                                            <option >Manisa</option>
                                                            <option >Kahramanmaraş</option>
                                                            <option >Mardin</option>
                                                            <option >Muğla</option>
                                                            <option >Muş</option>
                                                            <option >Nevşehir</option>
                                                            <option >Niğde</option>
                                                            <option >Ordu</option>
                                                            <option >Rize</option>
                                                            <option >Sakarya</option>
                                                            <option >Samsun</option>
                                                            <option >Siirt</option>
                                                            <option >Sinop</option>
                                                            <option >Sivas</option>
                                                            <option >Tekirdağ</option>
                                                            <option >Tokat</option>
                                                            <option >Trabzon</option>
                                                            <option >Tunceli</option>
                                                            <option >Şanlıurfa</option>
                                                            <option >Uşak</option>
                                                            <option >Van</option>
                                                            <option >Yozgat</option>
                                                            <option >Zonguldak</option>
                                                            <option >Aksaray</option>
                                                            <option >Bayburt</option>
                                                            <option >Karaman</option>
                                                            <option >Kırıkkale</option>
                                                            <option >Batman</option>
                                                            <option >Şırnak</option>
                                                            <option >Bartın</option>
                                                            <option >Ardahan</option>
                                                            <option >Iğdır</option>
                                                            <option >Yalova</option>
                                                            <option >Karabük</option>
                                                            <option >Kilis</option>
                                                            <option >Osmaniye</option>
                                                            <option >Düzce</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="ilcem">İlçe</label>
                                                        <input type="text" class="form-control" id="ilcem" name="Ilce" required="true" onChange={this.HandleInput} />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="semtim">Semt:</label>
                                                        <input type="text" class="form-control" id="semtim" name="Semt" required="true" onChange={this.HandleInput} />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="adresim">Adres:</label>
                                                        <textarea class="form-control" id="adresim" rows="3" required="true" name="Address" onChange={this.HandleInput}></textarea>
                                                    </div>
                                                    <button type="button" class="btn btn-success" onClick={this.NewAddress}>Adres Ekle</button>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Kapat</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal" tabindex="-1" role="dialog" id="adres_guncelle">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="adresModal">Adres Ekleme</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">×</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <input type="hidden" name="adres_id" value="0" id="adres_id" />
                                                    <div class="form-group">
                                                        <label for="adres_adi">Adres Adı:</label>
                                                        <input type="text" class="form-control" name="Name" id="adres_adi" aria-describedby="adres_adim" placeholder="Adres adınız" required="true" onChange={this.HandleInput} value={this.state.Name} />
                                                        <small id="adres_adim" class="form-text text-muted">Bu isim kayıtlı adreslerinize verdiğiniz isimdir. (Ev adresi, İş adresi...)</small>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="ilim">İl:</label>

                                                        <select name="Il" class="form-control" id="ilim" required="true" onChange={this.HandleInput} >
                                                            <option value="0">------</option>
                                                            <option >Adana</option>
                                                            <option >Adıyaman</option>
                                                            <option >Afyonkarahisar</option>
                                                            <option >Ağrı</option>
                                                            <option >Amasya</option>
                                                            <option >Ankara</option>
                                                            <option>Antalya</option>
                                                            <option>Artvin</option>
                                                            <option>Aydın</option>
                                                            <option>Balıkesir</option>
                                                            <option>Bilecik</option>
                                                            <option>Bingöl</option>
                                                            <option>Bitlis</option>
                                                            <option>Bolu</option>
                                                            <option>Burdur</option>
                                                            <option>Bursa</option>
                                                            <option>Çanakkale</option>
                                                            <option>Çankırı</option>
                                                            <option>Çorum</option>
                                                            <option>Denizli</option>
                                                            <option>Diyarbakır</option>
                                                            <option>Edirne</option>
                                                            <option >Elazığ</option>
                                                            <option >Erzincan</option>
                                                            <option >Erzurum</option>
                                                            <option >Eskişehir</option>
                                                            <option >Gaziantep</option>
                                                            <option >Giresun</option>
                                                            <option >Gümüşhane</option>
                                                            <option >Hakkâri</option>
                                                            <option >Hatay</option>
                                                            <option >Isparta</option>
                                                            <option >Mersin</option>
                                                            <option >İstanbul</option>
                                                            <option >İzmir</option>
                                                            <option >Kars</option>
                                                            <option >Kastamonu</option>
                                                            <option >Kayseri</option>
                                                            <option >Kırklareli</option>
                                                            <option >Kırşehir</option>
                                                            <option >Kocaeli</option>
                                                            <option >Konya</option>
                                                            <option >Kütahya</option>
                                                            <option >Malatya</option>
                                                            <option >Manisa</option>
                                                            <option >Kahramanmaraş</option>
                                                            <option >Mardin</option>
                                                            <option >Muğla</option>
                                                            <option >Muş</option>
                                                            <option >Nevşehir</option>
                                                            <option >Niğde</option>
                                                            <option >Ordu</option>
                                                            <option >Rize</option>
                                                            <option >Sakarya</option>
                                                            <option >Samsun</option>
                                                            <option >Siirt</option>
                                                            <option >Sinop</option>
                                                            <option >Sivas</option>
                                                            <option >Tekirdağ</option>
                                                            <option >Tokat</option>
                                                            <option >Trabzon</option>
                                                            <option >Tunceli</option>
                                                            <option >Şanlıurfa</option>
                                                            <option >Uşak</option>
                                                            <option >Van</option>
                                                            <option >Yozgat</option>
                                                            <option >Zonguldak</option>
                                                            <option >Aksaray</option>
                                                            <option >Bayburt</option>
                                                            <option >Karaman</option>
                                                            <option >Kırıkkale</option>
                                                            <option >Batman</option>
                                                            <option >Şırnak</option>
                                                            <option >Bartın</option>
                                                            <option >Ardahan</option>
                                                            <option >Iğdır</option>
                                                            <option >Yalova</option>
                                                            <option >Karabük</option>
                                                            <option >Kilis</option>
                                                            <option >Osmaniye</option>
                                                            <option >Düzce</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="ilcem">İlçe</label>
                                                        <input type="text" class="form-control" id="ilcem" name="Ilce" required="true" onChange={this.HandleInput} value={this.state.Ilce} />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="semtim">Semt:</label>
                                                        <input type="text" class="form-control" id="semtim" name="Semt" required="true" onChange={this.HandleInput} value={this.state.Semt} />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="adresim">Adres:</label>
                                                        <textarea class="form-control" id="adresim" rows="3" required="true" name="Address" onChange={this.HandleInput} value={this.state.Address}></textarea>
                                                    </div>
                                                    <button type="button" class="btn btn-success" onClick={this.UpdateAddress}>Adres Güncelle</button>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Kapat</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >

                <div class="modal" tabindex="-1" role="dialog" id="adres_sil">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Kayıt Silme</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <p>Seçili adres silinecek onaylıyor musunuz ?.</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" data-dissmiss="modal" onClick={this.DeleteAddress}>Evet</button>
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Hayır</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div >
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
export default connect(mapStateToProps, mapDispatchToProps)(Adreslerim);
