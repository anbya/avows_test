import React, { Component } from 'react';
import axios from "axios";
import { connect } from "react-redux";
import moment from 'moment'
import Constants from 'expo-constants'
import { StyleSheet,View,ScrollView, TouchableOpacity, Dimensions, Image} from 'react-native'
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Badge,
  Segment,
  Tab,
  Tabs,
  List,
  ListItem,
  Radio
} from "native-base";
import { material } from "react-native-typography";
import { Col, Row, Grid } from "react-native-easy-grid";
import dataDummy from "./dummyData";
import dataDummyCart from "./dummyDataCart";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";


class keranjang extends Component {
  constructor(props) {
    super(props);
    this.state = {
    dataDummy: dataDummy,
    dataDummyCart:this.props.shoppingCartData,
    selectedIndex:0,
    whislsitParameter:false,
    cartData:[],
    checkData:[]
    };
  }
  componentDidMount = ()=> {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.refreshScreen()
    });
    this.refreshScreen()
  }
  componentWillUnmount = ()=> {
    this._unsubscribe();
  }
  refreshScreen = ()=> {
    let dataDummyCartFiltered=this.state.dataDummyCart.filter((v,i,a)=>a.findIndex(t=>(t.toko === v.toko))===i)
    let newDataCart = []
    for (let i2=0;i2<dataDummyCartFiltered.length;i2++) {
      let dataToshow =  this.state.dataDummyCart.filter(function(data) {
        return data.toko == dataDummyCartFiltered[i2].toko;
      });
      let dataPushTemp=[]
      for(let i3=0;i3<dataToshow.length;i3++){
        dataPushTemp.push({
          "id": dataToshow[i3].id,
          "toko": dataToshow[i3].toko,
          "title": dataToshow[i3].title,
          "subTitle": dataToshow[i3].subTitle,
          "body_text": dataToshow[i3].body_text,
          "price": dataToshow[i3].price,
          "qty": dataToshow[i3].qty
        })
      }
      newDataCart.push(dataPushTemp)
      dataPushTemp=[]
    }
    this.setState({
      ...this.state,
      cartData:newDataCart
    })
  }
  pushToCheckData = (data)=> {
    let dataToshow =  this.state.checkData.filter(function(datax) {
      return datax.id == data.id;
    });
    dataToshow.length>0?this.removeCheckData(data):this.addCheckData(data)
  }
  addCheckData = (data)=> {
    let checkData = this.state.checkData
    checkData.push(data)
    this.setState({
      ...this.state,
      checkData:checkData
    })
  }
  removeCheckData = (datax)=> {
    let checkData = this.state.checkData
    let dataToshow =  checkData.filter(function(data) {
      return data.id != datax.id;
    });
    this.setState({
      ...this.state,
      checkData:dataToshow
    })
  }
  pushToCheckDataToko = (data)=> {
    if(this.state.checkData.filter((obj) => obj.toko === data[0].toko).length == data.length){
      this.removeCheckDataToko(data[0].toko)
    } else {
      for (let index = 0; index < data.length; index++) {
        let dataToshow =  this.state.checkData.filter(function(datax) {
          return datax.id == data[index].id;
        });
        dataToshow.length == 0 &&this.addCheckData(data[index])
      }
    }
  }
  removeCheckDataToko = (datax)=> {
    let checkData = this.state.checkData
    let dataToshow =  checkData.filter(function(data) {
      return data.toko != datax;
    });
    this.setState({
      ...this.state,
      checkData:dataToshow
    })
  }
  pushToCheckDataAll = ()=> {
    let dataAll = this.state.dataDummyCart
    if(this.state.checkData.length == dataAll.length){
      this.removeCheckDataAll()
    } else {
      for (let index = 0; index < dataAll.length; index++) {
        let dataToshow =  this.state.checkData.filter(function(datax) {
          return datax.id == dataAll[index].id;
        });
        dataToshow.length == 0 &&this.addCheckData(dataAll[index])
      }
    }
  }
  removeCheckDataAll = ()=> {
    this.setState({
      ...this.state,
      checkData:[]
    })
  }
  addQty = (x1,x2)=> {
    let cartData = this.state.cartData
    let qtyAwal = this.state.cartData[x1][x2].qty
    cartData[x1][x2].qty = qtyAwal+1
    this.setState({
      ...this.state,
      cartData:cartData
    })
  }
  minQty = (x1,x2)=> {
    if(this.state.cartData[x1][x2].qty > 1){
      let cartData = this.state.cartData
      let qtyAwal = this.state.cartData[x1][x2].qty
      cartData[x1][x2].qty = qtyAwal-1
      this.setState({
        ...this.state,
        cartData:cartData
      })
    } else{
      alert("qty tidak bisa kurang dari 1")
    }
  }
  setSelectedIndex = event => {
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    const contentOffset = event.nativeEvent.contentOffset.x;
    const selectedIndex = Math.floor(contentOffset / viewSize);
    this.setState({
      ...this.state,
      selectedIndex:selectedIndex
    })
  }
  render() {
    const lebar = Dimensions.get("window").width
    const tinggi = Dimensions.get("window").height
    const tinggi5 = Dimensions.get("window").height*5/100
    const tinggi10 = Dimensions.get("window").height*10/100
    const { selectedIndex } = this.state
    return (
      <Container style={{paddingTop: Constants.statusBarHeight}}>
        <Grid>
          <Row size={1}>
            <Col>
              <View style={{ flex: 1, justifyContent: "center",alignItems:"center",backgroundColor:"#ffffff" }}>
                <Row>
                  <Col size={1}>
                    <View style={{ flex: 1, justifyContent: "center",alignItems:"center"}}>
                      <View>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                          <MaterialCommunityIcons name={"arrow-left"} size={25} color={"#000000"} />
                        </Button>
                      </View>
                    </View>
                  </Col>
                  <Col size={9}>
                    <View style={{ flex: 1, justifyContent: "center",alignItems:"flex-start"}}>
                      <Text numberOfLines={1} style={{color:"#000000",fontSize:20,fontWeight:"bold"}}>Keranjang</Text>
                    </View>
                  </Col>
                </Row>
              </View>
            </Col>
          </Row>
          <Row size={8}>
            <Col>
              {this.state.dataDummyCart.length>0&&
              <ScrollView style={{paddingLeft:0,backgroundColor:"#f5f5f5"}}>
                <TouchableOpacity
                  onPress={() => this.pushToCheckDataAll()}
                >
                  <View style={listStyle.content2}>
                    <Row style={{paddingTop:10,paddingBottom:10}}>
                      <Col size={1}>
                        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                          <MaterialCommunityIcons
                            name={
                              this.state.checkData.length == this.state.dataDummyCart.length?"checkbox-marked":"checkbox-blank-outline"
                            }
                            // name={"checkbox-blank-outline"}
                            size={25}
                            color={"#019cde"}
                          />
                        </View>
                      </Col>
                      <Col size={9}>
                        <View style={{flex:1,justifyContent:"center",alignItems:"flex-start"}}>
                          <Text style={{color:"#000000",fontSize:15,fontWeight:"bold",marginLeft:5}}>Pilih semua barang</Text>
                        </View>
                      </Col>
                    </Row>
                  </View>
                </TouchableOpacity>
                {this.state.cartData.length > 0 && this.state.cartData.map((cartData1,index1) =>
                  <View style={listStyle.content2} key={index1}>
                    <Row style={{paddingTop:10,paddingBottom:10}}>
                      <Col>
                        <TouchableOpacity
                          onPress={() => this.pushToCheckDataToko(cartData1)}
                        >
                          <View>
                            <Row>
                              <Col size={1}>
                                <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                                  <MaterialCommunityIcons
                                    name={
                                      this.state.checkData.filter((obj) => obj.toko === cartData1[0].toko).length == cartData1.length?"checkbox-marked":"checkbox-blank-outline"
                                    }
                                    size={25}
                                    color={"#019cde"}
                                    // name={"checkbox-blank-outline"} size={25} color={"#019cde"}
                                  />
                                </View>
                              </Col>
                              <Col size={9}>
                                <View style={{flex:1,justifyContent:"center",alignItems:"flex-start"}}>
                                  <Text style={{color:"#000000",fontSize:15,fontWeight:"bold",marginLeft:5}}>{cartData1[0].toko}</Text>
                                  <Text style={{color:"#000000",fontSize:15,marginLeft:5}}>{cartData1[0].title}</Text>
                                </View>
                              </Col>
                            </Row>
                          </View>
                        </TouchableOpacity>
                      </Col>
                    </Row>
                    {this.state.cartData[index1].length > 0 && this.state.cartData[index1].map((cartData2,index2) =>
                    <Row key={index2}>
                      <Col>
                        <Row style={{paddingTop:10,paddingBottom:10}}>
                          <Col size={1}>
                            <TouchableOpacity
                              onPress={() => this.pushToCheckData(cartData2)}
                            >
                              <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                                <MaterialCommunityIcons
                                  name={
                                    this.state.checkData.findIndex(i => i.id == cartData2.id) >= 0?"checkbox-marked":"checkbox-blank-outline"
                                  }
                                  size={25}
                                  color={"#019cde"}
                                />
                              </View>
                            </TouchableOpacity>
                          </Col>
                          <Col size={9}>
                            <TouchableOpacity
                              onPress={() => this.props.navigation.push("detailCard", { name: cartData2.title,data:cartData2 })}
                            >
                              <Row>
                                <Col size={2}>
                                  <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    <Image
                                      source={{
                                      uri: `https://via.placeholder.com/75`
                                      }}
                                      style={{ height: 75, width: 75,marginLeft:5}}
                                    />
                                  </View>
                                </Col>
                                <Col size={8}>
                                  <View style={{flex:1,justifyContent:"center",alignItems:"flex-start",padding:10}}>
                                    <Text style={{color:"#000000",fontSize:15,fontWeight:"bold",marginLeft:5}}>{cartData2.title}</Text>
                                    <Text style={{color:"#000000",fontSize:15,marginLeft:5}}>{cartData2.price}</Text>
                                  </View>
                                </Col>
                              </Row>
                            </TouchableOpacity>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <View style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                              <TouchableOpacity>
                                <View style={{display:"flex",justifyContent:"center",alignItems:"center",marginLeft:10,marginRight:10}}>
                                  <MaterialCommunityIcons name={"heart"} size={35} color={"#019cde"} />
                                </View>
                              </TouchableOpacity>
                              <TouchableOpacity>
                                <View style={{display:"flex",justifyContent:"center",alignItems:"center",marginLeft:10,marginRight:10}}>
                                  <MaterialCommunityIcons name={"trash-can"} size={35} color={"#019cde"} />
                                </View>
                              </TouchableOpacity>
                              <TouchableOpacity
                                onPress={() => this.minQty(index1,index2)}
                              >
                                <View style={{display:"flex",justifyContent:"center",alignItems:"center",marginLeft:10,marginRight:10}}>
                                  <MaterialCommunityIcons name={"minus-box"} size={35} color={"#019cde"} />
                                </View>
                              </TouchableOpacity>
                              <View style={{display:"flex",justifyContent:"center",alignItems:"center",marginLeft:10,marginRight:10}}>
                                <Text style={{color:"#000000",fontSize:25}}>{cartData2.qty}</Text>
                              </View>
                              <TouchableOpacity
                                onPress={() => this.addQty(index1,index2)}
                              >
                                <View style={{display:"flex",justifyContent:"center",alignItems:"center",marginLeft:10,marginRight:10}}>
                                  <MaterialCommunityIcons name={"plus-box"} size={35} color={"#019cde"} />
                                </View>
                              </TouchableOpacity>
                            </View>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    )}
                  </View>
                )}
              </ScrollView>
              }
            </Col>
          </Row>
          <Row size={1}>
            <Col>
              <View style={{ flex: 1, justifyContent: "center",alignItems:"center",backgroundColor:"#f5f5f5"}}>
                <TouchableOpacity style={listStyle.addCart} onPress={() => alert("it's work")}>
                  <View style={{ flex: 1, justifyContent: "center",alignItems:"center",flexDirection:"row"}}>
                    <FontAwesome5 name={"cart-plus"} size={25} color={"#ffffff"} />
                    <Text numberOfLines={1} style={{color:"#ffffff",fontSize:25,fontWeight:"bold"}}> Keranjang</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
}
const listStyle = StyleSheet.create({
  box:{
    backgroundColor:'#ffffff'
  },
  pad5:{
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5
  },
  borderBottom:{
    borderBottomWidth:1,
    borderBottomColor:"#e6eaed"
  },
  borderAll:{
    borderWidth:1,
    borderColor:"#e6eaed"
  },
  pad5:{
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5
  },
  circleDiv:{
    position:"absolute",
    bottom: 15,
    height: 10,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  whiteCircle:{
    width: 6,
    height: 6,
    borderRadius: 3,
    margin: 5,
    backgroundColor: "#000000"
  },
  carouselTag1:{
    position:"absolute",
    bottom:5,
    left:5,
    padding:5,
    backgroundColor:"rgba(255, 255, 255, 0.8)"
  },
  content1:{
    backgroundColor:"#ffffff",
    flex:1,
    justifyContent:"center",
    alignItems:"flex-start",
    paddingLeft:10,
    paddingTop:5,
    paddingRight:10,
    paddingBottom:5,
    marginBottom:5
  },
  content2:{
    backgroundColor:"#ffffff",
    flex:1,
    justifyContent:"center",
    alignItems:"flex-start",
    paddingLeft:10,
    paddingTop:5,
    paddingRight:10,
    paddingBottom:5,
    marginTop:5,
    marginBottom:5
  },
  addCart:{
    backgroundColor:"#019cde",
    width:"80%",
    height:"60%",
    borderRadius:15
  }
})

const mapStateToProps = state => {
  return {
    shoppingCartData: state.reducer.shoppingCartData
  };
};

export default connect(mapStateToProps)(keranjang);