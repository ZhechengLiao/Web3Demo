import { Button, List, Skeleton, Image, Tag, Input, Tooltip, Select, Collapse } from "antd";
import { PlusOutlined, InfoCircleOutlined, SearchOutlined } from '@ant-design/icons';
import React, { useEffect, useState, useRef } from "react";
import "antd/dist/antd.css";
import Footer from '../components/footer';
import { CaretRightOutlined } from '@ant-design/icons';
const { Panel } = Collapse;

const { CheckableTag } = Tag;
const { Search } = Input;
const onSearch = (value) => console.log(value);
const { TextArea } = Input;


// color, env, materials, objects, styles
const count = 3;
const envUrl = 'http://61.220.40.95:40909/frequency/?category=effect_geometry&nums=5';
const colorUrl = 'http://61.220.40.95:40909/frequency/?category=effect_color&num=5'
const materialsUrl = 'http://61.220.40.95:40909/frequency/?category=manifestations&num=5'
const objectsUrl = 'http://61.220.40.95:40909/frequency/?category=objects&num=5'
const stylesUrl = 'http://61.220.40.95:40909/frequency/?category=styles_artists&num=5'
const lightUrl = 'http://61.220.40.95:40909/frequency/?category=effect_lighting&num=5'
const viewUrl = 'http://61.220.40.95:40909/frequency/?category=effect_perspective&num=5'
// const resultImg = {"image0":"http://71.26.5.150:10402/ipfs/QmV8Pww4G9EjKtB6jGnaicMjtNijd5sqPdXbWCE9zC3nwV","image1":"http://71.26.5.150:10402/ipfs/QmPSMk1FDH1EHHNPbi1EW8Drf6JoHbZqKGBHeLy2U1dXJz","image2":"http://71.26.5.150:10402/ipfs/QmdQPPoLfJcbSyQzg25ZFEmomw3C8jPh3RUQ4sz5bu8LR3","image3":"http://71.26.5.150:10402/ipfs/QmfMDGq8fhHswJgAbhqW3fiJZSsgwF9wNDjQDpsqF3CQSD"}

