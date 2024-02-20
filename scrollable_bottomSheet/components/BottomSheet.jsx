import React, { useCallback, useImperativeHandle, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
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

  // Creating a mutable ref using useRef
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

  return (
    <Animated.View style={[styles.container, animationStyle]} ref={bottomSheetRef}>
      <View style={styles.lineContainer}>
        <View style={styles.line} />
      </View>
    </Animated.View>
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