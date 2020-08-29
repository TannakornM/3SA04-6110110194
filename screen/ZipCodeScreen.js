
import React from 'react';
import { FlatList, View, Text,StyleSheet, TouchableHighlight,ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Bangkok', code: '10140' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },

   ]
const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => { 
        navigation.navigate('Weather', { zipCode: code})
    }}>
        <View  style = {styles.zipItem}>
            <Text>{place}</Text>
            <Text>{code}</Text>
        </View>
    </TouchableHighlight>
)


export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return (
        <ImageBackground source={require('../bgHome.jpg')} style={styles.backdrop}>
        <View>
            <FlatList
                data={availableZipItems}
                keyExtractor={item => item.code}
                renderItem={({item}) => <ZipItem {...item} navigation = {navigation}/>}
            />
            <StatusBar style="auto" />
        </View>
        </ImageBackground>
    );
   
   }
   
   const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },

       zipItem: {
           flex: 1,
           flexDirection: 'row',
           justifyContent: 'space-evenly',

       },

       zipPlace: {
           flex: 1,
       },

       zipCode: {
           flex: 1,
       }
   })