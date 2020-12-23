import { useEffect, useState } from "react";

function SideBar({ Oturum }) {
  const [UserSession, SetUserSession] = useState("");
  useEffect(() => {
    Oturum.then((resp) => SetUserSession(resp.data.data.data[0]));
  });
  return (
    <div class="sidebar sidebar-light sidebar-main sidebar-expand-md">
      <div class="sidebar-mobile-toggler text-center">
        <a href="#" class="sidebar-mobile-main-toggle">
          <i class="icon-arrow-left8"></i>
        </a>
        <span class="font-weight-semibold">Menü</span>
        <a href="#" class="sidebar-mobile-expand">
          <i class="icon-screen-full"></i>
          <i class="icon-screen-normal"></i>
        </a>
      </div>
      <div class="sidebar-content">
        <div class="sidebar-user-material">
          <div class="sidebar-user-material-body">
            <div class="card-body text-center">
              <a href="#">
                <img
                  src="data:image/png;base64,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"
                  class="img-fluid rounded-circle shadow-1 mb-3"
                  width="200"
                  height="200"
                  alt
                />
              </a>
              <h6 class="mb-0 text-white text-shadow-dark">
                {UserSession.Name}
              </h6>
              <span class="font-size-sm text-white text-shadow-dark">
                {UserSession.Email}
              </span>
            </div>

            <div class="sidebar-user-material-footer">
              <a
                href="#user-nav"
                class="d-flex justify-content-between align-items-center text-shadow-dark dropdown-toggle"
                data-toggle="collapse"
              >
                <span>Kullanıcı İşlemleri</span>
              </a>
            </div>
          </div>

          <div class="collapse" id="user-nav">
            <ul class="nav nav-sidebar">
              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="icon-user-plus"></i>
                  <span>Profilim</span>
                </a>
              </li>

              <li class="nav-item">
                <a href="#" class="nav-link">
                  <i class="icon-comment-discussion"></i>
                  <span>Mesajlarım</span>
                  <span class="badge bg-teal-400 badge-pill align-self-center ml-auto">
                    58
                  </span>
                </a>
              </li>

              <li class="nav-item">
                <a href="/User/Logout" class="nav-link">
                  <i class="icon-switch2"></i>
                  <span>Çıkış Yap</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="card card-sidebar-mobile">
          <ul class="nav nav-sidebar" data-nav-type="accordion">
            <li class="nav-item">
              <a href="/" class="nav-link active">
                <i class="icon-home4"></i>
                <span>Anasayfa</span>
              </a>
            </li>

            <li class="nav-item">
              <a href="/User" class="nav-link ">
                <i class="icon-users"></i>
                <span>Kullanıcı İşlemleri</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="/Category" class="nav-link ">
                <i class="icon-copy"></i>
                <span>Kategori</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="/Product" class="nav-link ">
                <i class="icon-copy"></i>
                <span>Ürün</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="/Order" class="nav-link ">
                <i class="icon-copy"></i>
                <span>Siparişler</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="/Odeme" class="nav-link ">
                <i class="icon-copy"></i>
                <span>Ödeme Dökümleri</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="/Pages" class="nav-link ">
                <i class="icon-copy"></i>
                <span>Sayfalar</span>
              </a>
            </li>
            <li class="nav-item-header">
              <i class="icon-menu" title="Raporlar"></i>
            </li>
            <li class="nav-item nav-item-submenu">
              <a href="#" class="nav-link">
                <i class="icon-file-css"></i>
                <span>Destek Talepleri</span>
              </a>
              <ul
                class="nav nav-group-sub"
                data-submenu-title="Şube  & Transfer"
              >
                <li class="nav-item">
                  <a href="/Ticket" class="nav-link">
                    Destek Talepleri
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/Soru" class="nav-link">
                    Sorular
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a href="/" class="nav-link ">
                <i class="icon-home4"></i>
                <span>Site Ayarları</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
