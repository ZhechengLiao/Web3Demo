import React, {useEffect } from "react";
// import Clock from "../components/Clock";
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import { useState } from "react";
import { Avatar, Button, List, Skeleton } from 'antd';


const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.sticky.white {
    background: #403f83;
    border-bottom: solid 1px #403f83;
  }
  header#myHeader.navbar .search #quick_search{
    color: #fff;
    background: rgba(255, 255, 255, .1);
  }
  header#myHeader.navbar.white .btn, .navbar.white a, .navbar.sticky.white a{
    color: #fff;
  }
  header#myHeader .dropdown-toggle::after{
    color: rgba(255, 255, 255, .5);
  }
  header#myHeader .logo .d-block{
    display: none !important;
  }
  header#myHeader .logo .d-none{
    display: block !important;
  }
  @media only screen and (max-width: 1199px) {
    .navbar{
      background: #403f83;
    }
    .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
      background: #fff;
    }
    .item-dropdown .dropdown a{
      color: #fff !important;
    }
  }
`;
// const envList = ["Tree", "Waterfall", "Thunder", "Sunnary", "Castle", "sky"]


const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;


const CreatePage = () =>{
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);


  useEffect(() => {
    fetch(fakeDataUrl)
        .then((res) => res.json())
        .then((res) => {
          setInitLoading(false);
          setData(res.results);
          setList(res.results);
        });
    }, []);

  const onLoadMore = () => {
    setLoading(true);
    setList(
      data.concat(
        [...new Array(count)].map(() => ({
          loading: true,
          name: {},
          picture: {},
        })),                      
      ),
    );
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        const newData = data.concat(res.results);
        setData(newData);
        setList(newData);
        setLoading(false);
        // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
        window.dispatchEvent(new Event('resize'));
      });
  };

  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;
  
  return (
      <div>
      <GlobalStyles/>

        <section className='jumbotron breadcumb no-bg' style={{backgroundImage: `url(${'./img/background/subheader.jpg'})`}}>
          <div className='mainbreadcumb'>
            <div className='container'>
              <div className='row m-10-hor'>
                <div className='col-12'>
                  <h1 className='text-center'>Create Your Dream</h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='container'>

        <div className="row">
          <div className="col-lg-7 offset-lg-1 mb-5">
              <form id="form-create-item" className="form-border" action="#">
                  <div className="field-set">
                      {/* <h5>Upload file</h5>

                      <div className="d-create-file">
                          <p id="file_name">PNG, JPG, GIF, WEBP or MP4. Max 200mb.</p>
                          {this.state.files.map(x => 
                          <p key="{index}">PNG, JPG, GIF, WEBP or MP4. Max 200mb.{x.name}</p>
                          )}
                          <div className='browse'>
                            <input type="button" id="get_file" className="btn-main" value="Browse"/>
                            <input id='upload_file' type="file" multiple onChange={this.onChange} />
                          </div>
                          
                      </div> */}

                      <div className="spacer-single"></div>

                      <h5>Step 1: Choose form of painting</h5>
                      <div className="de_tab tab_methods">
                        <input type="text" name="item_title" id="item_title" className="form-control" placeholder="search item here..." />

                        
                          <ul className="de_nav">
                              <li id='btn1' className="active" onClick={this.handleShow}><span>Oil painting</span>
                              </li>
                              <li id='btn2' onClick={this.handleShow1}><span>Ink wash painting</span>
                              </li>
                              <li id='btn3' onClick={this.handleShow2}><span>opaque watercolour painting</span>
                              </li>
                              <li id='btn4' onClick={this.handleShow2}><span>Watercolor painting</span>
                              </li>
                              <li id='btn5' onClick={this.handleShow2}><span>Charcoal drawing</span>
                              </li>
                              <li id='btn6' onClick={this.handleShow2}><span>Form .....</span>
                              </li>
                          </ul>

                          

                      </div>

                      <div className="spacer-20"></div>

                                    

                      <h5>Step 2: Describe object</h5>
                      <input type="text" name="item_title" id="item_title" className="form-control" placeholder="e.g. 'A Black Cat" />
                     
                      <div className="spacer-10"></div>

                      <h5>Step 3: Describe sironment</h5>
                      <textarea data-autoresize name="item_desc" id="item_desc" className="form-control" placeholder="e.g. 'Mountains, Castle'"></textarea>
                      {/* Fill in the environment list and add loading more button */}

                      <List
                        className="demo-loadmore-list"
                        loading={initLoading}
                        itemLayout="horizontal"
                        loadMore={loadMore}
                        dataSource={list}
                        renderItem={(item) => (
                          <List.Item
                            actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
                          >
                            <Skeleton avatar title={false} loading={item.loading} active>
                              <List.Item.Meta
                                avatar={<Avatar src={item.picture.large} />}
                                title={<a href="https://ant.design">{item.name?.last}</a>}
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                              />
                              <div>content</div>
                            </Skeleton>
                          </List.Item>
                        )}
                      />

                      {/* <ul className="de_nav_sm">
                          <li id='btn1_env' className="active" onClick={this.handleShow}><span>Mountains</span>
                          </li>
                          <li id='btn2_env' onClick={this.handleShow1}><span>Castle</span>
                          </li>
                          <li id='btn3_env' onClick={this.handleShow2}><span>Trees</span>
                          </li>
                          <li id='btn4_env' onClick={this.handleShow2}><span>Watrefall</span>
                          </li>
                          <li id='btn5_env' onClick={this.handleShow2}><span>Weather</span>
                          </li>
                          <li id='btn6_env' onClick={this.handleShow2}><span>Watrefall</span>
                          </li>
                          <li id='btn6_env' onClick={this.handleShow2}><span>Watrefall</span>
                          </li>
                      </ul> */}
                      <div className="spacer-10"></div>

                      <h5>Step 4: Now Style </h5>
                      <input type="text" name="item_price" id="item_price" className="form-control" placeholder="e.g. 'Rcoco, Minimalism'" />
                      <ul className="de_nav_sm">
                          <li id='btn1_style' className="active" onClick={this.handleShow}><span>Rococo</span>
                          </li>
                          <li id='btn2_style' onClick={this.handleShow1}><span>Minimalism</span>
                          </li>
                          <li id='btn3_style' onClick={this.handleShow2}><span>Neo-Impressionism</span>
                          </li>
                          <li id='btn4_style' onClick={this.handleShow2}><span>Rococo</span>
                          </li>
                          <li id='btn5_style' onClick={this.handleShow2}><span>Minimalism</span>
                          </li>
                          <li id='btn6_style' onClick={this.handleShow2}><span>Neo-Impressionism</span>
                          </li>
                      </ul>
                      <div className="spacer-10"></div>

                      <h5>Step 5: Want more settings?</h5>
                      {/* Size, view, light effect, colour tune */}
                      <input type="text" name="drawing_setting" id="drawing_setting" className="form-control" placeholder="views" />
                      <h6>- Size</h6>
                      
                      <h6>- view</h6>
                      <ul className="de_nav_sm">
                          <li id='btn1_view' className="active" onClick={this.handleShow}><span>Front View</span>
                          </li>
                          <li id='btn2_view' onClick={this.handleShow1}><span>Close-up</span>
                          </li>
                          <li id='btn3_view' onClick={this.handleShow2}><span>Top view</span>
                          </li>
                          <li id='btn4_view' onClick={this.handleShow2}><span>Front View</span>
                          </li>
                          <li id='btn5_view' onClick={this.handleShow2}><span>CLose-up</span>
                          </li>
                          <li id='btn6_view' onClick={this.handleShow2}><span>Top view</span>
                          </li>
                      </ul>

                      <h6>- Light-effect</h6>
                      <ul className="de_nav_sm">
                          <li id='btn1_light_effect' className="active" onClick={this.handleShow}><span>Front View</span>
                          </li>
                          <li id='btn2_light_effect' onClick={this.handleShow1}><span>Close-up</span>
                          </li>
                          <li id='btn3_light_effect' onClick={this.handleShow2}><span>Top view</span>
                          </li>
                          <li id='btn4_light_effect' onClick={this.handleShow2}><span>Front View</span>
                          </li>
                          <li id='btn5_light_effect' onClick={this.handleShow2}><span>CLose-up</span>
                          </li>
                          <li id='btn6_light_effect' onClick={this.handleShow2}><span>Top view</span>
                          </li>
                      </ul>

                      <h6>- colour tune</h6>
                      <ul className="de_nav_sm">
                          <li id='btn1_colour' className="active" onClick={this.handleShow}><span>Rococo</span>
                          </li>
                          <li id='btn2_colour' onClick={this.handleShow1}><span>Minimalism</span>
                          </li>
                          <li id='btn3_colour' onClick={this.handleShow2}><span>Neo-Impressionism</span>
                          </li>
                          <li id='btn4_colour' onClick={this.handleShow2}><span>Rococo</span>
                          </li>
                          <li id='btn5_colour' onClick={this.handleShow2}><span>Minimalism</span>
                          </li>
                          <li id='btn6_colour' onClick={this.handleShow2}><span>Neo-Impressionism</span>
                          </li>
                      </ul>

                      <div className="spacer-10"></div>

                      <h5>Your Prompt</h5>
                      <textarea data-autoresize name="item_desc" id="item_desc" className="form-control" placeholder="summary promt"></textarea>

                      <div className="spacer-10"></div>

                      <input type="button" id="submit" className="btn-main" value="TaDa!"/>
                  </div>
              </form>
          </div>

          {/* <div className="col-lg-3 col-sm-6 col-xs-12">
                  <h5>Preview item</h5>
                  <div className="nft__item m-0">
                      <div className="de_countdown">
                        <Clock deadline="December, 30, 2021" />
                      </div>
                      <div className="author_list_pp">
                          <span>                                    
                              <img className="lazy" src="./img/author/author-1.jpg" alt=""/>
                              <i className="fa fa-check"></i>
                          </span>
                      </div>
                      <div className="nft__item_wrap">
                          <span>
                              <img src="./img/collections/coll-item-3.jpg" id="get_file_2" className="lazy nft__item_preview" alt=""/>
                          </span>
                      </div>
                      <div className="nft__item_info">
                          <span >
                              <h4>Pinky Ocean</h4>
                          </span>
                          <div className="nft__item_price">
                              0.08 ETH<span>1/20</span>
                          </div>
                          <div className="nft__item_action">
                              <span>Place a bid</span>
                          </div>
                          <div className="nft__item_like">
                              <i className="fa fa-heart"></i><span>50</span>
                          </div>                            
                      </div> 
                  </div>
              </div>                                          */}
      </div>

      </section>

        <Footer />
      </div>
   );
  };


export default CreatePage;


// // 改写
// export default class Createpage extends Component {

// constructor() {
//     super();
//     this.onChange = this.onChange.bind(this);
//     this.state = {
//       files: [],
//     };
//   };
// state = {
//   initLoading: true,
//   loading: false,
//   data: [],
//   list: []
// };


// onChange(e) {
//   var files = e.target.files;
//   var filesArr = Array.prototype.slice.call(files);
//   document.getElementById("file_name").style.display = "none";
//   this.setState({ files: [...this.state.files, ...filesArr] });
// }

// // 改写after

// // const Createpage = () =>{
// //   const onChange = 
  

  

//   handleShow = ()=>{
//       document.getElementById("tab_opt_1").classList.add("show");
//       document.getElementById("tab_opt_1").classList.remove("hide");
//       document.getElementById("tab_opt_2").classList.remove("show");
//       document.getElementById("btn1").classList.add("active");
//       document.getElementById("btn2").classList.remove("active");
//       document.getElementById("btn3").classList.remove("active");
//   }
//    handleShow1 = ()=>{
//       document.getElementById("tab_opt_1").classList.add("hide");
//       document.getElementById("tab_opt_1").classList.remove("show");
//       document.getElementById("tab_opt_2").classList.add("show");
//       document.getElementById("btn1").classList.remove("active");
//       document.getElementById("btn2").classList.add("active");
//       document.getElementById("btn3").classList.remove("active");
//   }
//    handleShow2 = ()=>{
//       document.getElementById("tab_opt_1").classList.add("show");
//       document.getElementById("btn1").classList.remove("active");
//       document.getElementById("btn2").classList.remove("active");
//       document.getElementById("btn3").classList.add("active");
//   }

//   state = {
//      isActive:false  
//   }
//   unlockClick = ()=>{
//       this.setState({
//           isActive: true      })
//   }
//   unlockHide = () => {
//     this.setState({isActive: false});
//   };

// render() {
//   return (
//     <div>
//     <GlobalStyles/>

//       <section className='jumbotron breadcumb no-bg' style={{backgroundImage: `url(${'./img/background/subheader.jpg'})`}}>
//         <div className='mainbreadcumb'>
//           <div className='container'>
//             <div className='row m-10-hor'>
//               <div className='col-12'>
//                 <h1 className='text-center'>Create Your Dream</h1>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className='container'>

//       <div className="row">
//         <div className="col-lg-7 offset-lg-1 mb-5">
//             <form id="form-create-item" className="form-border" action="#">
//                 <div className="field-set">
//                     {/* <h5>Upload file</h5>

//                     <div className="d-create-file">
//                         <p id="file_name">PNG, JPG, GIF, WEBP or MP4. Max 200mb.</p>
//                         {this.state.files.map(x => 
//                         <p key="{index}">PNG, JPG, GIF, WEBP or MP4. Max 200mb.{x.name}</p>
//                         )}
//                         <div className='browse'>
//                           <input type="button" id="get_file" className="btn-main" value="Browse"/>
//                           <input id='upload_file' type="file" multiple onChange={this.onChange} />
//                         </div>
                        
//                     </div> */}

//                     <div className="spacer-single"></div>

//                     <h5>Step 1: Choose form of painting</h5>
//                                   <div className="de_tab tab_methods">
//                                    <input type="text" name="item_title" id="item_title" className="form-control" placeholder="search item here..." />

                                   
//                                       <ul className="de_nav">
//                                           <li id='btn1' className="active" onClick={this.handleShow}><span>Oil painting</span>
//                                           </li>
//                                           <li id='btn2' onClick={this.handleShow1}><span>Ink wash painting</span>
//                                           </li>
//                                           <li id='btn3' onClick={this.handleShow2}><span>opaque watercolour painting</span>
//                                           </li>
//                                           <li id='btn4' onClick={this.handleShow2}><span>Watercolor painting</span>
//                                           </li>
//                                           <li id='btn5' onClick={this.handleShow2}><span>Charcoal drawing</span>
//                                           </li>
//                                           <li id='btn6' onClick={this.handleShow2}><span>Form .....</span>
//                                           </li>
//                                       </ul>

                                      

//                                   </div>

//                                   <div className="spacer-20"></div>

                                  

//                     <h5>Step 2: Describe object</h5>
//                     <input type="text" name="item_title" id="item_title" className="form-control" placeholder="e.g. 'A Black Cat" />
                   
//                     <div className="spacer-10"></div>

//                     <h5>Step 3: Describe sironment</h5>
//                     <textarea data-autoresize name="item_desc" id="item_desc" className="form-control" placeholder="e.g. 'Mountains, Castle'"></textarea>
//                     {/* Fill in the environment list and add loading more button */}

//                     <List
//                       className="demo-loadmore-list"
//                       loading={initLoading}
//                       itemLayout="horizontal"
//                       loadMore={loadMore}
//                       dataSource={list}
//                       renderItem={(item) => (
//                         <List.Item
//                           actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
//                         >
//                           <Skeleton avatar title={false} loading={item.loading} active>
//                             <List.Item.Meta
//                               avatar={<Avatar src={item.picture.large} />}
//                               title={<a href="https://ant.design">{item.name?.last}</a>}
//                               description="Ant Design, a design language for background applications, is refined by Ant UED Team"
//                             />
//                             <div>content</div>
//                           </Skeleton>
//                         </List.Item>
//                       )}
//                     />

//                     {/* <ul className="de_nav_sm">
//                         <li id='btn1_env' className="active" onClick={this.handleShow}><span>Mountains</span>
//                         </li>
//                         <li id='btn2_env' onClick={this.handleShow1}><span>Castle</span>
//                         </li>
//                         <li id='btn3_env' onClick={this.handleShow2}><span>Trees</span>
//                         </li>
//                         <li id='btn4_env' onClick={this.handleShow2}><span>Watrefall</span>
//                         </li>
//                         <li id='btn5_env' onClick={this.handleShow2}><span>Weather</span>
//                         </li>
//                         <li id='btn6_env' onClick={this.handleShow2}><span>Watrefall</span>
//                         </li>
//                         <li id='btn6_env' onClick={this.handleShow2}><span>Watrefall</span>
//                         </li>
//                     </ul> */}
//                     <div className="spacer-10"></div>

//                     <h5>Step 4: Now Style </h5>
//                     <input type="text" name="item_price" id="item_price" className="form-control" placeholder="e.g. 'Rcoco, Minimalism'" />
//                     <ul className="de_nav_sm">
//                         <li id='btn1_style' className="active" onClick={this.handleShow}><span>Rococo</span>
//                         </li>
//                         <li id='btn2_style' onClick={this.handleShow1}><span>Minimalism</span>
//                         </li>
//                         <li id='btn3_style' onClick={this.handleShow2}><span>Neo-Impressionism</span>
//                         </li>
//                         <li id='btn4_style' onClick={this.handleShow2}><span>Rococo</span>
//                         </li>
//                         <li id='btn5_style' onClick={this.handleShow2}><span>Minimalism</span>
//                         </li>
//                         <li id='btn6_style' onClick={this.handleShow2}><span>Neo-Impressionism</span>
//                         </li>
//                     </ul>
//                     <div className="spacer-10"></div>

//                     <h5>Step 5: Want more settings?</h5>
//                     {/* Size, view, light effect, colour tune */}
//                     <input type="text" name="drawing_setting" id="drawing_setting" className="form-control" placeholder="views" />
//                     <h6>- Size</h6>
                    
//                     <h6>- view</h6>
//                     <ul className="de_nav_sm">
//                         <li id='btn1_view' className="active" onClick={this.handleShow}><span>Front View</span>
//                         </li>
//                         <li id='btn2_view' onClick={this.handleShow1}><span>Close-up</span>
//                         </li>
//                         <li id='btn3_view' onClick={this.handleShow2}><span>Top view</span>
//                         </li>
//                         <li id='btn4_view' onClick={this.handleShow2}><span>Front View</span>
//                         </li>
//                         <li id='btn5_view' onClick={this.handleShow2}><span>CLose-up</span>
//                         </li>
//                         <li id='btn6_view' onClick={this.handleShow2}><span>Top view</span>
//                         </li>
//                     </ul>

//                     <h6>- Light-effect</h6>
//                     <ul className="de_nav_sm">
//                         <li id='btn1_light_effect' className="active" onClick={this.handleShow}><span>Front View</span>
//                         </li>
//                         <li id='btn2_light_effect' onClick={this.handleShow1}><span>Close-up</span>
//                         </li>
//                         <li id='btn3_light_effect' onClick={this.handleShow2}><span>Top view</span>
//                         </li>
//                         <li id='btn4_light_effect' onClick={this.handleShow2}><span>Front View</span>
//                         </li>
//                         <li id='btn5_light_effect' onClick={this.handleShow2}><span>CLose-up</span>
//                         </li>
//                         <li id='btn6_light_effect' onClick={this.handleShow2}><span>Top view</span>
//                         </li>
//                     </ul>

//                     <h6>- colour tune</h6>
//                     <ul className="de_nav_sm">
//                         <li id='btn1_colour' className="active" onClick={this.handleShow}><span>Rococo</span>
//                         </li>
//                         <li id='btn2_colour' onClick={this.handleShow1}><span>Minimalism</span>
//                         </li>
//                         <li id='btn3_colour' onClick={this.handleShow2}><span>Neo-Impressionism</span>
//                         </li>
//                         <li id='btn4_colour' onClick={this.handleShow2}><span>Rococo</span>
//                         </li>
//                         <li id='btn5_colour' onClick={this.handleShow2}><span>Minimalism</span>
//                         </li>
//                         <li id='btn6_colour' onClick={this.handleShow2}><span>Neo-Impressionism</span>
//                         </li>
//                     </ul>

//                     <div className="spacer-10"></div>

//                     <h5>Your Prompt</h5>
//                     <textarea data-autoresize name="item_desc" id="item_desc" className="form-control" placeholder="summary promt"></textarea>

//                     <div className="spacer-10"></div>

//                     <input type="button" id="submit" className="btn-main" value="TaDa!"/>
//                 </div>
//             </form>
//         </div>

//         {/* <div className="col-lg-3 col-sm-6 col-xs-12">
//                 <h5>Preview item</h5>
//                 <div className="nft__item m-0">
//                     <div className="de_countdown">
//                       <Clock deadline="December, 30, 2021" />
//                     </div>
//                     <div className="author_list_pp">
//                         <span>                                    
//                             <img className="lazy" src="./img/author/author-1.jpg" alt=""/>
//                             <i className="fa fa-check"></i>
//                         </span>
//                     </div>
//                     <div className="nft__item_wrap">
//                         <span>
//                             <img src="./img/collections/coll-item-3.jpg" id="get_file_2" className="lazy nft__item_preview" alt=""/>
//                         </span>
//                     </div>
//                     <div className="nft__item_info">
//                         <span >
//                             <h4>Pinky Ocean</h4>
//                         </span>
//                         <div className="nft__item_price">
//                             0.08 ETH<span>1/20</span>
//                         </div>
//                         <div className="nft__item_action">
//                             <span>Place a bid</span>
//                         </div>
//                         <div className="nft__item_like">
//                             <i className="fa fa-heart"></i><span>50</span>
//                         </div>                            
//                     </div> 
//                 </div>
//             </div>                                          */}
//     </div>

//     </section>

//       <Footer />
//     </div>
//  );
// }
// }