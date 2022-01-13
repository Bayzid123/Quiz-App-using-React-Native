import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import Title from "../components/title";

const stack = createStackNavigator();

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Title style={styles.title} />
      <View style={styles.bannerContainer}>
        <Image
          source={require("../assets/images/Questions-amico.png")}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity 
      onPress={() => navigation.navigate("Quiz")}
      style={styles.button}
      >
        <Text style={styles.buttontext}>Start</Text>
      </TouchableOpacity>
      <StatusBar />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:20,
    height:"100%",
    alignItems:"center",
  },
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex:1,
  },
  button:{
    width:"50%",
    backgroundColor:"#ff523b",
    padding:12,
    borderRadius:30,
    alignItems:"center",
    marginBottom: 30,
  },
  buttontext:{
    fontSize:20,
    fontWeight: "600",
    color: "white",
  }
});
