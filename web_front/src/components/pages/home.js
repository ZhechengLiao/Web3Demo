import "./main.js"
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="first-page sections">
              <div className="container1 object" data-value={2}>
                <div
                  className="title1"
                  style={{
                    lineHeight:2,
                    width: 695,
                    paddingRight:200,
                    fontFamily: '"League Spartan", sans-serif'
                  }}
                >
                  <h1
                    style={{ fontSize: 44,color:"white", }}
                    className="object"
                    data-value={1}
                  >
                    Make Valuable
                  </h1>
                  <h1
                    style={{ fontSize: 44, color:"white"}}
                    className="object"
                    data-value={3}
                  >
                    Inspirations Value More
                  </h1>
                </div>
                <div className="imgcontain">
                  <img
                    className="object"
                    style={{ position: "relative", right: 200, top: 200}}
                    src="img/home_card_2.png"
                    data-value={2}
                    alt=""
                  />
                  <img
                    className="object"
                    style={{ position: "relative", right: -40, top: 0 }}
                    src="img/home_card_1.png"
                    data-value={1}
                    alt=""
                  />
                  <img
                    className="object"
                    style={{ position: "relative", left: -110, bottom: 110 }}
                    src="img/home_card_3.png"
                    data-value={3}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="second-page sections">
              <div className="container2 reveal">
                <div className="image reveal" style={{ paddingRight: 30 }}>
                  <img src="img/Group 90.png" alt="" />
                </div>
                <div className="title">
                  <h1
                    className="reveal"
                    style={{
                      color: "#ffb800",
                      fontSize: 22,
                      paddingBottom: 15
                    }}
                  >
                    Get to Know About us
                  </h1>
                  <h1
                    className="reveal"
                    style={{
                      color: "white",
                      paddingBottom: 25,
                      fontFamily: '"League Spartan", sans-serif'
                    }}
                  >
                    What is Tada?
                  </h1>
                  <div className="text reveal" style={{ width: 445 }}>
                    <p
                      style={{
                        color: "white",
                        fontSize: 20,
                        paddingBottom: 20,
                        lineHeight:2
                      }}
                    >
                      TaDa is an interactive network that combines content
                      creation, reading, watching and trading.
                    </p>
                    <p style={{ color: "white", fontSize: 20, lineHeight:2 }}>
                      We provide AI tools to shorten the distance between
                      imagination and expression; we provide a platform to
                      shorten the distance between creators and audience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="third-page sections">
              <div
                className="container3 reveal"
                style={{ width: 1035, height: 616 }}
              >
                <div
                  className="card"
                  style={{
                    float: "left",
                    backgroundImage: "url(img/page3_01.png)",
                    backgroundSize: "100% 100%"
                  }}
                >
                  <div className="front" style={{backgroundImage: "url(img/page3_01.png)",height: 277.8,
      width: 316.3,backgroundSize: "100% 100%"}}>
                    <h1
                      style={{
                        fontSize: 96,
                        color: "white",
                        paddingLeft: 15,
                      }}
                    >
                      01
                    </h1>
                    <h2
                      style={{ fontSize: 34, color: "white", paddingLeft: 15 , position:'relative', bottom:40}}
                    >
                      Social Content
                    </h2>
                    <h2
                      style={{ fontSize: 34, color: "white", paddingLeft: 15 , position:'relative', bottom:40}}
                    >
                      to Your Taste
                    </h2>
                  </div>
                  <div className="back">
                    <p style={{ color: "white", fontSize: 18, position:"relative", bottom:20}}>
                      We provide a fantastic community to make friends with
                      other Gen Zs, talk about your favorites, and create
                      content, especially about Anime, Cosmic, Game and Movies.
                    </p>
                  </div>
                </div>
                <div
                  className="card"
                  style={{
                    height: 277.8,
                    width: 403,
                    float: "left",
                    marginLeft: 16,
                    backgroundImage: "url(img/page3_02.png)",
                    
                  }}
                >
                  <div className="front" style={{backgroundImage: "url(img/page3_02.png)",width:'403px',
                    height: '277.8px'}}>
                    <h1
                      style={{
                        fontSize: 96,
                        color: "white",
                        paddingLeft: 15,
                        width: 403,
                      }}
                    >
                      02
                    </h1>
                    <h2
                      style={{ fontSize: 34, color: "white", paddingLeft: 15, position:'relative', bottom:40}}
                    >
                      Free Trade in Your
                    </h2>
                    <h2
                      style={{ fontSize: 34, color: "white", paddingLeft: 15, position:'relative', bottom:40 }}
                    >
                      Works
                    </h2>
                  </div>
                  <div
                    className="back"
                    style={{
                      justifyContent: "center",
                      position: "relative",
                      bottom: 180,
                      textAlign: "center",
                      width: 403,
                    }}
                  >
                    <p style={{ color: "white", fontSize: 18, position: "relative",bottom:20}}>
                      We use advancing Web3 infra to We use advancing Web3 infra
                      to ensure data ownership and creator monetization so that
                      you can freely trade your work in the community{" "}
                    </p>
                  </div>
                </div>
                <div
                  className="card"
                  style={{
                    height: 575,
                    width: 283,
                    float: "right",
                    backgroundImage: "url(img/page3_05.png)",
                    
                  }}
                >
                  <div className="front" style={{backgroundImage: "url(img/page3_05.png)",height: 580,
                    width: 281}}>
                    <h1
                      style={{
                        fontSize: 96,
                        color: "white",
                        paddingBottom: 10,
                        paddingLeft: 15,
                      }}
                    >
                      05
                    </h1>
                    <h2
                      style={{ fontSize: 34, color: "white", paddingLeft: 15 }}
                    >
                      Unique NFTs
                    </h2>
                    <h2
                      style={{ fontSize: 34, color: "white", paddingLeft: 15 }}
                    >
                      &amp; Community
                    </h2>
                    <h2
                      style={{ fontSize: 34, color: "white", paddingLeft: 15 }}
                    >
                      Identities
                    </h2>
                  </div>
                  <div
                    className="back"
                    style={{ position: "relative", bottom: 230 }}
                  >
                    <p style={{ color: "white", fontSize: 18}}>
                      Community members will be able to have unique NFTs, which
                      we guarantee are all ART! Welcome and get involved in our
                      fantastic community!
                    </p>
                  </div>
                </div>
                <div
                  className="middle"
                  style={{
                    float: "left",
                    marginTop: 20,
                    height: "297.8px",
                    width: 735
                  }}
                >
                  <div
                    className="card"
                    style={{
                      width: 403,
                      float: "left",
                      backgroundImage: "url(img/page3_03.png)",
                      backgroundSize: "100% 100%"
                    }}
                  >
                    <div className="front" style={{backgroundImage: "url(img/page3_03.png)",height: 277.8,
      width: 403}}>
                      <h1
                        style={{
                          fontSize: 96,
                          color: "white",
                          paddingBottom: 10,
                          paddingLeft: 15
                        }}
                      >
                        03
                      </h1>
                      <h2
                        style={{
                          fontSize: 34,
                          color: "white",
                          paddingLeft: 15
                          , position:'relative', bottom:45
                        }}
                      >
                        Reward for Your
                      </h2>
                      <h2
                        style={{
                          fontSize: 34,
                          color: "white",
                          paddingLeft: 15
                          , position:'relative', bottom:50
                        }}
                      >
                        Engagement
                      </h2>
                    </div>
                    <div
                      className="back"
                      style={{
                        justifyContent: "center",
                        position: "relative",
                        bottom: 160,
                        textAlign: "center"
                      }}
                    >
                      <p
                        style={{ color: "white", fontSize: 18}}
                      >
                        Every positive engagement related to creation will be
                        stimulated, even comments and likes, by token incentives
                        and community awards.
                      </p>
                    </div>
                  </div>
                  <div
                    className="card"
                    style={{
                      float: "left",
                      marginLeft: 16,
                      backgroundImage: "url(img/page3_04.png)",
                      backgroundSize: "100% 100%"
                    }}
                  >
                    <div className="front" style={{backgroundImage: "url(img/page3_04.png)",height: 277.8,
      width: 315.3,backgroundSize: "100% 100%"}}>
                      <h1
                        style={{
                          fontSize: 96,
                          color: "white",
                          paddingBottom: 10,
                          paddingLeft: 15
                        }}
                      >
                        04
                      </h1>
                      <h2
                        style={{
                          fontSize: 34,
                          color: "white",
                          paddingLeft: 15
                          , position:'relative', bottom:45
                        }}
                      >
                        AI Tools which
                      </h2>
                      <h2
                        style={{
                          fontSize: 34,
                          color: "white",
                          paddingLeft: 15
                          , position:'relative', bottom:50
                        }}
                      >
                        Can Help
                      </h2>
                    </div>
                    <div
                      className="back"
                      style={{ position: "relative", bottom: 205 }}
                    >
                      <p
                        style={{ color: "white", fontSize: 18, position: "relative",bottom:20}}
                      >
                        Every positive engagement related to creation will be
                        stimulated, even comments and likes, by token incentives
                        and community awards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="fourth-page sections">
              <div
                style={{
                  width: "100%",
                  height: "100vh",
                  backgroundColor: "rgb(17, 17, 17)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <div className="container4 reveal">
                  <div
                    className="title reveal"
                    style={{
                      textAlign: "center",
                      
                      color: "white",
                      paddingBottom: 100,
                      paddingTop: 150
                    }}
                  >
                    <h1 style={{ color:"white",fontFamily: '"League Spartan", sans-serif'}} >Come to Meet Our</h1>
                    <h1 style={{ paddingBottom: 30, color:"white",fontFamily: '"League Spartan", sans-serif'}}>Creators</h1>
                    <p style={{ fontSize: 24, margin:0 }}>
                      You can create any greate idea in any
                    </p>
                    <p style={{ fontSize: 24,margin:0 }}>
                      way you like in Tada. Now,over 100+
                    </p>
                    <p style={{ fontSize: 24 }}>
                      creators have already joined in us.
                    </p>
                  </div>
                  <div>
                    <button
                      style={{
                        backgroundColor: "rgb(1,224,184)",
                        color: "black"
                      }}
                    >
                      <h1
                        style={{
                          fontSize: 20,
                          fontWeight: "bold",
                          paddingTop: 2
                        }}
                      >
                        Explore in Community &gt;&gt;
                      </h1>
                    </button>
                  </div>
                </div>
                <div className="last_image" style={{ width: 789, height:940}}>
                  <img
                    className="reveal"
                    style={{
                      transform: "scale(0.75)",
                    }}
                    src="img/finalImage.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="final-page sections"></div>
          </div>
        </div>
      </div>
    </div>

    
  );
}
