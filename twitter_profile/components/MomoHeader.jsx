import { View, Text, StyleSheet, StatusBar, ScrollView, SafeAreaView, Image, TextInput, Animated, Platform } from 'react-native'
import React, { useRef } from 'react'
import { WINDOW_HEIGHT } from '../constants'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);


export default function MomoHeader() {
    const animatedValue = useRef(new Animated.Value(0)).current;
    const scrollViewRef = useRef<ScrollView>(null);
    const lastOffsetY = useRef(0);
    const scrollDirection = useRef();

    const searchInputAnimation = {
        transform: [
            {
                scaleX: animatedValue.interpolate({
                    inputRange: [0, 50],
                    outputRange: [1, 0],
                    extrapolate: 'clamp',
                })
            },
            {
                translateX: animatedValue.interpolate({
                    inputRange: [0, 25],
                    outputRange: [0, -100],
                    extrapolate: 'clamp',
                })
            },
        ],
        opacity: animatedValue.interpolate({
            inputRange: [0, 25],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        })
    }
    const featureNameAnimation = {
        transform: [
            {
                scale: animatedValue.interpolate({
                    inputRange: [0, 30],
                    outputRange: [1, 0],
                    extrapolate: 'clamp',
                })
            },
        ],
        opacity: animatedValue.interpolate({
            inputRange: [0, 30],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        })
    }

    const depositeViewAnimation = {
        transform: [
            {
                translateX: animatedValue.interpolate({
                    inputRange: [0, 80],
                    outputRange: [0, 50],
                    extrapolate: 'clamp',
                })
            },
            {
                translateY: animatedValue.interpolate({
                    inputRange: [0, 100],
                    outputRange: [0, -55],
                    extrapolate: 'clamp',
                })
            },
        ]
    }
    const withdrawViewAnimation = {
        transform: [
            {
                translateX: animatedValue.interpolate({
                    inputRange: [0, 80],
                    outputRange: [0, 5],
                    extrapolate: 'clamp',
                })
            },
            {
                translateY: animatedValue.interpolate({
                    inputRange: [0, 100],
                    outputRange: [0, -55],
                    extrapolate: 'clamp',
                })
            },
        ]
    }
    const qrViewAnimation = {
        transform: [
            {
                translateX: animatedValue.interpolate({
                    inputRange: [0, 80],
                    outputRange: [0, -40],
                    extrapolate: 'clamp',
                })
            },
            {
                translateY: animatedValue.interpolate({
                    inputRange: [0, 100],
                    outputRange: [0, -55],
                    extrapolate: 'clamp',
                })
            },
        ]
    }
    const scanViewAnimation = {
        transform: [
            {
                translateX: animatedValue.interpolate({
                    inputRange: [0, 80],
                    outputRange: [0, -80],
                    extrapolate: 'clamp',
                })
            },
            {
                translateY: animatedValue.interpolate({
                    inputRange: [0, 100],
                    outputRange: [0, -55],
                    extrapolate: 'clamp',
                })
            },
        ]
    }

    const featureIconCircleAnimation = {
        opacity: animatedValue.interpolate({
            inputRange: [0, 25],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        })
    };

    const featureIconAnimation = {
        opacity: animatedValue.interpolate({
            inputRange: [0, 50],
            outputRange: [0, 1],
            extrapolate: 'clamp',
        })
    };

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
                    <AnimatedTextInput 
                        placeholder='Tulasi Joshua' 
                        placeholderTextColor="rgba(255, 255, 255, 0.8)"
                        style={[styles.searchInput, searchInputAnimation]}
                    />
                </View>
                <Ionicons name="notifications-outline" size={17} color="#fff" style={styles.bellIcon} />
                <Ionicons name="notifications-outline" size={25} color="#fff" style={styles.avatar} />
            </View>
            <View style={styles.lowerHeader}>
                <Animated.View style={[styles.feature, depositeViewAnimation]}>
                    <Animated.View style={[styles.featureIconCircle, featureIconCircleAnimation]} >
                        <AntDesign name="login" size={30} color="#fff" />
                    </Animated.View>
                    <Animated.View style={[styles.featureIcon, featureIconAnimation]}>
                        <AntDesign name="login" size={20} color="#fff" />
                    </Animated.View>
                    <Animated.Text style={[styles.featureName, featureNameAnimation]}>NAP TIEN</Animated.Text>
                </Animated.View>
                <Animated.View style={[styles.feature, withdrawViewAnimation]}>
                    <Animated.View style={[styles.featureIconCircle, featureIconCircleAnimation]} >
                        <AntDesign name="login" size={30} color="#fff" />
                    </Animated.View>
                    <Animated.View style={[styles.featureIcon, featureIconAnimation]}>
                        <AntDesign name="login" size={20} color="#fff" />
                    </Animated.View>
                    <Animated.Text style={[styles.featureName, featureNameAnimation]}>NAP TIEN</Animated.Text>
                </Animated.View>
                <Animated.View style={[styles.feature, qrViewAnimation]}>
                    <Animated.View style={[styles.featureIconCircle, featureIconCircleAnimation]} >
                        <AntDesign name="login" size={30} color="#fff" />
                    </Animated.View>
                    <Animated.View style={[styles.featureIcon, featureIconAnimation]}>
                        <AntDesign name="login" size={20} color="#fff" />
                    </Animated.View>
                    <Animated.Text style={[styles.featureName, featureNameAnimation]}>NAP TIEN</Animated.Text>
                </Animated.View>
                <Animated.View style={[styles.feature, scanViewAnimation]}>
                    <Animated.View style={[styles.featureIconCircle, featureIconCircleAnimation]} >
                        <AntDesign name="login" size={30} color="#fff" />
                    </Animated.View>
                    <Animated.View style={[styles.featureIcon, featureIconAnimation]}>
                        <AntDesign name="login" size={20} color="#fff" />
                    </Animated.View>
                    <Animated.Text style={[styles.featureName, featureNameAnimation]}>NAP TIEN</Animated.Text>
                </Animated.View>
            </View>
        </SafeAreaView>
        
        <ScrollView 
            ref={scrollViewRef} 
            onScroll={e => {
            const offsetY = e.nativeEvent.contentOffset.y;
            scrollDirection.current = offsetY - lastOffsetY.current > 0 ? 'down' : 'up';
            lastOffsetY.current = offsetY;
            animatedValue.setValue(offsetY);
        }}
        onScrollEndDrag={() => {
            scrollViewRef.current?.scrollTo({
                y: scrollDirection.current === 'down' ? 100 : 0,
                animated: true,
            })
        }}
        scrollEventThrottle={16}>
            <View style={styles.paddingForHeader} />
            <View style={styles.scrollViewContent} />
        </ScrollView>
    </View>
  )
}

