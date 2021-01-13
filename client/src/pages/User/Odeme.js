import { React, Component } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { SetSocketId } from "../../reducer/actions/socket_action";
import { connect } from "react-redux";
import moment from 'moment';
import { Post } from "../../helper/service";
import { toast } from "react-toastify";
class Home extends Component {
    state = { Session: [], Tutar: 0 }
    constructor(props) {
        super(props);

        this.props.session.then((Response) =>
            this.setState({ Session: Response.data.data.data[0] })
        );
    }
    componentDidMount() {
        var islemTutari = localStorage.getItem("TUTAR");
        this.setState({ Tutar: islemTutari })
        this.props.socket.on("your id", (data) => this.props.SetSocketId(data));
        this.props.socket.on("toplam_kullanici", (data) => console.log(data));
    }
    async OdemeBildirim() {
        var UserHareketResponse = await Post("UserHareket", {
            UserId: this.state.Session._id,
            HareketTuru: "Havale",
            bakiye: parseFloat(parseFloat(this.state.Tutar) + parseFloat(1.4)).toFixed(2),
        })
        if (UserHareketResponse._id) {
            toast.success("Ödeme bildirimi başarılı onay durumunda tarafınıza bilgi verilecektir.");
            setTimeout(() => {
                localStorage.removeItem("TUTAR");
                window.location.href = "/Kredi"
            }, 3000)
        } else {
            toast.error("Ödeme Bildirimi Başarısız Lütfen Tekrar Deneyiniz..")
        }
    }
    render() {
        return (
            <div>

                <Header socket={this.props.socket} session={this.props.session} />{" "}
                <div class="container" style={{ marginBottom: 20, minHeight: 428 }} id="main_container">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4 col-sm-12">
                                <p class="head22">Detay</p>
                                <ul class="list-group">
                                    <li class="list-group-item">
                                        <div class="payment_details">Kredi Yükleme</div>
                                    </li>
                                    <li class="list-group-item"><div class="payment_details">İlk fiyat</div>: {parseFloat(this.state.Tutar).toFixed(2)}TL</li>
                                    <li class="list-group-item"><div class="payment_details">Hizmet Bedeli</div>1.4 TL  <p></p><h6>(1 TL Hizmet bedeli + 0,4 TL vergi)</h6><p></p></li> <li class="list-group-item"><div class="payment_details">Toplam</div><span id="total_p">{parseFloat(parseFloat(this.state.Tutar) + parseFloat(1.4)).toFixed(2)}</span> TL</li>			  <li class="list-group-item" style={{ display: "none" }}><div class="payment_details">Son fiyat eksiltmesi</div>: 0.00 TL</li>
                                    <li class="list-group-item" style={{ display: "none" }}><div class="payment_details">Kasa avansı</div>: 0.00 TL</li>
                                    <li class="list-group-item" style={{ display: "none" }}><div class="alert alert-success" role="alert"><div class="payment_details">Ödenecek</div>: {parseFloat(this.state.Tutar + 1.4).toFixed(2)} TL</div></li>
                                </ul>
                            </div>
                            <aside class="col-md-8 col-sm-12">
                                <p class="head22">Ödeme Formu</p>
                                <div style={{ borderRadius: 5, border: 1, backgroundColor: "white", padding: 10, marginBottom: 10 }}>
                                    <div class="row">
                                        <div class="col-sm-6"><img alt="" style={{ maxWidth: "98%", borderRadius: 10 }} src="https://www.infiyatin.com/assets/CreditCard.png" /></div>
                                        <div class="col-sm-6"><img alt="" style={{ maxWidth: "98%", borderRadius: 10 }} src="https://www.infiyatin.com/assets/BankTransfer.png" /></div>
                                    </div>
                                </div>
                                <article class="card" style={{ width: "100%" }}>
                                    <div class="card-body p-5">
                                        <ul class="nav bg-light nav-pills rounded nav-fill mb-3" role="tablist">
                                            <li class="nav-item">
                                                <a class="nav-link active" data-toggle="pill" href="#nav-tab-card">
                                                    <i class="fa fa-credit-card"></i> Kredi Kartı
							                    </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" data-toggle="pill" href="#nav-tab-bank">
                                                    <i class="fa fa-university"></i>  Banka Transferi/EFT
							                    </a>
                                            </li>
                                        </ul>
                                        <div class="tab-content">
                                            <div class="tab-pane fade show active" id="nav-tab-card">
                                                <form role="form" onsubmit="return validateForm()" method="post" action="https://www.infiyatin.com/Odeme/payment">
                                                    <input type="hidden" class="form-control" name="order_id" placeholder="" value="50" />
                                                    <div class="form-group">
                                                        <label for="username">Tam isim (Kart üzerinde bulunan)</label>
                                                        <input type="text" class="form-control" name="username" placeholder="" required="" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="cardNumber">Kart Numarası</label>
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" name="cardNumber" maxlength="16" placeholder="" onkeypress="return event.charCode>= 48 &amp;&amp;event.charCode<= 57" required="" />
                                                            <div class="input-group-append">
                                                                <span class="input-group-text text-muted">
                                                                    <i class="fab fa-cc-visa"></i>
                                                                    <i class="fab fa-cc-amex"></i>
                                                                    <i class="fab fa-cc-mastercard"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-sm-8">
                                                            <div class="form-group">
                                                                <label>
                                                                    <span class="hidden-xs">Son kullanma tarihi</span>
                                                                </label>
                                                                <div class="input-group">
                                                                    <input type="text" class="form-control" placeholder="AA" name="ay" maxlength="2" onkeypress="return event.charCode>= 48 &amp;&amp;event.charCode<= 57" required="" />
                                                                    <input type="text" class="form-control" placeholder="YY" name="yil" maxlength="2" onkeypress="return event.charCode>= 48 &amp;&amp;event.charCode<= 57" required="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-4">
                                                            <div class="form-group">
                                                                <label data-toggle="tooltip" title="" data-original-title="3 digits code on back side of the card">CVV
																<i class="fa fa-question-circle"></i>
                                                                </label>
                                                                <input type="text" class="form-control" maxlength="4" name="kod" onkeypress="return event.charCode>= 48 &amp;&amp;event.charCode<= 57" required="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button class="subscribe btn btn-primary btn-block" type="submit"> Ödeme Yap  </button>
                                                </form>
                                            </div>
                                            <div class="tab-pane fade" id="nav-tab-bank">
                                                <div class="row">
                                                    <div class="col-sm-6">
                                                        <p>Alıcı(Site) Banka Bilgileri</p>
                                                        <dl class="param">
                                                            <dt>Banka : GarantiBBVA Bankası  </dt>

                                                        </dl>
                                                        <dl class="param">
                                                            <dt>IBAN : TR49 0006 2000 7750 0006 6387 18</dt>

                                                        </dl>
                                                        <div class="border-bottom" style={{ borderBottom: 1, height: 2, width: "100%" }}></div>
                                                        <p>
                                                            <strong>Not:</strong> Bankadan ödeme yaparken açıklama bölümüne sipariş numarasını yazınız.
												        </p>
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <button class="subscribe btn btn-success btn-block" type="button" data-toggle="modal" data-target="#odeme_bildirim">Havale işleminizi bildirmek için tıklayınız
												</button></div>
                                                </div>
                                            </div>



                                        </div>


                                    </div>
                                </article>
                            </aside>
                        </div>
                    </div>
                </div>
                <div class="modal" tabindex="-1" role="dialog" id="odeme_bildirim">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Eft/Havale Bildirim Formu</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form id="form_bildirim">
                                    <input type="hidden" name="id" value="50" />
                                    <div class="form-group">
                                        <label for="odeme_gonderen_form">Ödeme gönderen</label>
                                        <input type="text" readOnly={true} class="form-control" id="odeme_gonderen_form" name="isim" placeholder="Ad Soyad" required="" value={this.state.Session.Name} />
                                    </div>
                                    <div class="form-group">
                                        <label for="odeme_yapilan_banka">Alıcı Hesap</label>
                                        <select class="form-control" id="odeme_yapilan_banka" name="banka" required="" readOnly={true}>
                                            <option value="1">Vakıflar Bankası</option>							    </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="odeme_tutari_form">Ödeme Tutarı</label>
                                        <input type="text" readOnly={true} class="form-control" id="odeme_tutari_form" name="tutar" placeholder="0.00" required="" value={parseFloat(parseFloat(this.state.Tutar) + parseFloat(1.4)).toFixed(2)} />
                                    </div>
                                    <div class="form-group">
                                        <label for="odeme_tarihi_form">Ödeme Yapılan Tarih</label>
                                        <input type="text" readOnly={true} class="form-control" id="odeme_tarihi_form" name="tarih" value={moment().format("DD.MM.YYYY")} required="" />
                                    </div>
                                    <small class="form-text text-muted">Daha önce bu sipariş için yaptığınız ödeme bildirimi var ise bunlar silinecektir.</small>
                                    <button type="submit" class="btn btn-success" data-dismiss="modal" onClick={() => this.OdemeBildirim()}>Bildirim Gönder</button>
                                </form>
                            </div>
                            <div class="modal-footer">

                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Kapat</button>
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);
