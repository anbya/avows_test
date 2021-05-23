import React, { Component } from "react";
import axios from "axios";
import { withNavigation } from "react-navigation";
import { Dimensions, Image, ScrollView, View, StyleSheet } from "react-native";
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
  Badge
} from "native-base";
import { material } from "react-native-typography";
import { Col, Row, Grid } from "react-native-easy-grid";
import IconBadge from "react-native-icon-badge";
import { Ionicons } from "@expo/vector-icons";
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
  Loader,
  Shine,
  ShineOverlay
} from "rn-placeholder";
class CardTest extends Component {
  render() {
    // console.log(this.state.evcrDetail);
    // console.log(this.state.brandDetail);
    // console.log(this.state.evcrPhoto);
    // console.log(this.state.merchantDetail);
    // console.log(this.state.hargaToshow);
    return (
      // <Content>
      <ScrollView
        style={{ flex: 1, flexDirection: "row" }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >

        <Card style={{ width: 350 }}>
          <CardItem cardBody>
            <Image
              source={{ uri: "http://158.140.177.79/img/imgPlaceholder.png" }}
              style={{ height: 200, width: null, flex: 1 }}
            />
          </CardItem>
          <CardItem>
            <Grid>
              <Row style={styles.padTopBottom}>
                <Col size={10}>
                  <View>
                    <Placeholder Animation={Shine}>
                        <PlaceholderLine width={100} />
                    </Placeholder>
                  </View>
                  <View style={{ flex: 1, flexDirection: "row" }}>
                    <Placeholder Animation={Shine}>
                        <PlaceholderLine width={35} />
                    </Placeholder>
                  </View>
                  <View>
                    <Placeholder Animation={Shine}>
                        <PlaceholderLine width={25} />
                    </Placeholder>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                  </View>
                </Col>
              </Row>
              <Row style={styles.padTopBottom}>
                <Col size={12}>
                    <Placeholder Animation={Shine}>
                        <PlaceholderLine width={100} />
                    </Placeholder>
                </Col>
              </Row>
            </Grid>
          </CardItem>
        </Card>
      </ScrollView>
      // </Content>
    );
  }
}
const styles = StyleSheet.create({
  padTopBottom: {
    paddingTop: 2,
    paddingBottom: 2
  }
});

export default withNavigation(CardTest);