const Create2 = () => {
    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [materialsData, setMaterialsData] = useState([]);
    const [materialsList, setMaterialsList] = useState([]);
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);
    const [objData, setObjData] = useState([]);
    const [objList, setObjList] = useState([]);
    const [styleData, setStyleData] = useState([]);
    const [styleList, setStyleList] = useState([]);
    const [viewData, setViewData] = useState([]);
    const [viewList, setViewList] = useState([]);
    const [lightEffectData, setLightEffectData] = useState([]);
    const [lightEffectList, setLightEffectList] = useState([]);
    const [colorData, setColorData] = useState([]);
    const [colorList, setColorList] = useState([]);
    

   

    
    // materials part
    // handle manifestations selected tags
    const [selectedManifestationsTags, setSelectedManifestationsTags] = useState([]);
    const handleManifestationsTagChange = (tag, checked) => {
        const nextSelectedManifestationsTags = checked
        ? [...selectedManifestationsTags, tag]
        : selectedManifestationsTags.filter((t) => t !== tag);
        console.log("You are interested in: ", nextSelectedManifestationsTags);
        console.log("You are interested in selectedManifestationsTags: ", selectedManifestationsTags);

        setSelectedManifestationsTags(nextSelectedManifestationsTags);
    };

    useEffect(() => {
        // var currentUrl = envUrl
        fetch(materialsUrl)
        .then((res) => res.json())
        .then((res) => {
            setInitLoading(false);
            setMaterialsData(res.result);
            setMaterialsList(res.result);
        });
    }, []);
    const materialsOnLoadMore = () => {
        setLoading(true);
        setMaterialsList(
            materialsData.concat(
            [...new Array(count)].map(() => ({
            loading: true,
            
            }))
        )
        );
        fetch(materialsUrl)
        .then((res) => res.json())
        .then((res) => {
            const newData = materialsData.concat(res.result);
            setMaterialsData(newData);
            setMaterialsList(newData);
            setLoading(false);
            // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
            // In real scene, you can using public method of react-virtualized:
            // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
            window.dispatchEvent(new Event("resize"));
        });
    };
    const materialsLoadMore =
        !initLoading && !loading ? (
        <div
            style={{
            textAlign: "center",
            marginTop: 12,
            height: 32,
            lineHeight: "32px",
            }}
        >
            <Button onClick={materialsOnLoadMore}>show more</Button>
        </div>
        ) : null;


    // obj part
    // handle Obj selected tags
    const [selectedObjTags, setSelectedObjTags] = useState([]);
    const handleObjTagChange = (tag, checked) => {
        const nextSelectedObjTags = checked
        ? [...selectedObjTags, tag]
        : selectedObjTags.filter((t) => t !== tag);
        console.log("You are interested in: ", nextSelectedObjTags);
        setSelectedObjTags(nextSelectedObjTags);
    };
    useEffect(() => {
        // var currentUrl = envUrl
        fetch(objectsUrl)
        .then((res) => res.json())
        .then((res) => {
            setInitLoading(false);
            setObjData(res.result);
            setObjList(res.result);
        });
    }, []);
    const objOnLoadMore = () => {
        setLoading(true);
        setObjList(
            objData.concat(
            [...new Array(count)].map(() => ({
            loading: true,
            
            }))
        )
        );
        fetch(objectsUrl)
        .then((res) => res.json())
        .then((res) => {
            const newData = objData.concat(res.result);
            setObjData(newData);
            setObjList(newData);
            setLoading(false);
            // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
            // In real scene, you can using public method of react-virtualized:
            // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
            window.dispatchEvent(new Event("resize"));
        });
    };
    const objLoadMore =
        !initLoading && !loading ? (
        <div
            style={{
            textAlign: "center",
            marginTop: 12,
            height: 32,
            lineHeight: "32px",
            }}
        >
            <Button onClick={objOnLoadMore}>show more</Button>
        </div>
        ) : null;




    // env part
    // handle Env selected tags
    const [selectedEnvTags, setSelectedEnvTags] = useState([]);
    const handleEnvTagChange = (tag, checked) => {
        const nextSelectedEnvTags = checked
        ? [...selectedEnvTags, tag]
        : selectedEnvTags.filter((t) => t !== tag);
        console.log("You are interested in: ", nextSelectedEnvTags);
        setSelectedEnvTags(nextSelectedEnvTags);
    };

    useEffect(() => {
        // var currentUrl = envUrl
        fetch(envUrl)
        .then((res) => res.json())
        .then((res) => {
            setInitLoading(false);
            setData(res.result);
            setList(res.result);
        });
    }, []);
    const onLoadMore = () => {
        setLoading(true);
        setList(
        data.concat(
            [...new Array(count)].map(() => ({
            loading: true,
            
            }))
        )
        );
        fetch(envUrl)
        .then((res) => res.json())
        .then((res) => {
            const newData = data.concat(res.result);
            setData(newData);
            setList(newData);
            setLoading(false);
            // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
            // In real scene, you can using public method of react-virtualized:
            // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
            window.dispatchEvent(new Event("resize"));
        });
    };
    const loadMore =
        !initLoading && !loading ? (
        <div
            style={{
            textAlign: "center",
            marginTop: 12,
            height: 32,
            lineHeight: "32px",
            }}
        >
            <Button onClick={onLoadMore}>show more</Button>
        </div>
        ) : null;


    // style part
    // handle Style selected tags
    const [selectedStyleTags, setSelectedStyleTags] = useState([]);
    const handleStyleTagChange = (tag, checked) => {
        const nextSelectedStyleTags = checked
        ? [...selectedStyleTags, tag]
        : selectedStyleTags.filter((t) => t !== tag);
        console.log("You are interested in: ", nextSelectedStyleTags);
        setSelectedStyleTags(nextSelectedStyleTags);
    };

    useEffect(() => {
        // var currentUrl = envUrl
        fetch(stylesUrl)
        .then((res) => res.json())
        .then((res) => {
            setInitLoading(false);
            setStyleData(res.result);
            setStyleList(res.result);
        });
    }, []);
    const styleOnLoadMore = () => {
        setLoading(true);
        setStyleList(
            styleData.concat(
            [...new Array(count)].map(() => ({
            loading: true,
            
            }))
        )
        );
        fetch(stylesUrl)
        .then((res) => res.json())
        .then((res) => {
            const newData = styleData.concat(res.result);
            setStyleData(newData);
            setStyleList(newData);
            setLoading(false);
            // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
            // In real scene, you can using public method of react-virtualized:
            // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
            window.dispatchEvent(new Event("resize"));
        });
    };
    const styleLoadMore =
        !initLoading && !loading ? (
        <div
            style={{
            textAlign: "center",
            marginTop: 12,
            height: 32,
            lineHeight: "32px",
            }}
        >
            <Button onClick={styleOnLoadMore}>show more</Button>
        </div>
        ) : null;
    
    // View part
    // handle View selected tags
    const [selectedViewTags, setSelectedViewTags] = useState([]);
    const handleViewTagChange = (tag, checked) => {
        const nextSelectedViewTags = checked
        ? [...selectedViewTags, tag]
        : selectedViewTags.filter((t) => t !== tag);
        console.log("You are interested in: ", nextSelectedViewTags);
        setSelectedViewTags(nextSelectedViewTags);
    };

    useEffect(() => {
        // var currentUrl = envUrl
        fetch(viewUrl)
        .then((res) => res.json())
        .then((res) => {
            setInitLoading(false);
            setViewData(res.result);
            setViewList(res.result);
        });
    }, []);
    const viewOnLoadMore = () => {
        setLoading(true);
        setViewList(
            viewData.concat(
            [...new Array(count)].map(() => ({
            loading: true,
            
            }))
        )
        );
        fetch(viewUrl)
        .then((res) => res.json())
        .then((res) => {
            const newData = viewData.concat(res.result);
            setViewData(newData);
            setViewList(newData);
            setLoading(false);
            // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
            // In real scene, you can using public method of react-virtualized:
            // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
            window.dispatchEvent(new Event("resize"));
        });
    };
    const viewLoadMore =
        !initLoading && !loading ? (
        <div
            style={{
            textAlign: "center",
            marginTop: 12,
            height: 32,
            lineHeight: "32px",
            }}
        >
            <Button onClick={viewOnLoadMore}>show more</Button>
        </div>
        ) : null;
    

    // LightEffect part
    // handle LightEffect selected tags
    const [selectedLightEffectTags, setSelectedLightEffectTags] = useState([]);
    const handleLightEffectTagChange = (tag, checked) => {
        const nextSelectedLightEffectTags = checked
        ? [...selectedLightEffectTags, tag]
        : selectedLightEffectTags.filter((t) => t !== tag);
        console.log("You are interested in: ", nextSelectedLightEffectTags);
        setSelectedLightEffectTags(nextSelectedLightEffectTags);
    };

    useEffect(() => {
        // var currentUrl = envUrl
        fetch(lightUrl)
        .then((res) => res.json())
        .then((res) => {
            setInitLoading(false);
            setLightEffectData(res.result);
            setLightEffectList(res.result);
        });
    }, []);
    const lightEffectOnLoadMore = () => {
        setLoading(true);
        setLightEffectList(
            lightEffectData.concat(
            [...new Array(count)].map(() => ({
            loading: true,
            
            }))
        )
        );
        fetch(lightUrl)
        .then((res) => res.json())
        .then((res) => {
            const newData = lightEffectData.concat(res.result);
            setLightEffectData(newData);
            setLightEffectList(newData);
            setLoading(false);
            // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
            // In real scene, you can using public method of react-virtualized:
            // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
            window.dispatchEvent(new Event("resize"));
        });
    };
    const lightEffectLoadMore =
        !initLoading && !loading ? (
        <div
            style={{
            textAlign: "center",
            marginTop: 12,
            height: 32,
            lineHeight: "32px",
            }}
        >
            <Button onClick={lightEffectOnLoadMore}>show more</Button>
        </div>
        ) : null;

    // color part
    // handle Color selected tags
    const [selectedColorTags, setSelectedColorTags] = useState([]);
    const handleColorTagChange = (tag, checked) => {
        const nextSelectedColorTags = checked
        ? [...selectedColorTags, tag]
        : selectedColorTags.filter((t) => t !== tag);
        console.log("You are interested in: ", nextSelectedColorTags);
        setSelectedColorTags(nextSelectedColorTags);
    };

    useEffect(() => {
        // var currentUrl = envUrl
        fetch(colorUrl)
        .then((res) => res.json())
        .then((res) => {
            setInitLoading(false);
            setColorData(res.result);
            setColorList(res.result);
        });
    }, []);
    const colorOnLoadMore = () => {
        setLoading(true);
        setColorList(
            colorData.concat(
            [...new Array(count)].map(() => ({
            loading: true,
            
            }))
        )
        );
        fetch(colorUrl)
        .then((res) => res.json())
        .then((res) => {
            const newData = colorData.concat(res.result);
            setColorData(newData);
            setColorList(newData);
            setLoading(false);
            // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
            // In real scene, you can using public method of react-virtualized:
            // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
            window.dispatchEvent(new Event("resize"));
        });
    };
    const colorLoadMore =
        !initLoading && !loading ? (
        <div
            style={{
            textAlign: "center",
            marginTop: 12,
            height: 32,
            lineHeight: "32px",
            }}
        >
            <Button onClick={colorOnLoadMore}>show more</Button>
        </div>
        ) : null;


    // summary prompt
    const summaryTag = []
    // console.log("selectedManifestationsTags is "+ selectedManifestationsTags)
    // console.log("selectedObjTags is "+ selectedObjTags)
    // console.log("selectedEnvTags is "+ selectedEnvTags)
    // console.log("selectedColorTags is "+ selectedColorTags)
    // console.log("selectedLightEffectTags is "+ selectedLightEffectTags)
    // console.log("selectedViewTags is "+ selectedViewTags)

    summaryTag.push(...selectedManifestationsTags, ...selectedObjTags,...selectedEnvTags,...selectedColorTags,...selectedLightEffectTags,...selectedViewTags,...selectedStyleTags )
    console.log("summaryTag is "+ summaryTag)

    // tags at the bottom
    const [totalTags, setTags] = useState(summaryTag);
    const [inputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [editInputIndex, setEditInputIndex] = useState(-1);
    const [editInputValue, setEditInputValue] = useState('');
    const inputRef = useRef(null);
    const editInputRef = useRef(null);
    console.log("totalTags is "+totalTags)
    useEffect(() => {
        if (inputVisible) {
        inputRef.current?.focus();
        }
    }, [inputVisible]);
    useEffect(() => {
        editInputRef.current?.focus();
    }, [inputValue]);
    const handleClose = (removedTag) => {
        const newTags = totalTags.filter((tag) => tag !== removedTag);
        console.log(newTags);
        setTags(newTags);
    };
    const showInput = () => {
        setInputVisible(true);
    };
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleInputConfirm = () => {
        if (inputValue && totalTags.indexOf(inputValue) === -1) {
        setTags([...totalTags, inputValue]);
        }
        setInputVisible(false);
        setInputValue('');
    };
    const handleEditInputChange = (e) => {
        setEditInputValue(e.target.value);
    };
    const handleEditInputConfirm = () => {
        const newTags = [...totalTags];
        console.log("newTags is "+ {newTags})
        newTags[editInputIndex] = editInputValue;
        setTags(newTags);
        setEditInputIndex(-1);
        setInputValue('');
    };

    // final prompt tags
    const finalPrompt = []
    finalPrompt.push(...summaryTag, ...totalTags)
    console.log("final prompt is "+ finalPrompt)
    

    const [resultImg, setResultImg] = useState([])
    
    // const getImg = (finalPrompt) => {    
    //     console.log("calling api, waiting")
    //     fetch('http://185.46.222.81:4501/download/'+ finalPrompt)
    //         .then(response => setResultImg(response.json()))
    //         .then(image0 => console.log(image0));

    // }
    const imgUrl = "http://185.46.222.81:4501/download/"+ finalPrompt;
    const getImg = () => {
        console.log("calling api, waiting")
        fetch(imgUrl)
            .then((res) => 
            res.json())
            .then((res) => {
                console.log(res);
                setResultImg(res)
            });

    }
    console.log("resultImg is "+ resultImg)

    return (
        <div>
            <section
                className="jumbotron breadcumb no-bg"
                style={{ backgroundImage: `url(${"./img/background/subheader.jpg"})` }}
            >
                <div className="mainbreadcumb">
                    <div className="container">
                        <div className="row m-10-hor">
                            <div className="col-12">
                                <h1 className="text-center">Tada Galaxy</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container">

                <div className="row">
                    <div className="col-lg-7 offset-lg-1 mb-5" >
                        <form id="form-create-item" className="form-border" action="#">
                            <div className="field-set" style={{ position: 'relative', left: '18%', right: '19%' }}>
                                <div className="spacer-single"></div>
                                <div className="Step1" style={{
                                    backgroundColor: '#f9f9f9',
                                    paddingTop: 30,
                                    paddingLeft: 31,
                                    paddingRight: 31,
                                    paddingBottom: 30,
                                    width: 892,
                                    height: 401,
                                    borderRadius: 10
                                }}>
                                    <h3 style={{ fontWeight: 'bold', fontFamily:'Roboto',  }}>Step 1</h3>
                                    <h5 style={{fontFamily:'Roboto'}}>I want to express my work in the style of __________________</h5>
                                    <div className="de_tab tab_methods">
                                        {/* <input
                                        type="text"
                                        name="item_title"
                                        id="item_title"
                                        className="form-control"
                                        placeholder="eg: oil painting"
                                        /> */}
                                        <div className="search">
                                            <input type="text" className="search" placeholder="Example: sketch" />
                                        </div>
                                        




                                        <List
                                            grid={{ gutter: 15, column: 5 }}
                                            className="demo-loadmore-list"
                                            loading={initLoading}
                                            itemLayout="vertical"
                                            loadMore={materialsLoadMore}
                                            dataSource={materialsList}
                                            renderItem={(item) => (
                                                <Skeleton loading={item.loading} active>
                                                    <div>
                                                        <CheckableTag
                                                            key={item.EN}
                                                            checked={selectedManifestationsTags.indexOf(item.EN) > -1}
                                                            onChange={(checked) =>
                                                                handleManifestationsTagChange(item.EN, checked)
                                                            }
                                                        >
                                                            {item.EN}
                                                        </CheckableTag>
                                                    </div>
                                                </Skeleton>
                                            )}
                                        />
                                    </div>
                                </div>
                                <div className="spacer-20"></div>
                                <div style={{ backgroundColor: '#f9f9f9', paddingTop: 30, paddingLeft: 31, paddingRight: 31, paddingBottom: 30, width: 892, height: 174, borderRadius: 10 }}>
                                    <h3 style={{ fontWeight: 'bold',fontFamily:'Roboto' }}>Step 2</h3>
                                    <h5 style={{fontFamily:'Roboto'}}>I want to draw __________________</h5>
                                    {/* <input type="text" name="item_title" id="item_title" className="form-control" placeholder="e.g. 'A Black Cat" /> */}
                                    <div className="search">
                                        <input type="text" className="search" placeholder="Example: a black kitten" />
                                    </div>

                                    <List
                                        grid={{ gutter: 15, column: 5 }}
                                        className="demo-loadmore-list"
                                        loading={initLoading}
                                        itemLayout="vertical"
                                        loadMore={objLoadMore}
                                        dataSource={objList}
                                        renderItem={(item) => (
                                            <Skeleton loading={item.loading} active>
                                                <div>
                                                    <CheckableTag
                                                        key={item.EN}
                                                        checked={selectedObjTags.indexOf(item.EN) > -1}
                                                        onChange={(checked) =>
                                                            handleObjTagChange(item.EN, checked)
                                                        }
                                                    >
                                                        {item.EN}
                                                    </CheckableTag>
                                                </div>
                                            </Skeleton>
                                        )}
                                    />
                                </div>
                                <div className="spacer-20"></div>
                                <div style={{ backgroundColor: '#f9f9f9', paddingTop: 30, paddingLeft: 31, paddingRight: 31, paddingBottom: 30, width: 892, height: 218, borderRadius: 10 }}>
                                    <h3 style={{ fontWeight: 'bold',fontFamily:'Roboto' }}>Step 3</h3>
                                    <h5 style={{fontFamily:'Roboto'}} >The environment of this object is __________________</h5>
                                    {/* <textarea data-autoresize name="item_desc" id="item_desc" className="form-control" placeholder="e.g. 'Mountains, Castle'"></textarea> */}
                                    {/* Fill in the environment list and add loading more button */}
                                    <div className="search">
                                            <input type="text" className="search" placeholder="Example: Mountain" />
                                    </div>

                                    <List
                                        grid={{ gutter: 15, column: 5 }}
                                        className="demo-loadmore-list"
                                        loading={initLoading}
                                        itemLayout="vertical"
                                        loadMore={loadMore}
                                        dataSource={list}
                                        renderItem={(item) => (
                                            // <List.Item
                                            // actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
                                            // >
                                            <Skeleton loading={item.loading} active>
                                                {/* <List.Item.Meta
                                            // avatar={<Avatar src={item.picture.large} />}
                                            // title = {<a>{item.EN}</a>}
                                            // title={<a href="https://ant.design">{item.name?.last}</a>}
                                            // description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                            /> */}
                                                <div>
                                                    <CheckableTag
                                                        key={item.EN}
                                                        checked={selectedEnvTags.indexOf(item.EN) > -1}
                                                        onChange={(checked) =>
                                                            handleEnvTagChange(item.EN, checked)
                                                        }
                                                    >
                                                        {item.EN}
                                                    </CheckableTag>
                                                </div>
                                            </Skeleton>
                                            // </List.Item>
                                        )}
                                    />
                                </div>
                                <div className="spacer-20"></div>
                                <div style={{ backgroundColor: '#f9f9f9', paddingTop: 30, paddingLeft: 31, paddingRight: 31, paddingBottom: 30, width: 892, height: 401, borderRadius: 10 }}>
                                    <h3 style={{ fontWeight: 'bold',fontFamily:'Roboto' }}>Step 4</h3>
                                    <h5 style={{fontFamily:'Roboto'}}>The style of this painting is __________________</h5>
                                    {/* <input type="text" name="item_price" id="item_price" className="form-control" placeholder="e.g. 'Rcoco, Minimalism'" /> */}
                                    <div className="search">
                                            <input type="text" className="search" placeholder="You can enter your favorite artist or art style. Example: Postmodernism" />
                                    </div>

                                    <List
                                        grid={{ gutter: 15, column: 5 }}
                                        className="demo-loadmore-list"
                                        loading={initLoading}
                                        itemLayout="vertical"
                                        loadMore={styleLoadMore}
                                        dataSource={styleList}
                                        renderItem={(item) => (
                                            <Skeleton loading={item.loading} active>
                                                <div>
                                                    <CheckableTag
                                                        key={item.EN}
                                                        checked={selectedStyleTags.indexOf(item.EN) > -1}
                                                        onChange={(checked) =>
                                                            handleStyleTagChange(item.EN, checked)
                                                        }
                                                    >
                                                        {item.EN}
                                                    </CheckableTag>
                                                </div>
                                            </Skeleton>
                                        )}
                                    />
                                </div>
                                <div className="spacer-20"></div>
                                <div style={{ backgroundColor: '#f9f9f9', paddingTop: 30, paddingLeft: 31, paddingRight: 31, paddingBottom: 30, width: 892, height: 359, borderRadius: 10 }}>
                                    <h3 style={{ fontWeight: 'bold',fontFamily:'Roboto' }}>Step 5</h3>
                                    <h5>I want to setting more</h5>
                                    {/* Size, view, light effect, colour tune */}
                                    {/* <input type="text" name="drawing_setting" id="drawing_setting" className="form-control" placeholder="views" /> */}
                                    <div>
                                        <Collapse
                                            bordered={false}
                                            defaultActiveKey={[]}
                                            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                                            className="site-collapse-custom-collapse"
                                        >
                                            <Panel header=<h5>Size</h5> key="1" className="site-collapse-custom-panel">
                                                <Input placeholder="W" style={{ width: 36 }} /> : <Input placeholder="H" style={{ width: 36 }} />

                                            </Panel>
                                            <div>
                                                <h7><InfoCircleOutlined /> choose the ratio and size of the image.</h7>
                                            </div>
                                            <Panel header=<h5>View</h5> key="2" className="site-collapse-custom-panel">
                                                <List
                                                    grid={{ gutter: 15, column: 5 }}
                                                    className="demo-loadmore-list"
                                                    itemLayout="vertical"
                                                    loadMore={viewLoadMore}
                                                    dataSource={viewList}
                                                    renderItem={(item) => (
                                                        <Skeleton loading={item.loading} active>
                                                            <div>
                                                                <CheckableTag
                                                                    key={item.EN}
                                                                    checked={selectedViewTags.indexOf(item.EN) > -1}
                                                                    onChange={(checked) =>
                                                                        handleViewTagChange(item.EN, checked)
                                                                    }
                                                                >
                                                                    {item.EN}
                                                                </CheckableTag>
                                                            </div>
                                                        </Skeleton>
                                                    )}
                                                />
                                            </Panel>
                                            <h7><InfoCircleOutlined /> choose different angles for your pictures.</h7>
                                            <Panel header=<h5>Light Effect</h5> key="3" className="site-collapse-custom-panel">
                                                <List
                                                    grid={{ gutter: 15, column: 5 }}
                                                    className="demo-loadmore-list"
                                                    itemLayout="vertical"
                                                    loadMore={lightEffectLoadMore}
                                                    dataSource={lightEffectList}
                                                    renderItem={(item) => (
                                                        <Skeleton loading={item.loading} active>
                                                            <div>
                                                                <CheckableTag
                                                                    key={item.EN}
                                                                    checked={selectedLightEffectTags.indexOf(item.EN) > -1}
                                                                    onChange={(checked) =>
                                                                        handleLightEffectTagChange(item.EN, checked)
                                                                    }
                                                                >
                                                                    {item.EN}
                                                                </CheckableTag>
                                                            </div>
                                                        </Skeleton>
                                                    )}
                                                />
                                            </Panel>
                                            <h7><InfoCircleOutlined /> choose different angles for your pictures.</h7>
                                        </Collapse>
                                    </div>
                                    <div>

                                    </div>



                                </div>
                                <div className="spacer-20"></div>
                                <div style={{
                                    backgroundColor: '#f9f9f9',
                                    paddingTop: 30,
                                    paddingLeft: 31,
                                    paddingRight: 31,
                                    paddingBottom: 30,
                                    width: 892,
                                    height: 285,
                                    borderRadius: 10
                                }}>
                                    <h3 style={{ fontWeight: 'bold',fontFamily:'Roboto' }}>Step 6</h3>
                                    <h5 style={{fontFamily:'Roboto'}}>Confirm my prompt:</h5>
                                    <div className="spacer-10"></div>
                                    {summaryTag.map((t) => {
                                        return (
                                            <Tag>
                                                {t}
                                            </Tag>
                                        )
                                    })}

                                    {totalTags.map((tag, index) => {
                                        if (editInputIndex === index) {
                                            return (
                                                <Input
                                                    ref={editInputRef}
                                                    key={tag}
                                                    size="small"
                                                    className="tag-input"
                                                    value={editInputValue}
                                                    onChange={handleEditInputChange}
                                                    onBlur={handleEditInputConfirm}
                                                    onPressEnter={handleEditInputConfirm}
                                                />
                                            );
                                        }
                                        const isLongTag = tag.length > 20;
                                        const tagElem = (
                                            <Tag
                                                className="edit-tag"
                                                key={tag}
                                                closable={index !== 0}
                                                onClose={() => handleClose(tag)}
                                            >
                                                <span
                                                    onDoubleClick={(e) => {
                                                        if (index !== 0) {
                                                            setEditInputIndex(index);
                                                            setEditInputValue(tag);
                                                            e.preventDefault();
                                                        }
                                                    }}
                                                >
                                                    {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                                                </span>
                                            </Tag>
                                        );
                                        return isLongTag ? (
                                            <Tooltip title={tag} key={tag}>
                                                {tagElem}
                                            </Tooltip>
                                        ) : (
                                            tagElem
                                        );
                                    })}
                                    {inputVisible && (
                                        <Input
                                            ref={inputRef}
                                            type="text"
                                            size="small"
                                            className="tag-input"
                                            value={inputValue}
                                            onChange={handleInputChange}
                                            onBlur={handleInputConfirm}
                                            onPressEnter={handleInputConfirm}
                                        />
                                    )}
                                    <div style={{ width: 830, height: 146, backgroundColor: '#e9e9e9', borderRadius: 10 }}>

                                    </div>

                                </div>
                                <div className="spacer-20"></div>
                                <div style={{ position: 'relative', left: '49%', right: '38.9%' }}>
                                    {/* button to sumbit */}
                                    <input type="button" id="submit" className="btn-main" value="TA DA!" onClick={getImg} />
                                    {/* <h5>{resultImg.image0}</h5> */}
                                </div>


                                <div className="spacer-20"></div>
                                <Image.PreviewGroup>
                                    <Image
                                        width={300}
                                        src={resultImg.image0} />
                                    <Image
                                        width={300}
                                        src={resultImg.image1}
                                    />
                                    <Image
                                        width={300}
                                        src={resultImg.image2}
                                    />
                                    <Image
                                        width={300}
                                        src={resultImg.image3}
                                    />
                                </Image.PreviewGroup>


                            </div>
                        </form>
                    </div>
                </div >
            </section >
            <Footer />
        </div >
    );
};

export default Create2;
