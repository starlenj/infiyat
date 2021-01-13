import { Component, React } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer class="footer">
        <div class="container bottom_border">
          <a data-text="infiyatin.com Lüks herkesin hakkıdır!" data-link="https://www.infiyatin.com/" class="whatsapp w3_whatsapp_btn w3_whatsapp_btn_large">Whatsapp ile Paylaş</a>

          <div class="row">
            <div class=" col-sm-4 col-md col-sm-4  col-12 col">


              <h5 class="headin5_amrc col_white_amrc pt2">infiyatin.com</h5>
              <p class="mb10">Toplam kayıtlı üyemiz : 20<br />
                Şimdiye kadar yapılan </p><p>toplam indirim tutarı : 19.45 TL</p>


              <p><i class="fa fa fa-envelope"></i> info@infiyatin.com  </p>


            </div>


            <div class=" col-sm-4 col-md  col-6 col">
              <h5 class="headin5_amrc col_white_amrc pt2">Nasıl çalışır?</h5>
              <ul class="footer_ul_amrc">
                <li><a href="https://www.infiyatin.com/page/hakkimizda">Hakkimizda</a></li></ul>


              <a href="https://www.facebook.com/Infiyatincom-113560496994888" target="_blank"><img data-u="image" style={{ maxWidth: 30 }} src="/assets/facebook_logos.png" /></a>
              <a href="https://twitter.com/infiyatin" target="_blank"><img data-u="image" style={{ maxWidth: 30 }} src="/assets/twitter_logo.png" /></a>
              <a href="https://www.instagram.com/infiyatin/" target="_blank"><img data-u="image" style={{ maxWidth: 30 }} src="/assets/instagram_logo.png" /></a>

            </div>


            <div class=" col-sm-4 col-md  col-6 col">
              <h5 class="headin5_amrc col_white_amrc pt2"><a href="https://www.infiyatin.com/sozlesmeler" style={{ color: "white", textDecoration: "none" }}>Sözleşmeler</a></h5><a href="https://www.infiyatin.com/sozlesmeler" style={{ color: "white", textDecoration: "none" }}>
              </a><ul class="footer_ul_amrc"><a href="https://www.infiyatin.com/sozlesmeler" style={{ color: "white", textDecoration: "none" }}>
              </a><li><a href="https://www.infiyatin.com/sozlesmeler" style={{ color: "white", textDecoration: "none" }}></a><a href="https://www.infiyatin.com/sozlesmeler/hizmet">Üyelik Sözleşmesi</a></li></ul>
            </div>


            <div class=" col-sm-4 col-md  col-12 col">
              <h5 class="headin5_amrc col_white_amrc pt2"><a href="https://www.infiyatin.com/yardim" style={{ color: "white", textDecoration: "none" }}>Yardım</a></h5>

            </div>



          </div></div></footer>
    );
  }
}
