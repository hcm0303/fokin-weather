import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = "8183621b3aa6938e3ab16eb4535ae68b";

export default class App extends React.Component {
	state = {
		isLoading: true,
	}

	//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}
	//http://api.openweathermap.org/data/2.5/weather?lat=37.523519048380585&lon=126.92703757072195&appid=8183621b3aa6938e3ab16eb4535ae68b
	getWeather = async (latitude, longitude) => {
		const {
			data: {
				main: { temp },
				weather,
			}
		} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`);
		this.setState({
			isLoading: false,
			temp,
			condition: weather[0].main,
		});
	}

	getLocation = async () => {
		try {
			const response = await Location.requestPermissionsAsync();
			console.log(response);
			const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
			console.log(latitude, longitude);
			this.getWeather(latitude, longitude);
		} 
		catch(error) {
			console.error(error);
			Alert.alert("Can't find you.", "So sad");
		}
	}

	componentDidMount() {
		this.getLocation();
	}

	render() {
		const {isLoading, temp, condition} = this.state;
		return (
			isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition}/>
		)
	}
}