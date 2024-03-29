import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function index() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Link style={{fontSize: 20}} href='/posts/1'>Open post 1</Link>
      <Link style={{fontSize: 20}} href='/posts/2'>Open post 2</Link>
      <Link style={{fontSize: 20}} href='/posts/3'>Open post 3</Link>
      <Link style={{fontSize: 20}} href='/posts/7'>Open post 7</Link>
    </View>
  )
}