import React, {useState, useEffect} from 'react';

import { Platform, ScrollView, StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Appbar, Avatar } from 'react-native-paper';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

// components
import Header from './component/header'

const homeScreen = ({ navigation }) => {

    const [nameSession, sessionNama] =  useState('');

    useEffect(() => {
        AsyncStorage.getItem('sessionNama').then((name) => {
            if(name){
                sessionNama(name);
            }
        });
    }, []);

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
            <ScrollView style={styles.home} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}> 
                <Header nav={navigation} />
                
                <Text> Home Page </Text>
            </ScrollView>
        )
    }
}

export default homeScreen;

const styles = StyleSheet.create({
    AppBar:{
        backgroundColor: '#fff'
    },
    home: {
        paddingLeft: 15, 
        paddingRight: 15,
        backgroundColor: '#fff'
    },
    HelloUser: {
        marginTop: 25,
        marginBottom: 30,
    },
    textHi: {
        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'DM-Sans-Regular',
    },
    textDoing: {
        fontSize: 26,
        fontWeight: '700',
        fontFamily: 'DM-Sans-Bold'
    },
    textTitip: {
        fontSize: 18,
        fontWeight: '700',
        fontFamily: 'DM-Sans-Bold',
        marginBottom: 10, 
    },
    Titip: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 17, 
    },
    history: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 17, 
    },
    cardTitip: {
        display: 'flex',
        flexDirection: 'column',
        marginRight: 5,
        backgroundColor: '#f4f4f4',
        paddingVertical: 15, 
        paddingHorizontal: 20, 
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: 10,
        fontSize: 11.5,
        elevation: 1.55,
        shadowColor: '#efefef',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        marginBottom: 5, 
    },
    iconTitip: {
        width: 50,
        height: 50,
        marginBottom: 10, 
        borderRadius: 10,
    },
    cardHistory: {
        width: 180, 
        height: 'auto',
        // backgroundColor: '#e8e8e8',
        borderRadius:10, 
        textAlign: 'left',
        marginRight: 10,
        marginTop: 10
    },
    imgHistory: {
        // width: 180,
        resizeMode: 'cover',
        height: 120, 
        borderRadius: 10, 
    },
    textHistory: {
        marginVertical: 6, 
        marginHorizontal: 3
    },
    textCardHistory: {
        marginVertical: 10,
    },
    textHistoryTag: {
        fontFamily: 'DM-Sans-Regular',
        fontSize: 13, 
        marginBottom: 5, 
        color: '#259A62'
    },
    textHistoryTitle: {
        fontWeight: '700',
        fontSize: 17, 
        fontFamily: 'DM-Sans-Bold',
    },
    textHistoryLocation: {
        fontWeight: '500',
        fontSize: 14,
        fontFamily: 'DM-Sans-Regular',
    },
    textHistoryTime: {
        marginTop: 10,
        fontFamily: 'DM-Sans-Regular',
    }
})