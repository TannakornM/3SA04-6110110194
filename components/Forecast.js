import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Forecast(props) {
    return (
        <View >
            <Text style = {styles.texts}>{props.name}</Text>
            <Text style = {styles.TextLarge}>{props.main}</Text>
            <View >
                <Text style = {styles.TextTemp}>{props.temp} <Text style = {styles.textC}>°C</Text> </Text>
                
            </View>
            <Text style = {styles.textdes}>{props.description}</Text>
        </View>
    );
    
   }

   const styles = StyleSheet.create({
    texts: {
        
        backgroundColor: '#8EF0F9',
        borderRadius: 20,
        marginTop: 40,
        marginBottom: 10,
        marginLeft: 50,
        marginRight: 50,
        padding: 5,
        textAlignVertical: "center",
        textAlign: "center",
        fontSize: 25,
        height: 55,
        color: 'blue',
       // width: '80%',
        //height: '100%',
      
    },
    textC: {
        fontSize: 18,
        color: 'white'
    },
    TextLarge: {
        textAlignVertical: "center",
        textAlign: "center",
        fontSize: 40,
        height: 80,
        color: 'white'
    },
    textdes: {
        textAlignVertical: "center",
        textAlign: "center",
        fontSize: 18,
        height: 25,
        color: 'white'
    },
    TextTemp: {
        textAlignVertical: "center",
        textAlign: "center",
        fontSize: 60,
        height: 80,
        color: 'white'
    },

  }); 