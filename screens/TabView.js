import React, { Component } from "react";
import {
  View,
  useWindowDimensions,
  StyleSheet,
  Dimensions,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Home from "./HomeScreen";
import Notification from "./NotificationScreen";
import Setting from "./SettingScreen";
import  firebaseConfig from "../firebase/Config";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons'; 

const windowWidth = Dimensions.get("window").width;

export default class Bottom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: "first", title: "Home" },
        { key: "second", title: "Notification" },
        { key: "three", title: "Setting" },
      ],
      loading : true ,
      user : null 
    };
  }
   componentDidMount(){
    //  this.props.navigation.navigate('Login')
   }

  renderScene = ({ route  }) => {
    
    switch (route.key) {
      case "first":
        return <Home navigation={this.props.navigation} />;
      case "second":
        return <Notification navigation={this.props.navigation} />;
      case "three":
        return <Setting  navigation={this.props.navigation}/>;
      default:
        return null;
    }
  };

  renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "red" }}
      style={{ backgroundColor: "pink" }}
      renderIcon={({ route, focused, color }) => {
        if (route.key === "first") {
          return <FontAwesome name="home" size={24} color="black" />
        }
        if (route.key == "second") {
          return <FontAwesome name="bell-o" size={24} color="black" />
        }
        if (route.key == "three") {
          return <Ionicons name="settings" size={23} color="black" />;
        }
      }}
    />
  );

  render() {
    const { index, routes } = this.state;
    console.log("Name  :" , this.props.route?.params?.user.email)

    return (
      <TabView
        navigationState={{ index, routes }}
        renderScene={this.renderScene}
        onIndexChange={(index) =>
          this.setState({
            index,
          })
        }
        initialLayout={{ width: windowWidth }}
        tabBarPosition={"bottom"}
        renderTabBar={this.renderTabBar}
      />
    );
  }
}

