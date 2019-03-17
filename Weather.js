import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo";

export default class Weather extends Component {
  render() {
    return (
      <LinearGradient colors={["#00C6FB", "#005BEA"]} style={styles.container}>
        <View style={styles.upper}>
          <Text>Icon Here!</Text>
          <Text style={styles.temp}>10 °C</Text>
        </View>
        <View style={styles.lower}>
          <Text style={styles.title}>Raining</Text>
          <Text style={styles.subtitle}>For more info look outside</Text>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  temp: {
    fontSize: 38,
    color: "white",
    marginTop: 25
  },
  lower: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  title: {
    fontSize: 38,
    marginBottom: 10,
    fontWeight: "300",
    color: "white"
  },
  subtitle: {
    fontSize: 24,
    marginBottom: 24,
    color: "white"
  }
});
