import { React, Component } from "react";

export default class Header extends Component {
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
          <div id="header" class="container">
            <div id="mobil_menu">
              <i class="material-icons">menu</i>
            </div>

            <div id="logom">
              <a href="index.html">
                <img
                  style={{ maxWidth: 180 }}
                  src="assets/logo.png"
                  alt="Logo"
                />
              </a>
            </div>

            <div id="logo_mobil" class="mobil_butonlar">
              <a href="Login/giris.html">
                <span id="mobil_kasa_text">
                  <img
                    src="assets/KasaIcon_mobil.png"
                    alt="Logo"
                    style={{ maxWidth: 20, maxHeight: 20, margin: 3 }}
                  />
                  Kasam:
                </span>
                <span class="buyuk">Giriş yap</span>
              </a>
            </div>

            <div id="giris">
              <form
                action="https://www.infiyatin.com/Login/giris"
                method="post"
                id="giris_formumuz"
              >
                <div id="inputlar">
                  <input
                    type="text"
                    name="kullanici_adi"
                    class="form-control"
                    placeholder="E-postanız"
                    style={{ marginRight: 3 }}
                    autocomplete="nope"
                    required="true"
                  />
                  <input
                    type="password"
                    name="kullanici_sifre"
                    class="form-control"
                    placeholder="Şifreniz"
                    autocomplete="nope"
                    required="true"
                  />
                </div>
                <div id="butonlar">
                  <button type="submit" id="giris">
                    Giriş
                  </button>
                  <button
                    type="button"
                    id="kayit"
                    onclick="location.href = 'Login/kayit.html';"
                  >
                    Üye Ol
                  </button>
                  <a
                    id="g_login"
                    href="https://accounts.google.com/ServiceLogin432a.html"
                  >
                    <img
                      src="assets/google.png"
                      className="social_login_icon"
                    />
                  </a>
                  <a id="f_login" href="../www.facebook.com/login88a8.html">
                    <img
                      src="assets/facebook.png"
                      className="social_login_icon"
                    />
                  </a>
                </div>
              </form>
            </div>
          </div>

          <div id="kasa_alani">
            <div id="kasam">
              <img
                src="https://www.infiyatin.com/assets/KasaIcon.png"
                alt="Logo"
                height="50"
                width="50"
              />
              kasam:
            </div>
            <div id="kasam_toplam">
              <span id="my_limit">1 </span>
              <span id="top_tl">TL</span>
              <i
                class="fas fa-plus"
                id="kredi_plus"
                data-toggle="popover"
                data-placement="top"
                data-content="Önce üye girişi yapmalısınız."
              ></i>
              <span style={{ textAlign: "right" }}>
                <div id="en_az">20 kez son fiyat görebilirsiniz</div>
              </span>
            </div>
          </div>
        </div>

        <div id="top_menu_border">
          <div id="top_menu" class="container">
            <div class="top_menu_item ">
              <a class="nav-item nav-link" href="satilmis-urunler.html">
                Satılmış ürünler
              </a>
            </div>
            <div class="top_menu_item ">
              <a class="nav-item nav-link" href="nasil-calisir.html">
                Nasıl çalışır?
              </a>
            </div>
            <div class="top_menu_item " id="davet_et_kazan">
              <a
                class="nav-item nav-link"
                id=""
                href="index.php/Login/giris.html"
              >
                Davet Et, Kredi Kazan
              </a>
            </div>
            <div id="desktop_durum" class="bilgi1 anasayfa gizle_mecbur">
              Şu anda sitede{" "}
              <span id="ziyaretci_text" class="ziyaretci_text">
                ...
              </span>{" "}
              ziyaretçi,{" "}
              <span class="toplam_urun" id="urun_text">
                9
              </span>{" "}
              ürün ve{" "}
              <span id="toplam_indirim" class="toplam_indirim">
                ...
              </span>{" "}
              indirim var.
            </div>

