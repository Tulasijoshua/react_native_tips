import React, { useCallback, useImperativeHandle, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const BottomSheet = ({ snapTo }, ref) => {
  const { height } = Dimensions.get('screen');
  const closeHeight = height;
  const percentage = parseFloat(snapTo.replace('%', '')) / 100;
  const openHeight = height - height * percentage;
  const topAnimation = useSharedValue(closeHeight);
  
  const expand = useCallback(() => {
    'worklet';
    topAnimation.value = withTiming(openHeight);
  }, [openHeight, topAnimation]);

  const close = useCallback(() => {
    'worklet';
    topAnimation.value = withTiming(closeHeight);
  }, [closeHeight, topAnimation]);

  const bottomSheetRef = useRef(null);

  useImperativeHandle(
    ref,
    () => ({
      expand,
      close,
    }),
    [expand, close]
  );

  const animationStyle = useAnimatedStyle(() => {
    const top = topAnimation.value;
    return {
      top,
    };
  });

  const pan = Gesture.Pan()
    .onBegin(() => {
      console.log('BEGIN')
    }).onUpdate((event) => {
      console.log(event.translationY)
    }).onEnd(() => {
      console.log('END')
    });

  return (
    <GestureDetector gesture={pan}>
        <Animated.View style={[styles.container, animationStyle]} ref={bottomSheetRef}>
        <View style={styles.lineContainer}>
            <View style={styles.line} />
        </View>
        </Animated.View>
    </GestureDetector>
  );
};

export default React.forwardRef(BottomSheet);

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  lineContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  line: {
    width: 50,
    height: 4,
    backgroundColor: 'black',
    borderRadius: 20,
  },
});
