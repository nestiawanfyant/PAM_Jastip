import React from 'react'
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Title, Caption } from 'react-native-paper';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

// components
import Header from './component/header'

const viewhistory = ({ navigation }) => {

    let [fontsLoad] = useFonts({
        'DM-Sans-Bold': require('.././assets/fonts/DMSans-Bold.ttf'),
        'DM-Sans-Regular': require('.././assets/fonts/DMSans-Regular.ttf'),
    })

    if(!fontsLoad){
        return (
            <AppLoading />
        )
    } else {
        return (
            <ScrollView style={styles.viewHistory} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <Header back="true" nav={navigation} name="Penitipan" />
                
                <Text> View History </Text>
            </ScrollView>
        )
    }
}

export default viewhistory;

const styles = StyleSheet.create({
    viewHistory: {
        backgroundColor: '#fff',
        paddingHorizontal: 10,
    },
})