            <div class="siralama_filtresi">
              <select class="siralama_select">
                <option value="fiyat" selected>
                  İndirim tutarı [TL] azalan
                </option>
                <option value="oran">İndirim oranı [%] azalan</option>
              </select>
            </div>
          </div>
        </div>
        <div
          id="jssor_1"
          style={{
            position: "relative",
            margin: 0,
            top: 0,
            left: 0,
            width: 1140,
            height: 200,
            overflow: "hidden",
            visibility: "hidden",
          }}
        >
          <div
            data-u="loading"
            class="jssorl-004-double-tail-spin"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              textAlign: "center",
              backgroundColor: "rgba(0,0,0,0.7)",
            }}
          >
            <img
              style={{
                marginTop: -19,
                position: "relative",
                top: "50%",
                width: 38,
                height: 38,
              }}
              src=""
            />
          </div>
          <div
            data-u="slides"
            style={{
              cursor: "default",
              position: "relative",
              top: 0,
              left: 0,
              width: 1140,
              height: 200,
              overflow: "hidden",
              borderRadius: 5,
            }}
          >
            <div>
              <img
                data-u="image"
                src="https://infiyatin.com/assets/UstTanitim_tip3_Rev1.png"
              />
            </div>
            <div>
              <img
                data-u="image"
                src="https://infiyatin.com/assets/UstTanitim_tip1_Rev1.png"
              />
            </div>
            <div>
              <img
                data-u="image"
                src="https://infiyatin.com/assets/UstTanitim_tip2_Rev1.png"
              />
            </div>
          </div>
          <a
            data-scale="0"
            href=""
            style={{ display: "none", position: "absolute" }}
          >
            carousel slider
          </a>
          <div
            data-u="navigator"
            class="jssorb031"
            style={{ position: "absolute", bottom: 5, right: 16 }}
            data-autocenter="1"
            data-scale="0.5"
            data-scale-bottom="0.75"
          >
            <div data-u="prototype" class="i" style={{ width: 13, height: 13 }}>
              <svg
                viewbox="0 0 16000 16000"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              >
                <circle class="b" cx="8000" cy="8000" r="5800"></circle>
              </svg>
            </div>
          </div>
        </div>
        <script type="text/javascript">jssor_1_slider_init();</script>
        <div class="row" style={{ marginTop: 10 }} id="index_urunler">
          <div class="col-md-4">
            <div class="product_item" data_id="29" rate="0.05" ilk_fiyat="1000">
              <span class="urun_ilk_fiyat" style={{ display: "none" }}>
                1000
              </span>
              <div class="carbox">
                <div class="card-image">
                  <span class="card-notify-badge mavi">
                    Son Fiyat <span class="duser_color">0.05 TL</span> Düşer{" "}
                  </span>

                  <a
                    href="https://www.infiyatin.com/Product/info/29/Xiaomi%20Mi%20Band%204%20Ak%C4%B1ll%C4%B1%20Bileklik%20Siyah"
                    class="card-title card-link"
                  >
                    <img
                      class="img-carbox"
                      src="https://www.infiyatin.com//uploads/305e8452b9da073132a7443c3bf631f8.jpg"
                      alt="Xiaomi Mi Band 4 Akıllı Bileklik Siyah"
                    />
                    <span class="card-notify-badge2 ">
                      <h6>Xiaomi Mi Band 4 Akıllı Bileklik Siyah</h6>
                    </span>
                  </a>
                  <div class="price">
                    <div class="badge badge-son">
                      Son fiyata bakan son 5 kişi
                    </div>
                    <span class="h7 ilk_fiyat_al_urun" data_id="29">
                      ilk fiyattan al{" "}
                    </span>
                    <div class="ilk_fiyat">
                      <div class="ilk_fiyat_kucuk_text">İlk Fiyat</div>
                      <span class="ilk_fiyat_fiyat">
                        1000.00 <span class="tl_kucuk">TL</span>
                      </span>
                    </div>
                  </div>

                  <ul class="islem_secmisi"></ul>
                  <div class="card-footer">
                    <div class="urun_son_fiyat">
                      <div class="son_fiyat_text_kucuk">Son Fiyat</div>
                      <span class="urun_acik_fiyat">? ? ? ?</span> TL
                    </div>
                    <div
                      class="son_fiyat_goster"
                      data-toggle="popover"
                      data-placement="top"
                      data-content="Son Fiyatı görmek için üye olmalısınız."
                    >
                      <div class="son_text" data="0">
                        Son Fiyat Göster
                      </div>
                    </div>

                    <button class="son_fiyattan_hemen_al disabled">
                      Son Fiyattan Hemen Al
                    </button>
                    <div class="gorme_sirasi"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="product_item" data_id="30" rate="0.05" ilk_fiyat="100">
              <span class="urun_ilk_fiyat" style={{ display: "none" }}>
                100
              </span>
              <div class="carbox">
                <div class="card-image">
                  <span class="card-notify-badge mavi">
                    Son Fiyat <span class="duser_color">0.05 TL</span> Düşer{" "}
                  </span>

                  <a
                    href="https://www.infiyatin.com/Product/info/30/Test1"
                    class="card-title card-link"
                  >
                    <img
                      class="img-carbox"
                      src="https://www.infiyatin.com//uploads/b530e20116685e2fe388ff43ef467458.jpg"
                      alt="Test1"
                    />
                    <span class="card-notify-badge2 ">
                      <h6>Test1</h6>
                    </span>
                  </a>
                  <div class="price">
                    <div class="badge badge-son">
                      Son fiyata bakan son 5 kişi
                    </div>
                    <span class="h7 ilk_fiyat_al_urun" data_id="30">
                      ilk fiyattan al{" "}
                    </span>
                    <div class="ilk_fiyat">
                      <div class="ilk_fiyat_kucuk_text">İlk Fiyat</div>
                      <span class="ilk_fiyat_fiyat">
                        100.00 <span class="tl_kucuk">TL</span>
                      </span>
                    </div>
                  </div>

                  <ul class="islem_secmisi"></ul>
                  <div class="card-footer">
                    <div class="urun_son_fiyat">
                      <div class="son_fiyat_text_kucuk">Son Fiyat</div>
                      <span class="urun_acik_fiyat">? ? ? ?</span> TL
                    </div>
                    <div
                      class="son_fiyat_goster"
                      data-toggle="popover"
                      data-placement="top"
                      data-content="Son Fiyatı görmek için üye olmalısınız."
                    >
                      <div class="son_text" data="0">
                        Son Fiyat Göster
                      </div>
                    </div>

                    <button class="son_fiyattan_hemen_al disabled">
                      Son Fiyattan Hemen Al
                    </button>
                    <div class="gorme_sirasi"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="product_item" data_id="35" rate="0.05" ilk_fiyat="200">
              <span class="urun_ilk_fiyat" style={{ display: "none" }}>
                200
              </span>
              <div class="carbox">
                <div class="card-image">
                  <span class="card-notify-badge mavi">
                    Son Fiyat <span class="duser_color">0.05 TL</span> Düşer{" "}
                  </span>

                  <a
                    href="https://www.infiyatin.com/Product/info/35/Test6"
                    class="card-title card-link"
                  >
                    <img
                      class="img-carbox"
                      src="https://www.infiyatin.com//uploads/be0394982088f76ce235773918db9535.jpg"
                      alt="Test6"
                    />
                    <span class="card-notify-badge2 ">
                      <h6>Test6</h6>
                    </span>
                  </a>
                  <div class="price">
                    <div class="badge badge-son">
                      Son fiyata bakan son 5 kişi
                    </div>
                    <span class="h7 ilk_fiyat_al_urun" data_id="35">
                      ilk fiyattan al{" "}
                    </span>
                    <div class="ilk_fiyat">
                      <div class="ilk_fiyat_kucuk_text">İlk Fiyat</div>
                      <span class="ilk_fiyat_fiyat">
                        200.00 <span class="tl_kucuk">TL</span>
                      </span>
                    </div>
                  </div>

                  <ul class="islem_secmisi"></ul>
                  <div class="card-footer">
                    <div class="urun_son_fiyat">
                      <div class="son_fiyat_text_kucuk">Son Fiyat</div>
                      <span class="urun_acik_fiyat">? ? ? ?</span> TL
                    </div>
                    <div
                      class="son_fiyat_goster"
                      data-toggle="popover"
                      data-placement="top"
                      data-content="Son Fiyatı görmek için üye olmalısınız."
                    >
                      <div class="son_text" data="0">
                        Son Fiyat Göster
                      </div>
                    </div>

                    <button class="son_fiyattan_hemen_al disabled">
                      Son Fiyattan Hemen Al
                    </button>
                    <div class="gorme_sirasi"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="product_item" data_id="36" rate="0.05" ilk_fiyat="250">
              <span class="urun_ilk_fiyat" style={{ display: "none" }}>
                250
              </span>
              <div class="carbox">
                <div class="card-image">
                  <span class="card-notify-badge turuncu">
                    Son Fiyat <span class="duser_color">0.50 ₺</span> Düşer{" "}
                  </span>

                  <a
                    href="https://www.infiyatin.com/Product/info/36/Test7"
                    class="card-title card-link"
                  >
                    <img
                      class="img-carbox"
                      src="https://www.infiyatin.com//uploads/c8e3ff4c411cca28d0802e3e88695c1d.jpg"
                      alt="Test7"
                    />
                    <span class="card-notify-badge2 ">
                      <h6>Test7</h6>
                    </span>
                  </a>
                  <div class="price">
                    <div class="badge badge-son">
                      Son fiyata bakan son 5 kişi
                    </div>
                    <span class="h7 ilk_fiyat_al_urun" data_id="36">
                      ilk fiyattan al{" "}
                    </span>
                    <div class="ilk_fiyat">
                      <div class="ilk_fiyat_kucuk_text">İlk Fiyat</div>
                      <span class="ilk_fiyat_fiyat">
                        250.00 <span class="tl_kucuk">TL</span>
                      </span>
                    </div>
                  </div>

                  <ul class="islem_secmisi"></ul>
                  <div class="card-footer">
                    <div class="urun_son_fiyat">
                      <div class="son_fiyat_text_kucuk">Son Fiyat</div>
                      <span class="urun_acik_fiyat">? ? ? ?</span> TL
                    </div>
                    <div
                      class="son_fiyat_goster"
                      data-toggle="popover"
                      data-placement="top"
                      data-content="Son Fiyatı görmek için üye olmalısınız."
                    >
                      <div class="son_text" data="0">
                        Son Fiyat Göster
                      </div>
                    </div>

                    <button class="son_fiyattan_hemen_al disabled">
                      Son Fiyattan Hemen Al
                    </button>
                    <div class="gorme_sirasi"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="product_item" data_id="31" rate="0.05" ilk_fiyat="500">
              <span class="urun_ilk_fiyat" style={{ display: "none" }}>
                500
              </span>
              <div class="carbox">
                <div class="card-image">
                  <span class="card-notify-badge turuncu">
                    Son Fiyat <span class="duser_color">0.50 ₺</span> Düşer{" "}
                  </span>

                  <a
                    href="https://www.infiyatin.com/Product/info/31/Test2"
                    class="card-title card-link"
                  >
                    <img
                      class="img-carbox"
                      src="https://www.infiyatin.com//uploads/0c73409ed5c7059c735df28f89e5ef01.jpg"
                      alt="Test2"
                    />
                    <span class="card-notify-badge2 ">
                      <h6>Test2</h6>
                    </span>
                  </a>
                  <div class="price">
                    <div class="badge badge-son">
                      Son fiyata bakan son 5 kişi
                    </div>
                    <span class="h7 ilk_fiyat_al_urun" data_id="31">
                      ilk fiyattan al{" "}
                    </span>
                    <div class="ilk_fiyat">
                      <div class="ilk_fiyat_kucuk_text">İlk Fiyat</div>
                      <span class="ilk_fiyat_fiyat">
                        500.00 <span class="tl_kucuk">TL</span>
                      </span>
                    </div>
                  </div>

                  <ul class="islem_secmisi"></ul>
                  <div class="card-footer">
                    <div class="urun_son_fiyat">
                      <div class="son_fiyat_text_kucuk">Son Fiyat</div>
                      <span class="urun_acik_fiyat">? ? ? ?</span> TL
                    </div>
                    <div
                      class="son_fiyat_goster"
                      data-toggle="popover"
                      data-placement="top"
                      data-content="Son Fiyatı görmek için üye olmalısınız."
                    >
                      <div class="son_text" data="0">
                        Son Fiyat Göster
                      </div>
                    </div>

                    <button class="son_fiyattan_hemen_al disabled">
                      Son Fiyattan Hemen Al
                    </button>
                    <div class="gorme_sirasi"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="product_item" data_id="34" rate="0.05" ilk_fiyat="1000">
              <span class="urun_ilk_fiyat" style={{ display: "none" }}>
                1000
              </span>
              <div class="carbox">
                <div class="card-image">
                  <span class="card-notify-badge turuncu">
                    Son Fiyat <span class="duser_color">0.50 ₺</span> Düşer{" "}
                  </span>

                  <a
                    href="https://www.infiyatin.com/Product/info/34/Test5"
                    class="card-title card-link"
                  >
                    <img
                      class="img-carbox"
                      src="https://www.infiyatin.com//uploads/c71d81d6b16fa6c03eb62938e27fd992.jpg"
                      alt="Test5"
                    />
                    <span class="card-notify-badge2 ">
                      <h6>Test5</h6>
                    </span>
                  </a>
                  <div class="price">
                    <div class="badge badge-son">
                      Son fiyata bakan son 5 kişi
                    </div>
                    <span class="h7 ilk_fiyat_al_urun" data_id="34">
                      ilk fiyattan al{" "}
                    </span>
                    <div class="ilk_fiyat">
                      <div class="ilk_fiyat_kucuk_text">İlk Fiyat</div>
                      <span class="ilk_fiyat_fiyat">
                        1000.00 <span class="tl_kucuk">TL</span>
                      </span>
                    </div>
                  </div>

                  <ul class="islem_secmisi"></ul>
                  <div class="card-footer">
                    <div class="urun_son_fiyat">
                      <div class="son_fiyat_text_kucuk">Son Fiyat</div>
                      <span class="urun_acik_fiyat">? ? ? ?</span> TL
                    </div>
                    <div
                      class="son_fiyat_goster"
                      data-toggle="popover"
                      data-placement="top"
                      data-content="Son Fiyatı görmek için üye olmalısınız."
                    >
                      <div class="son_text" data="0">
                        Son Fiyat Göster
                      </div>
                    </div>

                    <button class="son_fiyattan_hemen_al disabled">
                      Son Fiyattan Hemen Al
                    </button>
                    <div class="gorme_sirasi"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="product_item" data_id="33" rate="0.05" ilk_fiyat="1000">
              <span class="urun_ilk_fiyat" style={{ display: "none" }}>
                1000
              </span>
              <div class="carbox">
                <div class="card-image">
                  <span class="card-notify-badge pembe">
                    Son Fiyat <span class="duser_color">1.00 ₺</span> Düşer{" "}
                  </span>

                  <a
                    href="https://www.infiyatin.com/Product/info/33/Test4"
                    class="card-title card-link"
                  >
                    <img
                      class="img-carbox"
                      src="https://www.infiyatin.com//uploads/fddaaf99cfaa36e49346ead30c5751a0.jpg"
                      alt="Test4"
                    />
                    <span class="card-notify-badge2 ">
                      <h6>Test4</h6>
                    </span>
                  </a>
                  <div class="price">
                    <div class="badge badge-son">
                      Son fiyata bakan son 5 kişi
                    </div>
                    <span class="h7 ilk_fiyat_al_urun" data_id="33">
                      ilk fiyattan al{" "}
                    </span>
                    <div class="ilk_fiyat">
                      <div class="ilk_fiyat_kucuk_text">İlk Fiyat</div>
                      <span class="ilk_fiyat_fiyat">
                        1000.00 <span class="tl_kucuk">TL</span>
                      </span>
                    </div>
                  </div>

                  <ul class="islem_secmisi"></ul>
                  <div class="card-footer">
                    <div class="urun_son_fiyat">
                      <div class="son_fiyat_text_kucuk">Son Fiyat</div>
                      <span class="urun_acik_fiyat">? ? ? ?</span> TL
                    </div>
                    <div
                      class="son_fiyat_goster"
                      data-toggle="popover"
                      data-placement="top"
                      data-content="Son Fiyatı görmek için üye olmalısınız."
                    >
                      <div class="son_text" data="0">
                        Son Fiyat Göster
                      </div>
                    </div>

                    <button class="son_fiyattan_hemen_al disabled">
                      Son Fiyattan Hemen Al
                    </button>
                    <div class="gorme_sirasi"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="product_item" data_id="37" rate="0.05" ilk_fiyat="1000">
              <span class="urun_ilk_fiyat" style={{ display: "none" }}>
                1000
              </span>
              <div class="carbox">
                <div class="card-image">
                  <span class="card-notify-badge pembe">
                    Son Fiyat <span class="duser_color">1.00 ₺</span> Düşer{" "}
                  </span>

                  <a
                    href="https://www.infiyatin.com/Product/info/37/Test8"
                    class="card-title card-link"
                  >
                    <img
                      class="img-carbox"
                      src="https://www.infiyatin.com//uploads/f711196183e5876c2f7abe386c9aeed5.jpg"
                      alt="Test8"
                    />
                    <span class="card-notify-badge2 ">
                      <h6>Test8</h6>
                    </span>
                  </a>
                  <div class="price">
                    <div class="badge badge-son">
                      Son fiyata bakan son 5 kişi
                    </div>
                    <span class="h7 ilk_fiyat_al_urun" data_id="37">
                      ilk fiyattan al{" "}
                    </span>
                    <div class="ilk_fiyat">
                      <div class="ilk_fiyat_kucuk_text">İlk Fiyat</div>
                      <span class="ilk_fiyat_fiyat">
                        1000.00 <span class="tl_kucuk">TL</span>
                      </span>
                    </div>
                  </div>

                  <ul class="islem_secmisi"></ul>
                  <div class="card-footer">
                    <div class="urun_son_fiyat">
                      <div class="son_fiyat_text_kucuk">Son Fiyat</div>
                      <span class="urun_acik_fiyat">? ? ? ?</span> TL
                    </div>
                    <div
                      class="son_fiyat_goster"
                      data-toggle="popover"
                      data-placement="top"
                      data-content="Son Fiyatı görmek için üye olmalısınız."
                    >
                      <div class="son_text" data="0">
                        Son Fiyat Göster
                      </div>
                    </div>

                    <button class="son_fiyattan_hemen_al disabled">
                      Son Fiyattan Hemen Al
                    </button>
                    <div class="gorme_sirasi"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="product_item" data_id="0" rate="0.05" ilk_fiyat="0">
              <span class="urun_ilk_fiyat" style={{ display: "none" }}>
                0
              </span>
              <div class="carbox">
                <div class="card-image">
                  <span class="card-notify-badge pembe">
                    Son Fiyat <span class="duser_color">1.00 ₺</span> Düşer{" "}
                  </span>

                  <a
                    href="https://www.infiyatin.com/Product/info/0/Yeni%20%C3%BCr%C3%BCn%20haz%C4%B1rlan%C4%B1yor"
                    class="card-title card-link"
                  >
                    <img
                      class="img-carbox"
                      src="https://www.infiyatin.com//uploads/yeni_urun.png"
                      alt="Yeni ürün hazırlanıyor"
                    />
                    <span class="card-notify-badge2 ">
                      <h6>Yeni ürün hazırlanıyor</h6>
                    </span>
                  </a>
                  <div class="price">
                    <div class="badge badge-son">
                      Son fiyata bakan son 5 kişi
                    </div>
                    <span class="h7 ilk_fiyat_al_urun" data_id="0">
                      ilk fiyattan al{" "}
                    </span>
                    <div class="ilk_fiyat">
                      <div class="ilk_fiyat_kucuk_text">İlk Fiyat</div>
                      <span class="ilk_fiyat_fiyat">
                        0.00 <span class="tl_kucuk">TL</span>
                      </span>
                    </div>
                  </div>

                  <ul class="islem_secmisi"></ul>
                  <div class="card-footer">
                    <div class="urun_son_fiyat">
                      <div class="son_fiyat_text_kucuk">Son Fiyat</div>
                      <span class="urun_acik_fiyat">? ? ? ?</span> TL
                    </div>
                    <div
                      class="son_fiyat_goster"
                      data-toggle="popover"
                      data-placement="top"
                      data-content="Son Fiyatı görmek için üye olmalısınız."
                    >
                      <div class="son_text" data="0">
                        Son Fiyat Göster
                      </div>
                    </div>

                    <button class="son_fiyattan_hemen_al disabled">
                      Son Fiyattan Hemen Al
                    </button>
                    <div class="gorme_sirasi"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
