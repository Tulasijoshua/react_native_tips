import React, { useCallback, useImperativeHandle, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import BackDrop from './BackDrop';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const BottomSheetScrollView = ({ snapTo, backgroundColor, backDropColor, children, ...rest }, ref) => {
  const inset = useSafeAreaInsets()
  const { height } = Dimensions.get('screen');
  const closeHeight = height;
  const percentage = parseFloat(snapTo.replace('%', '')) / 100;
  const openHeight = height - height * percentage;
  const topAnimation = useSharedValue(closeHeight);
  const context = useSharedValue(0)
  
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
      context.value = topAnimation.value;
    }).onUpdate((event) => {
      if (event.translationY < 0) {
        topAnimation.value = withSpring(openHeight, {
          damping: 100,
          stiffness: 400
        })
      } else {
        topAnimation.value = withSpring(event.translationY + context.value, {
          damping: 100,
          stiffness: 400,
        })
      }
    }).onEnd(() => {
      if (topAnimation.value > openHeight + 50) {
        topAnimation.value = withSpring(closeHeight, {
          damping: 100,
          stiffness: 400,
        })
      } else {
        topAnimation.value = withSpring(openHeight, {
          damping: 100, 
          stiffness: 400,
        })
      }
    });

    const onScroll = useAnimatedScrollHandler({
      onBeginDrag: event => {
        scrollBegin.value = event.contentOffset.y
      }
    })

  return (
    <>
      <BackDrop 
        topAnimation={topAnimation} 
        closeHeight={closeHeight} 
        openHeight={openHeight} close={close} 
        backDropColor={backDropColor}
      />
      <GestureDetector gesture={pan}>
          <Animated.View style={[styles.container, animationStyle, {
            backgroundColor: backgroundColor,
            paddingBottom: inset.bottom
          }]} ref={bottomSheetRef}>
            <View style={styles.lineContainer}>
                <View style={styles.line} />
            </View>
            <Animated.ScrollView {...rest}
              bounces={false}
              scrollEventThrottle={16}
              onScroll={onScroll}
            >{children}</Animated.ScrollView>
          </Animated.View>
      </GestureDetector>
    </>
  );
};

export default React.forwardRef(BottomSheetScrollView);

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
