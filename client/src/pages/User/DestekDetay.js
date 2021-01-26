import { React, Component } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { SetSocketId } from "../../reducer/actions/socket_action";
import { connect } from "react-redux";
import moment from 'moment';
import { Get, Post } from "../../helper/service";
import { toast } from "react-toastify";
class Destek extends Component {
    state = { Message: "", Title: "", Tickets: [], Status: 0 }
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
        var path = window.location.pathname.split("/");
        let Tickets = await Post("GetBody", { HeaderId: path[3] });
        let TicketHeader = await Get("TicketHeader", path[3]);
        this.setState({ Tickets: Tickets.data, Title: TicketHeader.Title, Status: TicketHeader.Status });
    }
    async SendTicket() {
        var path = window.location.pathname.split("/");
        if (this.state.Message !== "" && this.state.Title !== "") {
            const response = await Post("SetTicketStatus", {
                id: path[3],
                Status: 0,
            });

            if (path[3]) {
                let session = await this.props.session;
                let User = session.data.data.data;
                let TicketBodyResult = await Post("TicketBody", {
                    HeaderId: path[3],
                    Message: this.state.Message,
                    MessageType: "Request",
                    ResponseUser: User.Email
                })
                if (TicketBodyResult._id) {
                    toast.success("Yanıtınız iletildi.En kısa sürede cevap verilecektir..");
                    setTimeout(() => window.location.reload(), 3000)
                }
            }

        } else {
            toast.error("Lütfen Konu ve içeriği giriniz..");
        }
    }
    async CloseTicket() {
        var path = window.location.pathname.split("/");
        const response = await Post("SetTicketStatus", {
            id: path[3],
            Status: 3,
        });
        if (response) {
            toast.success("Kaydınız başarıl ile kapatıldı");
            setTimeout(() => window.location.href = "/Destek", 3000);

        }
    }
    async TicketDetail(HeaderId) {
        window.location.href = "/Detay/" + HeaderId;

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

                            <div class="col-md-9">

                                {
                                    this.state.Tickets.length > 0 &&
                                    this.state.Tickets.map((item) => (

                                        <ul class="timeline timeline-simple">
                                            { item.MessageType == "Response" && (
                                                <li class="timeline-inverted">
                                                    <div class="timeline-badge info">
                                                        <i class="material-icons">arrow_forward</i>                </div>
                                                    <div class="timeline-panel">
                                                        <div class="timeline-heading">
                                                            <span class="label label-danger">{this.state.Title}</span>
                                                        </div>
                                                        <div class="timeline-body">
                                                            <p>{item.Message}</p>
                                                        </div>
                                                        <h6>
                                                            <i class="ti-time"></i>
                                                            {moment(item.createdAt).format("DD.MM.YYYY HH:mm:ss")}               </h6>
                                                    </div>
                                                </li>

                                            )}
                                            { item.MessageType == "Request" && (
                                                <li class="timeline-inverted">
                                                    <div class="timeline-badge success">
                                                        <i class="material-icons">arrow_forward</i>                </div>
                                                    <div class="timeline-panel">
                                                        <div class="timeline-heading">
                                                            <span class="label label-danger">{this.state.Title}</span>
                                                        </div>
                                                        <div class="timeline-body">
                                                            <p>{item.Message}</p>
                                                        </div>
                                                        <h6>
                                                            <i class="ti-time"></i>
                                                            {moment(item.createdAt).format("DD.MM.YYYY HH:mm:ss")}                </h6>
                                                    </div>
                                                </li>
                                            )}

                                        </ul>

                                    ))

                                }




                                {this.state.Status === 3 && (
                                    <form >
                                        <div class="form-group">
                                            <label for="input2">Yeni mesajınız</label>
                                            <textarea class="form-control" id="input2" rows="5" name="mesaj" required="" name="Message" onChange={this.HandleInput}></textarea>
                                        </div>
                                        <button type="button" class="btn btn-primary" onClick={this.SendTicket}>Tekrar aç</button> <button class="btn btn-danger" type="button" style={{ float: "right" }} onClick={this.CloseTicket}>Bu talebi kapat.</button>
                                    </form>

                                )}
                                {this.state.Status === 0 && (
                                    <form >
                                        <div class="form-group">
                                            <label for="input2">Yeni mesajınız</label>
                                            <textarea class="form-control" name="Message" onChange={this.HandleInput} id="input2" rows="5" name="mesaj" required=""></textarea>
                                        </div>
                                        <button type="button" class="btn btn-primary" onClick={this.SendTicket}>Yanıtla</button> <button class="btn btn-danger" type="button" style={{ float: "right" }} onClick={this.CloseTicket}>Bu talebi kapat.</button>
                                    </form>

                                )}

                                {this.state.Status === 1 && (
                                    <form >
                                        <div class="form-group">
                                            <label for="input2">Yeni mesajınız</label>
                                            <textarea class="form-control" id="input2" rows="5" name="mesaj" required="" name="Message" onChange={this.HandleInput}></textarea>
                                        </div>
                                        <button type="button" class="btn btn-primary" onClick={this.SendTicket}>Yanıtla</button> <button class="btn btn-danger" type="button" style={{ float: "right" }} onClick={this.CloseTicket}>Bu talebi kapat.</button>
                                    </form>

                                )}
                                {this.state.Status === 2 && (
                                    <form >
                                        <div class="form-group">
                                            <label for="input2">Yeni mesajınız</label>
                                            <textarea class="form-control" id="input2" rows="5" name="mesaj" required="" name="Message" onChange={this.HandleInput}></textarea>
                                        </div>
                                        <button type="button" class="btn btn-primary" onClick={this.SendTicket}>Yanıtla</button> <button class="btn btn-danger" type="button" style={{ float: "right" }} onClick={this.CloseTicket}>Bu talebi kapat.</button>
                                    </form>

                                )}
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
export default connect(mapStateToProps, mapDispatchToProps)(Destek);
