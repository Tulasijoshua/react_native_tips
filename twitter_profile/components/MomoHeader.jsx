import { View, Text, StyleSheet, StatusBar, ScrollView, SafeAreaView, Image, TextInput } from 'react-native'
import React from 'react'
import { WINDOW_HEIGHT } from '../constants'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';


export default function MomoHeader() {
  return (
    <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
            <View style={styles.upperHeaderPlaceholder} />
        </SafeAreaView>


        <SafeAreaView style={styles.header}>
            <View style={styles.upperHeader} >
                <View style={styles.searchContainer}>
                    <EvilIcons name="search" size={30} color="#fff" style={styles.searchIcon} />
                    <TextInput 
                        placeholder='Tulasi Joshua' 
                        placeholderTextColor="rgba(255, 255, 255, 0.8)"
                        style={styles.searchInput}
                    />
                </View>
                <Ionicons name="notifications-outline" size={25} color="#fff" style={styles.bellIcon} />
                <Ionicons name="notifications-outline" size={25} color="#fff" style={styles.avatar} />
            </View>
            <View style={styles.lowerHeader}>
                <View style={styles.feature}>
                    <AntDesign name="login" size={30} color="#fff" style={styles.avatar} />
                </View>
            </View>
        </SafeAreaView>
        
        <ScrollView>
            <View style={styles.paddingForHeader} />
            <View style={styles.scrollViewContent} />
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    upperHeaderPlaceholder: {
        height: 40,
    },
    header: {
        position: 'absolute',
        paddingTop: 30,
        width: '100%',
        backgroundColor: '#AF0C6E'
    },
    upperHeader: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16
    },
    searchContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    searchIcon: {
        width: 30,
        height: 30,
        marginLeft: 8,
    },
    searchInput: {
        position: 'absolute',
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        color: 'white',
        borderRadius: 4,
        paddingVertical: 4,
        paddingLeft: 32,
    },
    // bellIcon: {
    //     width: 16,
    //     height: 16,
    //     marginHorizontal: 32,
    // },
    // avatar: {
    //     width: 28,
    //     height: 28,
    // },
    lowerHeader: {
        height: 96
    },
    paddingForHeader: {
        height: 96,
    },
    scrollViewContent: {
        height: WINDOW_HEIGHT * 2,
        backgroundColor: 'white'
    }
})