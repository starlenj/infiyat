import { React, Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { SetSocketId } from '../reducer/actions/socket_action'
import { GetBakiye } from '../reducer/actions/user_action'
import { connect } from 'react-redux';
import CardList1 from '../components/Home/Product/CardList1'
import CardList2 from '../components/Home/Product/CardList2'
import CardList3 from '../components/Home/Product/CardList3'
import { Post } from "../helper/service";
class Home extends Component {
  componentDidMount() {
    this.props.socket.on("your id", (data) => this.props.SetSocketId(data));
    this.props.socket.on("toplam_kullanici", (data) => console.log(data));
    console.log("HOME", Array.from(this.props.session));
  }


  render() {
    return (
      <div>
        <Header socket={this.props.socket} session={this.props.session} />

        <div class="container" style={{ marginBottom: 20 }} id="main_container">
          <link
            href="https://infiyatin.com/assets/css/home609d.css?1608399548"
            rel="stylesheet"
          />

          <div id="mobilhide">
            <div
              id="jssor_1"
              style={{
                position: "relative",
                margin: 0,
                top: 0,
                left: 0,
                width: 1140,
                height: 200,
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
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
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
                  src="#"
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
                  <img data-u="image" src="assets/UstTanitim_tip3_Rev1.png" />
                </div>
                <div>
                  <img data-u="image" src="assets/UstTanitim_tip1_Rev1.png" />
                </div>
                <div>
                  <img data-u="image" src="assets/UstTanitim_tip2_Rev1.png" />
                </div>
              </div>
              <a
                data-scale="0"
                href="#"
                style={{ display: "none", position: "absolute" }}
              >
                carousel slider
              </a>
              <div
                data-u="navigator"
                class="jssorb031"
                style={{ position: "absolute", bottom: 5, right: 16 }}
                data-auto-center="1"
                data-scale="0.5"
                data-scale-bottom="0.75"
              >
                <div
                  data-u="prototype"
                  class="i"
                  style={{ width: 13, height: 13 }}
                >
                  <svg
                    viewbox="0 0 16000 16000"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: 100,
                    }}
                  >
                    <circle class="b" cx="8000" cy="8000" r="5800"></circle>
                  </svg>
                </div>
              </div>
              <div
                data-u="arrowleft"
                class="jssora051"
                style={{ width: 30, height: 55, top: 0, left: 10 }}
                data-auto-center="2"
                data-scale="0.75"
                data-scale-left="0.75"
              >
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
                  <polyline
                    class="a"
                    points="11040,1920 4960,8000 11040,14080 "
                  ></polyline>
                </svg>
              </div>
              <div
                data-u="arrowright"
                class="jssora051"
                style={{ width: 30, height: 55, top: 0, right: 25 }}
                data-auto-center="2"
                data-scale="0.75"
                data-scale-right="0.75"
              >
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
                  <polyline
                    class="a"
                    points="4960,1920 11040,8000 4960,14080 "
                  ></polyline>
                </svg>
              </div>
            </div>
          </div>

          <div id="mobil_durum">
            <div
              id="jssor_2"
              style={{
                position: "relative",
                margin: 0,
                top: 0,
                left: 0,
                width: 400,
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
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
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
                  src="img/double-tail-spin.html"
                />
              </div>
              <div
                data-u="slides"
                style={{
                  cursor: "default",
                  position: "relative",
                  top: 0,
                  left: 0,
                  width: 400,
                  height: 200,
                  overflow: "hidden",
                }}
              >
                <div>
                  <a href="nasil-calisir.html">
                    <img
                      data-u="image"
                      src="https://infiyatin.com/assets/MobilUstTanitim1.png"
                      style={{ maxWidth: 400, maxHeight: 200 }}
                    />
                  </a>
                </div>
                <div>
                  <a href="nasil-calisir.html">
                    <img
                      data-u="image"
                      src="https://infiyatin.com/assets/MobilUstTanitim2.png"
                      style={{ maxWidth: 400, maxHeight: 200 }}
                    />
                  </a>
                </div>
                <div>
                  <a href="Product/info/53/Alt%c4%b1n%20Havale%20-%20%c3%87eyrek%20Alt%c4%b1n.html">
                    <img
                      data-u="image"
                      src="assets/MobilUstTanitim3.png"
                      style={{ maxWidth: 400, maxHeight: 200 }}
                    />
                  </a>
                </div>
              </div>
              <a
                data-scale="0"
                href="#"
                style={{ display: "none", position: "absolute" }}
              >
                image gallery
              </a>
              <div
                data-u="prototype"
                class="i"
                style={{ width: 13, height: 13 }}
              >
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
            <div
              data-u="arrowleft"
              class="jssora051"
              style={{ width: 20, height: 20, top: 0, left: 10 }}
              data-auto-center="2"
              data-scale="0.75"
              data-scale-left="0.75"
            >
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
                <polyline
                  class="a"
                  points="11040,1920 4960,8000 11040,14080 "
                ></polyline>
              </svg>
            </div>
            <div
              data-u="arrowright"
              class="jssora051"
              style={{ width: 20, height: 20, top: 0, right: 10 }}
              data-auto-center="2"
              data-scale="0.75"
              data-scale-right="0.75"
            >
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
                <polyline
                  class="a"
                  points="4960,1920 11040,8000 4960,14080 "
                ></polyline>
              </svg>
            </div>
          </div>

          <div class="row" style={{ marginTop: 10 }} id="index_urunler">
            <CardList1
              socket={this.props.socket}
              session={this.props.session}
            />
            <CardList2
              socket={this.props.socket}
              session={this.props.session}
            />
            <CardList3
              socket={this.props.socket}
              session={this.props.session}
            />
          </div>

          <div class="row" style={{ margin: 0 }}>
            <div class="col-md-4">
              <a href="nasil-calisir.html">
                <img
                  class="slideshow"
                  src="assets/ImageIntro350300_1.png"
                  alt=""
                />
              </a>{" "}
            </div>
            <div class="col-md-4">
              <a href="nasil-calisir.html">
                <img
                  class="slideshow"
                  src="assets/ImageIntro350300_2.png"
                  alt=""
                />
              </a>
            </div>
            <div class="col-md-4">
              <a href="nasil-calisir.html">
                <img
                  class="slideshow"
                  src="assets/ImageIntro350300_3.png"
                  alt=""
                />
              </a>
            </div>
          </div>

          <div id="mobilhide" style={{ paddingLeft: 5 }}>
            <img
              width="1090px"
              height="400px"
              class="slideshow"
              alt=""
              src="assets/AnasayfaTanitimResim.png"
            />
          </div>
        </div>


        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ Socketid }) => {
  return {
    Socketid
  };
};
const mapDispatchToProps = {
  SetSocketId,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);