const UPPER_HEADER_HEIGHT = 70;
const LOWER_HEADER_HEIGHT = 90;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    upperHeaderPlaceholder: {
        height: UPPER_HEADER_HEIGHT,
    },
    header: {
        // paddingTop: Platform.OS === 'android' ? 50 : 20,
        position: 'absolute',
        paddingTop: 20,
        // paddingBottom: 60,
        width: '100%',
        backgroundColor: '#AF0C6E'
    },
    upperHeader: {
        height: UPPER_HEADER_HEIGHT,
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
        width: '90%',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        color: 'white',
        borderRadius: 4,
        paddingVertical: 4,
        paddingLeft: 50,
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
        height: LOWER_HEADER_HEIGHT,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 16,
    },
    feature: {
        alignItems: 'center'
    },
    featureIconCircle: {
        width: 32,
        height: 32,
    },
    featureIcon: {
        position: 'absolute',
        top: -6,
    },
    featureName: {
        fontWeight: 'bold',
        fontSize: 12,
        lineHeight: 14,
        color: 'white',
        marginTop: 12,
    },
    paddingForHeader: {
        height: LOWER_HEADER_HEIGHT,
    },
    scrollViewContent: {
        height: WINDOW_HEIGHT * 2,
        backgroundColor: 'white'
    }
})