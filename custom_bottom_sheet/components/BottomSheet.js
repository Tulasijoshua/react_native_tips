import { View, Text, StyleSheet, TextInput, TouchableOpacity, Animated, Pressable } from 'react-native'
import React, { useEffect, useRef } from 'react'

export default function BottomSheet({setStatus}) {
    const slide = useRef(new Animated.Value(300)).current

    const slideUp = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(slide, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true,
        }).start();
      };
    
      const slideDown = () => {
        // Will change fadeAnim value to 0 in 3 seconds
        Animated.timing(slide, {
          toValue: 300,
          duration: 800,
          useNativeDriver: true,
        }).start();
      };

      useEffect(() => {
        slideUp()
      }, [])

      const closeModal = () => {
        slideDown();

        setTimeout(() => {
          setStatus(false)
        }, 800)
      }

  return (
    <Pressable onPress={closeModal} style={styles.backdrop}>
      <Pressable style={{width: '100%', height: '40%',}}>
        <Animated.View style={[styles.bottomSheet, { transform: [{ translateY: slide}]}]}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Login / Signup</Text>
          <View style={{marginTop: 20}}>
              <TextInput 
                  placeholder='Enter Username'
                  style={styles.input}
              />

              <TextInput 
                  placeholder='Enter Password'
                  style={styles.input}
                  secureTextEntry={true}
              />

              <TouchableOpacity style={styles.button}>
                  <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>Login</Text>
              </TouchableOpacity>
          </View>
        </Animated.View>
      </Pressable>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    backdrop: {
        position: 'absolute',
        flex: 1,
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    bottomSheet: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 15, 
        paddingVertical: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#bcbcbc',
        paddingHorizontal: 15,
        marginBottom: 10
    },
    button: {
        paddingHorizontal: 30, 
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: '#40A2E3',
        alignItems: 'center',
        marginTop: 15
      }
})