import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function CalendarPicker() {
    const [open, setOpen] = useState(false);

    const handleOnPress = () => {
        setOpen(!open)
    }

  return (
    <View>
      {/* <Text>CalendarPicker</Text> */}
      <TouchableOpacity onPress={handleOnPress}>
        <Text>Open</Text>
      </TouchableOpacity>

      <Modal
        animationType='slide'
        transparent={true}
        visible={open}
      >
        <View style={StyleSheet.centeredView}>
            <View style={StyleSheet.modalView}></View>
        </View>

      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        width: '90%',
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    }
})