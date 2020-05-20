import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze: {
        iconName: "weather-fog",
        gradient: ['#F3904F', '#3B4371'],
        title: "Haze",
        subtitle: "Just don't go outside",
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ['#0052D4', '#4364F7', '#6FB1FC'],
        title: "Clouds",
        subtitle: "I know, fucking boring"
    },
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ['#1e3c72', '#2a5298'],    
        title: "Thunderstorm in the house",
        subtitle: "Actually, outside of the house"
    }, 
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ['#7474BF', '#348AC7'],
        title: "Drizzle",
        subtitle: "Is like rain, but gay 🏳️‍🌈"
    }, 
    Rain: {
        iconName: "weather-pouring",
        gradient: ['#1488CC', '#2B32B2'],
        title: "Raining like a MF",
        subtitle: "For more info look outside"
    }, 
    Snow: {
        iconName: "weather-snowy",
        gradient: ['#BE93C5', '#7BC6CC'],
        title: "Cold as balls",
        subtitle: "Do you want to build a snowman? Fuck no."
    }, 
    Atmosphere: {
        iconName: "weather-cloudy",
        gradient: ['#ffd89b', '#19547b'],
        title: "Atmosphere",
        subtitle: "Just don't go outside",
    }, 
    Clear: {
        iconName: "weather-sunny",
        gradient: ['#e65c00', '#F9D423'],
        title: "Sunny as fuck",
        subtitle: "Go get your ass burnt"
    }, 
    Mist: {
        iconName: "weather-fog",
        gradient: ['#16A085', '#F4D03F'],
        title: "Mist!",
        subtitle: "It's like you have no glasses on."
    }, 
    Dust: {
        iconName: "weather-fog",
        gradient: ['#3D7EAA', '#FFE47A'],
        title: "Dusty",
        subtitle: "Thanks a lot China 🖕🏻"
    },
};

export default function Weather({temp, condition}) {

    return (
        <LinearGradient 
            colors={weatherOptions[condition].gradient}
            style={styles.container}>

            <StatusBar barStyle="light-content"/>

            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                    size={86} 
                    name={weatherOptions[condition].iconName} 
                    color="white"
                />
                <Text style={styles.temp}>
                    {temp}
                </Text>
            </View>

            <View style={styles.halfContainer}>
                <View style={{...styles.halfContainer, ...styles.textContainer}}>
                    <Text style={styles.title}>
                        {weatherOptions[condition].title}
                    </Text>
                    <Text style={styles.subtitle}>
                        {weatherOptions[condition].subtitle}
                    </Text>
                </View>
            </View>

        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Clouds", 
        "Haze", 
        "Mist", 
        "Dust"
    ]).isRequired,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    temp: {
        fontSize: 30,
        color: 'white',
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10,
    },
    subtitle: {
        color: 'white',
        fontWeight: "600",
        fontSize: 24,
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: 'flex-start',
    }
})