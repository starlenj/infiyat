import { Component } from "react";
import Login from "./Home/Header/Login";
import CardList1 from "./Home/Product/CardList1";
import CardList2 from "./Home/Product/CardList2";
import CardList3 from "./Home/Product/CardList3";

export default class Header extends Component {
    state = { Session: [], Logged: false }
    componentDidMount() {
        this.props.session.then((Session) => {
            this.setState({ Session: Session.data.data.data[0], Logged: true })
        })
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
                                        <a href="index.html" class="dropdown-item">
                                            <span>Anasayfa</span>
                                        </a>
                                    </li>



                                    <li>
                                        <a href="Login/giris.html" class="dropdown-item">
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
                    <div id="header" class="container" >
                        <div id="mobil_menu">
                            <i class="material-icons">menu</i>
                        </div>

                        <div id="logom" >
                            <a href="index.html"><img style={{ maxWidth: 180 }} src="assets/logo.png" alt="Logo" /></a>
                        </div>

                        <div id="logo_mobil" class="mobil_butonlar">

                            <a href="Login/giris.html">

                                <span id="mobil_kasa_text"><img src="assets/KasaIcon_mobil.png" alt="Logo" style={{ maxWidth: 20, maxHeight: 20, margin: 3 }} />Kasam:</span><span class='buyuk'>Giriş yap</span></a>

                        </div>
                        {this.state.Logged === false ? (

                            <Login />
                        ) : (
                                <div id="giris">
                                    <li class="nav-item dropdown" id="ust_profil">
                                        <a href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                            <div class="media align-items-center">
                                                <div class="media-body">
                                                    <i class="material-icons">arrow_drop_down</i>

                                                    <div id="my_email">{this.state.Session.Email}</div>
                                                </div>
                                            </div>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right " x-placement="bottom-end"
                                            style={{
                                                position: "absolute", transform: "translate3d(24px, 44px, 0px)", top: 0, left: 0
                                                , willChange: "transform"
                                            }}>

                                            <a href="https://www.infiyatin.com/User/" class="dropdown-item">

                                                <span>Özet Sayfam</span>
                                            </a>
                                            <a href="https://www.infiyatin.com/User/kredilerim" class="dropdown-item">

                                                <span>Kredi Yükle</span>
                                            </a>
                                            <a href="https://www.infiyatin.com/User/siparislerim" class="dropdown-item" style={{ position: "relative" }}>

                                                <span>Siparişlerim </span>
                                            </a>
                                            <a href="https://www.infiyatin.com/User/adreslerim" class="dropdown-item">

                                                <span>Adreslerim</span>
                                            </a>
                                            <a href="https://www.infiyatin.com/User/profilim" class="dropdown-item">

                                                <span>Profilim</span>
                                            </a>
                                            <a href="https://www.infiyatin.com/Support/" class="dropdown-item">

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

                            <div id="kasam"><img src="/assets/KasaIcon.png" alt="Logo" height="50" width="50" />kasam:</div>
                            <div id="kasam_toplam"><span id="my_limit">1 </span><span id="top_tl">TL</span><i class="fas fa-plus" id="kredi_plus" data-toggle="popover" data-placement="top" data-content="Önce üye girişi yapmalısınız." data-original-title="" title=""></i>
                                <span style={{ textAlign: 'right' }}><div id="en_az">20 kez son fiyat görebilirsiniz</div></span></div>

                        </div>
                    </div>

                    <div id="top_menu_border">
                        <div id="top_menu" class="container">
                            <div class="top_menu_item "><a class="nav-item nav-link" href="satilmis-urunler.html">Satılmış ürünler</a></div>
                            <div class="top_menu_item "><a class="nav-item nav-link" href="nasil-calisir.html">Nasıl çalışır?</a></div>
                            <div class="top_menu_item " id="davet_et_kazan"><a class="nav-item nav-link" id="" href="index.php/Login/giris.html">Davet Et, Kredi Kazan</a></div>
                            <div id="desktop_durum" class="bilgi1 anasayfa gizle_mecbur">Şu anda sitede <span id="ziyaretci_text" class="ziyaretci_text">...</span> ziyaretçi, <span class="toplam_urun" id="urun_text">9</span> ürün ve <span id="toplam_indirim" class="toplam_indirim">...</span> indirim var.</div>

                            <div class="siralama_filtresi">


                                <select class="siralama_select">
                                    <option value="fiyat" selected >İndirim tutarı [TL] azalan</option>
                                    <option value="oran"  >İndirim oranı [%] azalan</option>
                                </select>





                            </div>
                        </div>


                    </div>
                </div>

                <div id="mobil_fixed">
                    <div class="top_menu_item "><a class="nav-item" href="satilmis-urunler.html">Satılmışlar</a></div>
                    <div class="top_menu_item "><a class="nav-item" href="nasil-calisir.html">Nasıl çalışır?</a></div>
                    <div class="top_menu_item "><a class="nav-item" href="index.php/Login/giris.html">Davet Et</a></div>
                </div>


                <div id="mobil_durum">Şu anda sitede <span id="ziyaretci_text" class="ziyaretci_text">...</span> ziyaretçi, <span id="urun_text" class="toplam_urun">...</span> ürün ve <span id="toplam_indirim" class="toplam_indirim">...</span> indirim var.
                    </div>
                <div id="dropdown_mobil">
                    <select class="siralama_select">
                        <option value="fiyat" selected >Sırala : Tutara göre en indirimli en üstte [TL]</option>
                        <option value="oran"  >Sırala : Orana göre en indirimli en üstte [%]</option>
                    </select>
                </div>


                <div class="container" style={{ marginBottom: 20 }} id="main_container">


                    <script async src="https://www.googletagmanager.com/gtag/js6fca?id=UA-159208896-1"></script>
                    <link href="https://infiyatin.com/assets/css/home609d.css?1608399548" rel="stylesheet" />

                    <div id="mobilhide" >

                        <div id="jssor_1" style={{ position: 'relative', margin: 0, top: 0, left: 0, width: 1140, height: 200 }}>
                            <div data-u="loading" class="jssorl-004-double-tail-spin" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                                <img style={{ marginTop: -19, position: 'relative', top: '50%', width: 38, height: 38 }} src="#" />
                            </div>
                            <div data-u="slides" style={{ cursor: 'default', position: 'relative', top: 0, left: 0, width: 1140, height: 200, overflow: 'hidden', borderRadius: 5 }}>
                                <div>
                                    <img data-u="image" src="assets/UstTanitim_tip3_Rev1.png" />
                                </div>
                                <div>
                                    <img data-u="image" src="assets/UstTanitim_tip1_Rev1.png" />
                                </div>
                                <div>
                                    <img data-u="image" src="assets/UstTanitim_tip2_Rev1.png" />
                                </div>
                            </div><a data-scale="0" href="#" style={{ display: "none", position: 'absolute' }}>carousel slider</a>
                            <div data-u="navigator" class="jssorb031" style={{ position: 'absolute', bottom: 5, right: 16 }} data-auto-center="1" data-scale="0.5" data-scale-bottom="0.75">
                                <div data-u="prototype" class="i" style={{ width: 13, height: 13 }}>
                                    <svg viewbox="0 0 16000 16000" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 100 }}>
                                        <circle class="b" cx="8000" cy="8000" r="5800"></circle>
                                    </svg>
                                </div>
                            </div>
                            <div data-u="arrowleft" class="jssora051" style={{ width: 30, height: 55, top: 0, left: 10 }} data-auto-center="2" data-scale="0.75" data-scale-left="0.75">
                                <svg viewbox="0 0 16000 16000" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                                    <polyline class="a" points="11040,1920 4960,8000 11040,14080 "></polyline>
                                </svg>
                            </div>
                            <div data-u="arrowright" class="jssora051" style={{ width: 30, height: 55, top: 0, right: 25 }} data-auto-center="2" data-scale="0.75" data-scale-right="0.75">
                                <svg viewbox="0 0 16000 16000" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                                    <polyline class="a" points="4960,1920 11040,8000 4960,14080 "></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div id="mobil_durum">

                        <div id="jssor_2" style={{ position: 'relative', margin: 0, top: 0, left: 0, width: 400, height: 200, overflow: 'hidden', visibility: 'hidden' }}>
                            <div data-u="loading" class="jssorl-004-double-tail-spin" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                                <img style={{ marginTop: -19, position: 'relative', top: '50%', width: 38, height: 38 }} src="img/double-tail-spin.html" />
                            </div>
                            <div data-u="slides" style={{ cursor: 'default', position: 'relative', top: 0, left: 0, width: 400, height: 200, overflow: 'hidden' }}>
                                <div>
                                    <a href="nasil-calisir.html"><img data-u="image" src="https://infiyatin.com/assets/MobilUstTanitim1.png" style={{ maxWidth: 400, maxHeight: 200 }} /></a>
                                </div>
                                <div>
                                    <a href="nasil-calisir.html"><img data-u="image" src="https://infiyatin.com/assets/MobilUstTanitim2.png" style={{ maxWidth: 400, maxHeight: 200 }} /></a>
                                </div>
                                <div>
                                    <a href="Product/info/53/Alt%c4%b1n%20Havale%20-%20%c3%87eyrek%20Alt%c4%b1n.html"><img data-u="image" src="assets/MobilUstTanitim3.png" style={{ maxWidth: 400, maxHeight: 200 }} /></a>
                                </div>

                            </div><a data-scale="0" href="#" style={{ display: "none", position: 'absolute' }}>image gallery</a>
                            <div data-u="prototype" class="i" style={{ width: 13, height: 13 }}>
                                <svg viewbox="0 0 16000 16000" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                                    <circle class="b" cx="8000" cy="8000" r="5800"></circle>
                                </svg>
                            </div>
                        </div>
                        <div data-u="arrowleft" class="jssora051" style={{ width: 20, height: 20, top: 0, left: 10 }} data-auto-center="2" data-scale="0.75" data-scale-left="0.75">
                            <svg viewbox="0 0 16000 16000" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                                <polyline class="a" points="11040,1920 4960,8000 11040,14080 "></polyline>
                            </svg>
                        </div>
                        <div data-u="arrowright" class="jssora051" style={{ width: 20, height: 20, top: 0, right: 10 }} data-auto-center="2" data-scale="0.75" data-scale-right="0.75" >
                            <svg viewbox="0 0 16000 16000" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                                <polyline class="a" points="4960,1920 11040,8000 4960,14080 "></polyline>
                            </svg>
                        </div >
                    </div >


                    <div class="row" style={{ marginTop: 10 }} id="index_urunler">
                        <CardList1 socket={this.props.socket} />
                        <CardList2 socket={this.props.socket} />
                        <CardList3 socket={this.props.socket} />
                    </div>

                    <div class="row" style={{ margin: 0 }}>
                        <div class="col-md-4">
                            <a href="nasil-calisir.html"><img class="slideshow" src="assets/ImageIntro350300_1.png" alt="" /></a>           </div>
                        <div class="col-md-4">
                            <a href="nasil-calisir.html"><img class="slideshow" src="assets/ImageIntro350300_2.png" alt="" /></a>
                        </div>
                        <div class="col-md-4">
                            <a href="nasil-calisir.html"><img class="slideshow" src="assets/ImageIntro350300_3.png" alt="" /></a>
                        </div>
                    </div>

                    <div id="mobilhide" style={{ paddingLeft: 5 }}>
                        <img width="1090px" height="400px" class="slideshow" alt="" src="assets/AnasayfaTanitimResim.png" />
                    </div>
                </div >
            </div >


        )
    }

}