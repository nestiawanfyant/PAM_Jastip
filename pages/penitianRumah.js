import React,  { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import { Title, RadioButton } from 'react-native-paper';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

// component
import Header from './component/header'

const penitianRumah = ({ navigation }) => {


    let [fontsLoad] = useFonts({
        'DM-Sans-Bold': require('.././assets/fonts/DMSans-Bold.ttf'),
        'DM-Sans-Regular': require('.././assets/fonts/DMSans-Regular.ttf'),
    })

    if(!fontsLoad){
        return <AppLoading />
    } else {
        return (
            <ScrollView style={styles.penitianRumah} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}> 
                <Header back="true" nav={navigation} />
                
                <Text> Form Rumah </Text>
            </ScrollView>
        )
    }
}

export default penitianRumah;

const styles = StyleSheet.create({
    penitianRumah: {
        backgroundColor: '#fff',
        paddingHorizontal: 15, 
    }
}); 