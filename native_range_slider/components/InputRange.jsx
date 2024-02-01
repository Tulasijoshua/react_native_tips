import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react';
import Animated, {useAnimatedGestureHandler, useAnimatedStyle, useSharedValue} from 'react-native-reanimated';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';

const WIDTH = Dimensions.get('window').width - 40;
const KONBSIZE = 20;
export default function InputRange({min, max, steps, title, onValueChange}) {
    const xKnob1 = useSharedValue(0)

    const gestureHandler1  = useAnimatedGestureHandler({
        onStart:(_, ctx) => {},
        onActive:(event, ctx) => {
            xKnob1.value = event.translationX;
        },
        onEnd:() => {},
    })
    const styleLine = useAnimatedStyle(() => {
        return {
            backgroundColor: 'orange',
            height: 3,
            marginTop: -3,
            borderRadius: 3,
            width: 100,
            transform: [{translateX: 0 }]
        }
    })

  return (
    <GestureHandlerRootView>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.rangeContainer}>
        <View style={styles.labelsContainer}>
            <Text style={styles.label}>{min}</Text>
            <Text style={styles.label}>{max}</Text>
        </View>
        <View style={styles.track} />
        <Animated.View style={styleLine} />
        <View>
            <PanGestureHandler onGestureEvent={gestureHandler1}>
                <Animated.View style={[styles.knob]} />
            </PanGestureHandler>
        </View>
      </View>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#eee',
        borderTopWidth: 1,
        borderColor: '#cccdb2',
        borderBottomWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    title: {
        color: '#777',
        fontSize: 12,
    },
    rangeContainer: {
        padding: 20,
        backgroundColor: '#fff',
        borderColor: '#cccdb2',
        borderBottomWidth: 1,
    },
    labelsContainer: {
        width: WIDTH,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 18,
    },
    label: {
        color: '#333',
        fontSize: 12,
    },
    track: {
        height: 3,
        backgroundColor: '#cccdb2',
        borderRadius: 3,
    },
    knob: {
        position: 'absolute',
        height: KONBSIZE,
        width: KONBSIZE,
        borderRadius: KONBSIZE / 2,
        borderColor: '#9c44dc',
        borderWidth: 2,
        backgroundColor: '#fff',
        marginTop: -KONBSIZE + 8,
        marginLeft: -8,
    }
})