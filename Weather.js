import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
  Rain: {
    colors: ["#00C6FB", "#005BEA"],
    title: "Raining",
    subtitle: "For more info look outside",
    icon: "weather-pouring"
  },
  Clear: {
    colors: ["#FEF253", "#FF7300"],
    title: "Sunny",
    subtitle: "Go Outsied",
    icon: "weather-sunny"
  },
  Thunderstorm: {
    colors: ["#00ECBC", "#007ADF"],
    title: "Thunderstorm",
    subtitle: "Crazy weather",
    icon: "weather-lightning-rainy"
  },
  Clouds: {
    colors: ["#D7D2CC", "#304352"],
    title: "Clouds",
    subtitle: "So boring",
    icon: "weather-cloudy"
  },
  Snow: {
    colors: ["#7DE2FC", "#B9B6E5"],
    title: "Snow",
    subtitle: "Very cold",
    icon: "weather-snowy"
  },
  Drizzle: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "Drizzle",
    subtitle: "rain drop",
    icon: "weather-rainy"
  },
  Haze: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "Haze",
    subtitle: "Warning Fog",
    icon: "weather-fog"
  },
  Mist: {
    color: ["#D7D2CC", "#304352"],
    title: "Mist",
    subtitle: "You don't need your MIST",
    icon: "weather-hail"
  }
};

function Weather({ temp, weatherName }) {
  return (
    <LinearGradient
      colors={weatherCases[weatherName].colors}
      style={styles.container}
    >
      <View style={styles.upper}>
        <MaterialCommunityIcons
          color="white"
          size={144}
          name={weatherCases[weatherName].icon}
        />
        <Text style={styles.temp}>{Math.round(temp - 273.15)}°</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
        <Text style={styles.subtitle}>
          {weatherCases[weatherName].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  weatherName: PropTypes.string.isRequired
};

export default Weather;

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
