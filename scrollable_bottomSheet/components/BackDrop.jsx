import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated'

export default function BackDrop({ topAnimation, openHeight, closeHeight, close, backDropColor}) {
    const backDropAnimation = useAnimatedStyle(() => {
        const opacity = interpolate(
            topAnimation.value,
            [closeHeight, openHeight],
            [0, 0.5]
        );
        const display = opacity === 0 ? 'none' : 'flex';
        return {
            opacity,
            display
        }
    })
  return (
    <TouchableWithoutFeedback onPress={() => {
        close();
    }}>
        <Animated.View style={[styles.container, backDropAnimation, {
            backgroundColor: backDropColor
        }]}>
        <Text>BackDrop</Text>
        </Animated.View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'black',
        display: 'none'
    }
})