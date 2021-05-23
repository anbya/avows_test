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
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";


class Splash extends Component {
  render() {
    return (
        <View style={styles.container}>
            <Image
                source={{
                uri: `http://anbyafile.jaygeegroupapp.com/assets/img/27023270_170x100.gif`
                }}
                style={{ height: 300, width: 300}}
            />
        </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"#20AAE3"
    }
  });
export default Splash;