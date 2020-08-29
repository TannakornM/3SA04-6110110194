import React from 'react';
import {useState, useEffect }from "react";
import { Text, ImageBackground , StyleSheet , View} from 'react-native';
import Forecast from './Forecast';

export default function Weather(props) {

    const [forecastInfo, setForecastInfo] = useState({

        main: '-',
        description: '-',
        temp: 0,
        name: 'city'
    })

    
    useEffect(() => {
    console.log(`fetching data with zipCode = ${props.zipCode}`)
    if (props.zipCode) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=4ee4fac2d78f738a7dcf557229323800`)
        .then((response) => response.json())
        .then((json) => {
            setForecastInfo({
                main: json.weather[0].main,
                description: json.weather[0].description,
                temp: json.main.temp,
                name: json.name,
            })
        })
        .catch((error) => {
            console.warn(error);
        });
    }
    }, [props.zipCode])

    

    return (
        <View>
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                <View style = {styles.bgcenter}>
                <View style = {styles.text}>
                    <Text style={styles.textZip}>Zip Code is {props.zipCode}</Text>
                    <Forecast {...forecastInfo} />
                </View>
                </View>
            </ImageBackground>
        </View>
            
    );
   }
   const styles = StyleSheet.create({
        backdrop: {
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: '100%',
            height: '100%',
        },
        
        bgcenter: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '90%',
            height: '80%',
        },

        text: {
            textAlign: 'center',
            fontWeight: 'bold',
            marginTop: 0,
            justifyContent: 'space-evenly',
            width: '100%',
            height: '70%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          },

          textZip: {
            textAlignVertical: "center",
            textAlign: "center",
            fontSize: 20,
            color: 'white'
          }

   });

  
   