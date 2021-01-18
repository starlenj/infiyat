
import { React, Component } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { SetSocketId } from "../../reducer/actions/socket_action";
import { connect } from "react-redux";
import moment from 'moment';
import { Post } from "../../helper/service";
import { toast } from "react-toastify";
class Register extends Component {
    state = { Email: "", Password: "", Onay: false }
    constructor(props) {
        super(props);
        this.HandleInput = this.HandleInput.bind(this);
        this.Register = this.Register.bind(this);
    }
    HandleInput(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    async Register() {
        if (this.state.Onay) {
            let RegisterUser = await Post("Register", {
                Email: this.state.Email,
                Password: this.state.Password
            })
            if (RegisterUser.data) {

                setTimeout(() => {
                    localStorage.setItem("inToken", RegisterUser.data);
                    window.location.href = "/";
                }, 2000)
            }
        } else {
            toast.error("Lütfen Sözleşmeleri Onaylayınız..");
        }
    }

    render() {
        return (
            <div>

                <Header socket={this.props.socket} session={this.props.session} />{" "}

                <div class="container" style={{ marginBottom: 20, minHeight: 428 }} id="main_container">

                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="https://www.infiyatin.com/">Anasayfa</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Üye Girişi</li>
                        </ol>
                    </nav>

                    <div id="logreg-forms">


                        <form action="https://www.infiyatin.com/Login/kayit_ol" class="form-signup" method="post" id="kayit_form" style={{ display: "block" }}>
                            <h1 class="h3 mb-3 font-weight-normal" style={{ textAlign: "center" }}>Hesap oluştur!</h1>

                            <div class="social-login">
                                <a href="https://www.infiyatin.com/Login/facebook" class="btn facebook-btn social-btn" type="button" style={{ float: "left" }}><span><i class="fab fa-facebook-f"></i> Facebook ile bağlan</span> </a>
                                <a href="https://www.infiyatin.com/Login/google" class="btn google-btn social-btn" type="button" style={{ float: "left", marginLeft: 3 }}><span><i class="fab fa-google-plus-g"></i> Google+ ile kayıt</span> </a>
                            </div>
                            <p style={{ textAlign: "center" }} id="veya"> veya  </p>
                            <input type="email" id="inputEmail" class="form-control" placeholder="E-posta Adresiniz" required autofocus="" name="Email" onChange={this.HandleInput} />
                            <input type="password" id="inputPassword" class="form-control" placeholder="Şifreniz" required name="Password" onChange={this.HandleInput} />
                            <div class="form-check" style={{ marginTop: 10 }}>
                                <input type="checkbox" class="form-check-input" required onChange={(e) => this.setState({ Onay: e.target.value === "on" ? true : false })} />
                                <label class="form-check-label" for="riza_metni">Üye olduğunuzda aşağıdaki sözleşmeleri okumuş ve onaylamış olursunuz.
                        <a href="https://www.infiyatin.com/sozlesmeler/hizmet" target="_blank">Üyelik Sözleşmesi</a><a href="https://www.infiyatin.com/sozlesmeler/rizametni" target="_blank">Rıza metni</a>
                                    <a href="https://www.infiyatin.com/sozlesmeler/aydinlatmametni" target="_blank">Aydınlatma metni</a>
                                </label>
                                <button class="btn btn-primary btn-block" type="button" id="btn-signup" onClick={this.Register}><i class="fas fa-user-plus" ></i>Kayıt Ol</button>
                            </div>

                            <br />
                        </form>
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
export default connect(mapStateToProps, mapDispatchToProps)(Register);
