import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Forecast(props) {
    return (
        <View >
            <Text style = {styles.texts}>{props.name}</Text>
            <Text style = {styles.TextLarge}>{props.main}</Text>
            <Text style = {styles.texts}>{props.description}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style = {styles.TextLarge}>{props.temp} </Text>
                <Text style = {styles.texts}> °C</Text>
            </View>
        </View>
    );

   }

   const styles = StyleSheet.create({
    texts: {
        textAlignVertical: "center",
        textAlign: "center",
        fontSize: 18,
        height: 40,
        color: 'white'
      
    },
    TextLarge: {
        textAlignVertical: "center",
        textAlign: "center",
        fontSize: 50,
        height: 100,
        color: 'white'
    },
    
  }); 