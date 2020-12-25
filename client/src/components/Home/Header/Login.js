import { React, Component } from 'react';
import { Post } from '../../../helper/service';

export default class Login extends Component {
    state = { UserName: "", Password: "", FormValid: true };
    constructor(props) {
        super(props);
        this.HandleInput = this.HandleInput.bind(this)
    }
    HandleInput(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    async Login() {
        console.log(this.state)
        if (this.state.UserName !== "" && this.state.Password !== "") {
            let login = await Post("Login", { Email: this.state.UserName, Password: this.state.Password })
            if (login.success) {
                localStorage.setItem("inToken", login.data)
                setTimeout(() => window.location.reload(), 2000)
            }
        }
    }
    render() {
        return (
            <div id="giris">
                <form >
                    <div id="inputlar">
                        <input type="text" name="UserName" class="form-control" placeholder="E-postanız" style={{ marginRight: 3 }} onChange={this.HandleInput} required="true" />
                        <input type="password" name="Password" class="form-control" placeholder="Şifreniz" autocomplete="nope" onChange={this.HandleInput} required="true" />
                    </div>
                    <div id="butonlar">
                        <button type="button" id="giris" onClick={() => this.Login()} >Giriş</button>
                        <button type="button" id="kayit" onClick="location.href = 'Login/kayit.html';">Üye Ol</button>
                        <a id="g_login" href='https://accounts.google.com/ServiceLogin432a.html'><img src="assets/google.png" class="social_login_icon" /></a>
                        <a id="f_login" href='https://www.facebook.com/login88a8.html'><img src="assets/facebook.png" class="social_login_icon" /></a>
                    </div>
                </form>
            </div>
        )
    }
}