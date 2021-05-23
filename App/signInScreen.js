import React, { Component } from 'react';
import axios from 'axios';
import { connect } from  'react-redux'
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { Form, Item, Input, Label, Button, Container } from 'native-base';
import {
  BarIndicator,
} from 'react-native-indicators';
import {_retrieveData, _storeData,_clearData} from './localStorage'


class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EMAIL: "",
      PASS: "",
      loadingView:false
    };
  }
  handleSubmit = () => {
    this.setState({
        ...this.state,
      loadingView:true
    });
    if(this.state.EMAIL===''||this.state.PASS===''){
        alert(`isi semua field`)
        this.setState({
            ...this.state,
            loadingView:false
        });
    } else {
        const sendlogin = {
            EMAIL: str.toLowerCase(this.state.EMAIL),
            PASS: this.state.PASS
        };
        axios
        .post(`https://avowstest.armyali.com/avowstest/User`, sendlogin, {
          headers: {
            "Access-Control-Allow-Origin": "*"
          }
        })
        .then(hasil => {
            if(hasil.data.status!=="00"){
                alert(`${hasil.data.pesan}`)
                this.setState({
                    ...this.state,
                    loadingView:false
                });
            } else {
                _storeData('userToken',JSON.stringify(hasil.data.dataUSer[0])).then(async()=>{
                    this.setState({
                        ...this.state,
                        loadingView:false
                    });
                    await this.props.dispatch({ type: "HOME_STATE", payload: true });
                    this.props.dispatch({ type: "USER_INFO", payload: hasil.data.dataUSer[0] });
                });
            }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
  render() {
    const lebar = Dimensions.get("window").width / 3
    const testLebar = 50
    return (
        <ScrollView>
            <KeyboardAvoidingView>
                <Container>
                    <View style={{flex:1,justifyContent:"center"}}>
                        <View>
                        <Image source={{uri: `http://anbyafile.jaygeegroupapp.com/assets/img/shop.png`}} style={{height: 100, width: 100,alignSelf:"center"}}/>
                        </View>
                        <View style={{paddingLeft:25,paddingRight:25}}>
                        <View>
                            <Text style={{color:"#000000",fontSize:20,fontWeight:"bold",textAlign:"center",paddingTop:5,paddingBottom:5}}>Wellcome</Text>
                            <Text style={{color:"#858585",fontSize:15,textAlign:"center",paddingTop:5,paddingBottom:5}}>Sign in to continue</Text>
                            <Form>
                                <Item floatingLabel>
                                <Label>Email</Label>
                                <Input
                                type="text"
                                name="EMAIL"
                                onChangeText={(text) => this.setState({ EMAIL:text})}
                                required
                                disabled ={this.state.loadingView === true?true:false}
                                />
                                </Item>
                                <Item floatingLabel last style={{marginBottom:20}}>
                                <Label>Password</Label>
                                <Input
                                type="text"
                                name="PASS"
                                onChangeText={(text) => this.setState({ PASS:text})}
                                secureTextEntry={true}
                                required
                                disabled ={this.state.loadingView === true?true:false}
                                />
                                </Item>
                                <Button
                                info
                                block
                                onPress={() => this.handleSubmit()}
                                disabled ={this.state.loadingView === true?true:false}>
                                    {
                                        this.state.loadingView === true?<BarIndicator color='#ffffff' />:<Text style={{color:"#ffffff",fontSize:15,fontWeight:"bold"}}>Sign in</Text>
                                    }
                                </Button>
                                <View style={{paddingTop:5,paddingBottom:5}}>
                                <Text style={{textAlign:"center"}}>
                                    <Text style={{color:"#858585",fontSize:15}}>Don't have an account? </Text>
                                    <Text
                                    style={{color:"#019cde",fontSize:15,fontWeight:"bold"}}
                                    onPress={() => this.props.navigation.push("CreateAccount")}
                                    >
                                    Register
                                    </Text>
                                </Text>
                                </View>
                            </Form>
                        </View>
                        </View>
                    </View>
                </Container>
            </KeyboardAvoidingView>
        </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    userinfo: state.reducer.userinfo
  };
};

export default connect(mapStateToProps)(SignInScreen);