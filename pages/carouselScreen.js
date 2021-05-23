import * as React from 'react';
import { Component } from 'react';
import { connect } from "react-redux";
import { Image,View,StyleSheet,ScrollView,Dimensions} from 'react-native'
import {
  Content
} from "native-base";

const DEVICE_WIDHT = Dimensions.get("window").width
class carouselScreen extends Component {
    scrollRef = React.createRef();
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex:0
        };
    }
    componentDidMount = () => {
        setInterval(() => {
            this.setState(
                prev => ({
                selectedIndex:
                prev.selectedIndex === 2 ? 0 : prev.selectedIndex + 1
                }),
                () => {
                    this.scrollRef.current.scrollTo({
                    animated: true,
                    y:0,
                    x: Dimensions.get("window").width * this.state.selectedIndex
                    });
                }
            );
        },3000);
    }
    setSelectedIndex = event => {
        const viewSize = event.nativeEvent.layoutMeasurement.width;
        const contentOffset = event.nativeEvent.contentOffset.x;
        const selectedIndex = Math.floor(contentOffset / viewSize);
        this.setState({ selectedIndex })
    }
    render() {
        const { selectedIndex } = this.state
        return (
            <View style={{height:"100%",width:"100%"}}>
                <ScrollView horizontal pagingEnabled onMomentumScrollEnd={this.setSelectedIndex} ref={this.scrollRef}>
                    <View key={0} style={{height:"100%",width:Dimensions.get("window").width}}>
                        <Content>
                            <Image
                                source={{
                                uri: `http://anbyafile.jaygeegroupapp.com/assets/img/banner/placeholderBanner600x200.jpg                                `
                                }}
                                style={{ height: 150, width: null, flex: 1 }}
                            />
                        </Content>
                    </View>
                    <View key={1} style={{height:"100%",width:Dimensions.get("window").width}}>
                        <Content>
                            <Image
                                source={{
                                uri: `http://anbyafile.jaygeegroupapp.com/assets/img/banner/placeholderBanner600x200.jpg                                `
                                }}
                                style={{ height: 150, width: null, flex: 1 }}
                            />
                        </Content>
                    </View>
                    <View key={2} style={{height:"100%",width:Dimensions.get("window").width}}>
                        <Content>
                            <Image
                                source={{
                                uri: `http://anbyafile.jaygeegroupapp.com/assets/img/banner/placeholderBanner600x200.jpg                                `
                                }}
                                style={{ height: 150, width: null, flex: 1 }}
                            />
                        </Content>
                    </View>
                </ScrollView>
                <View style={listStyle.circleDiv}>
                    <View key={0} style={[listStyle.whiteCircle,{opacity: 0 === selectedIndex ? 0.5 : 1}]} />
                    <View key={1} style={[listStyle.whiteCircle,{opacity: 1 === selectedIndex ? 0.5 : 1}]} />
                    <View key={2} style={[listStyle.whiteCircle,{opacity: 2 === selectedIndex ? 0.5 : 1}]} />
                </View>
            </View>
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
  }
})
const mapStateToProps = state => {
  return {
    islogin: state.reducer.islogin,
    contentlist: state.reducer.contentlist,
    userinfo: state.reducer.userinfo,
    qtyincart: state.reducer.qtyincart
  };
};

export default connect(mapStateToProps)(carouselScreen);