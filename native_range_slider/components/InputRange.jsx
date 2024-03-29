import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react';
import Animated, {useAnimatedGestureHandler, useAnimatedStyle, useSharedValue} from 'react-native-reanimated';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';

const WIDTH = Dimensions.get('window').width - 40;
const KONBSIZE = 20;
const MAXWIDTH = WIDTH - KONBSIZE/2 + 6
export default function InputRange({min, max, steps, title, onValueChange}) {
    const xKnob1 = useSharedValue(0)
    const scaleKnob1 = useSharedValue(1)
    const xKnob2 = useSharedValue(MAXWIDTH)
    const scaleKnob2 = useSharedValue(1)

    const gestureHandler1  = useAnimatedGestureHandler({
        onStart:(_, ctx) => {
            ctx.startX = xKnob1.value;
        },
        onActive:(event, ctx) => {
            scaleKnob1.value = 1.3;
            xKnob1.value = 
                ctx.startX + event.translationX < 0 
                    ? 0 
                    : ctx.startX + event.translationX > xKnob2.value
                    ? xKnob2.value
                    : ctx.startX + event.translationX;
        },
        onEnd:() => {
            scaleKnob1.value = 1;
        },
    })
    const gestureHandler2  = useAnimatedGestureHandler({
        onStart:(_, ctx) => {
            ctx.startX = xKnob2.value;
        },
        onActive:(event, ctx) => {
            scaleKnob2.value = 1.3;
            xKnob2.value = 
                ctx.startX + event.translationX < xKnob1.value
                    ? xKnob1.value
                    : ctx.startX + event.translationX > MAXWIDTH
                    ? MAXWIDTH
                    : ctx.startX + event.translationX;
        },
        onEnd:() => {
            scaleKnob2.value = 1;
        },
    })
    const styleLine = useAnimatedStyle(() => {
        return {
            backgroundColor: 'orange',
            height: 3,
            marginTop: -3,
            borderRadius: 3,
            width: xKnob2.value - xKnob1.value,
            transform: [{translateX: xKnob1.value }]
        }
    })

    const styleKnob1 = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: xKnob1.value,
                },
                {
                    scale:scaleKnob1.value
                }
            ]
        }
    })

    const styleKnob2 = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: xKnob2.value,
                },
                {
                    scale:scaleKnob2.value
                }
            ]
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
                <Animated.View style={[styles.knob, styleKnob1]} />
            </PanGestureHandler>
            <PanGestureHandler onGestureEvent={gestureHandler2}>
                <Animated.View style={[styles.knob, styleKnob2]} />
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