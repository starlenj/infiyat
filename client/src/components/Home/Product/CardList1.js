import { React, Component } from "react";
import { Post } from '../../../helper/service';
export default class HomePageProductCard extends Component {
  state = { Product: [], Session: [], SonFiyatList: [] };
  constructor(props) {
    super(props);
    this.props.session.then((Response) =>
      this.setState({ Session: Response.data.data.data[0] })
    );
  }
  componentDidMount() {
    this.GetProductList();
  }
  async GetProductList() {
    try {
      var Data = []
      let ProductList = await Post("GetProductWithCategory"
        , { CategoryId: "0.05" });
      ProductList.data.map(async (Product) => {
        let FiyatList = await this.GetSonFiyatList(Product);
        Data.push(
          {
            ...Product,
            FiyatList: FiyatList.data
          }
        );
        this.setState({ Product: Data });
      })

      console.log(this.state.Product);
    } catch (e) { }
  }
  async GetSonFiyatList(Product) {
    try {
      return await Post("GetProductFiyatList"
        , { ProductId: Product._id });
    } catch (e) { console.error(e) }
  }
  render() {
    return (
      <div class="col-md-4">
        {this.state.Product.length > 0 &&
          this.state.Product.sort((a, b) => (a.Price > b.Price ? -1 : 1)).map(

            (Product) => {
              console.log(this.state.Product);
              return (
                <div
                  class="product_item"
                  data_id="29"
                  rate="0.05"
                  ilk_fiyat="1000"
                >
                  <div class="carbox">
                    <div class="card-image">
                      <span class="card-notify-badge mavi">
                        Son Fiyat <span class="duser_color">0.05 TL</span> Düşer{" "}
                      </span>

                      <a
                        href="Product/info/29/Xiaomi%20Mi%20Band%204%20Ak%c4%b1ll%c4%b1%20Bileklik%20Siyah.html"
                        class="card-title card-link"
                      >
                        <img
                          class="img-carbox"
                          src={
                            "http://localhost:4000/ProductImages/" +
                            Product.ProfilePicture
                          }
                          alt={Product.Name}
                        />
                        <span class="card-notify-badge2 ">
                          <h6>{Product.Name}</h6>
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
                            {Product.Price} <span class="tl_kucuk">TL</span>
                          </span>
                        </div>
                      </div>

                      <ul class="islem_secmisi">
                        {Product.FiyatList &&
                          Product.FiyatList.map((fiyat, index) => {
                            console.log(fiyat);
                            return (
                              <li class={"my_last_5_id_" + index}>
                                <div class="kullanan">a***e@h***.***</div>
                                <div class="arrow"></div>
                                <div class="zaman">25/11/2020 22:26:06</div>
                              </li>
                            )
                          })}
                      </ul>
                      <div class="card-footer">
                        <div class="urun_son_fiyat">
                          <div class="son_fiyat_text_kucuk">Son Fiyat </div>
                          <span class="urun_acik_fiyat">? ? ? ?</span> TL
                        </div>
                        <div
                          class="son_fiyat_goster"
                          onClick={() => this.SonFiyatGor(Product._id)}
                          data-toggle="popover"
                          data-placement="top"
                          data-content="Son Fiyatı görmek için üye olmalısınız."
                        >
                          <div class="son_text" data="0.html">
                            Son Fiyat Göster
                          </div>
                        </div>

                        <button class="son_fiyattan_hemen_al ">
                          Son Fiyattan Hemen Al
                        </button>
                        <div class="gorme_sirasi"></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          )}
      </div>
    );
  }
}
