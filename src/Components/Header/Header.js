import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import React from "react";

const Header = () => {
  const logo = require("../../img/logo.png");
  const send = require("../../img/send.png");
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Image source={logo} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={send} style={styles.send} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    padding: 10,
    paddingTop: 50,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomWidth: 0.2,
    borderColor: "#10101080",
  },
  send: {
    width: 30,
    height: 30,
  },
});
