import { React, Component } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { SetSocketId } from "../../reducer/actions/socket_action";
import { connect } from "react-redux";
import moment from 'moment';
import { Post } from "../../helper/service";
import { toast } from "react-toastify";
class Destek extends Component {
    state = { Message: "", Title: "", Tickets: [] }
    constructor(props) {
        super(props);
        this.HandleInput = this.HandleInput.bind(this);
        this.SendTicket = this.SendTicket.bind(this);
        this.GetTicket = this.GetTicket.bind(this);
    }
    HandleInput(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    async componentDidMount() {
        await this.GetTicket();
    }
    async GetTicket() {
        let session = await this.props.session;
        let User = session.data.data.data;
        let Tickets = await Post("GetUserTicket", {
            TicketType: "Ticket",
            UserId: User._id
        });
        console.log(Tickets);
        this.setState({ Tickets: Tickets.data });
    }
    async SendTicket() {
        console.log(this.state);
        let session = await this.props.session;
        let User = session.data.data.data;
        if (this.state.Message !== "" && this.state.Title !== "") {
            let TicketHeaderResult = await Post("TicketHeader", {
                TicketType: "Ticket",
                UserName: User.Email,
                UserId: User._id,
                Title: this.state.Title
            });
            if (TicketHeaderResult._id) {
                let TicketBodyResult = await Post("TicketBody", {
                    HeaderId: TicketHeaderResult._id,
                    Message: this.state.Message,
                    MessageType: "Request"
                })
                if (TicketBodyResult._id) {
                    toast.success("Destek kaydınız açıldı en kısa zamanda dönüş yapılacaktır..");
                    setTimeout(() => window.location.reload(), 3000)
                }
            }

        } else {
            toast.error("Lütfen Konu ve içeriği giriniz..");
        }
    }
    async TicketDetail(HeaderId) {
        window.location.href = "/Destek/Detay/" + HeaderId;

    }
    render() {
        return (
            <div>

                <Header socket={this.props.socket} session={this.props.session} />{" "}

                <div class="container" style={{ marginBottom: "20", minHeight: 428 }} id="main_container">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="https://www.infiyatin.com/">Anasayfa</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Destek Taleplerim</li>
                        </ol>
                    </nav>




                    <div class="container" style={{ marginTop: 10 }}>
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
                                            href="/Adreslerim"
                                            class="list-group-item list-group-item-action "
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
                                            href="/Destek"
                                            class="list-group-item list-group-item-action active"
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


                            <div class="col-md-9" style={{ backgroundColor: "white", border: 1, borderRadius: ".25rem" }}>
                                <div class="row">
                                    <form class="smart-green">
                                        <h1>Destek talebi
              <span>Yeni destek talebi için tüm alanları doldurunuz</span>
                                        </h1>

                                        <label>
                                            <span>Konu :</span><input id="Subject" type="text" placeholder="Tam konuyu yazınız." name="Title" required="" onChange={this.HandleInput} />
                                        </label>

                                        <label>
                                            <span>Mesajınız :</span>
                                            <textarea id="message" name="Message" placeholder="Mesajınız" required="" onChange={this.HandleInput}></textarea>
                                        </label>


                                        <button class="btn btn-success" type="button" onClick={this.SendTicket} >Destek Talebi Oluştur</button>

                                    </form>
                                </div>



                                <table class="table" >
                                    <thead>
                                        <tr class="footable-header">
                                            <th data-breakpoints="xs">İşlem</th>
                                            <th >Konu</th>
                                            <th >Gönderen</th>
                                            <th data-breakpoints="xs" >Son işlem Zamanı</th>
                                            <th data-breakpoints="xs sm" >Durum</th></tr>
                                    </thead>
                                    <tbody>
                                        {this.state.Tickets.length > 0 &&
                                            this.state.Tickets.map((item) => (
                                                <tr>
                                                    <td><button class="btn btn-primary" onClick={() => this.TicketDetail(item._id)}>Detay</button></td>
                                                    <td>{item.Title}</td>
                                                    <td>{item.UserName}</td>
                                                    <td>{moment(item.updatedAt).format("DD.MM.YYYY HH:mm")}</td>
                                                    <td>{item.Status === 1 ? "Kaydınız Cevap Bekleniyor" : (item.status === -1) ? "Kaydınız Kapatıldı" : "Kaydınız Cevaplandı"}</td>
                                                </tr>
                                            ))}


                                    </tbody>
                                </table>





                            </div>
                        </div>
                    </div>

                    <span id="footable_empty_text">Bir destek talebiniz bulunmuyor.</span>




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
export default connect(mapStateToProps, mapDispatchToProps)(Destek);
