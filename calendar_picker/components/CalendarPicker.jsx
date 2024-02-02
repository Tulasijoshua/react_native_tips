import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import DatePicker from 'react-native-modern-datepicker'
import { getToday, getFormatedDate } from 'react-native-modern-datepicker';

export default function CalendarPicker() {

    const today = new Date();

    const startDate = getFormatedDate(today.setDate(today.getDate() + 1), 'YYYY/MM/DD')
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState('12/12/2023');

    function handleOnPress() {
        setOpen(!open)
        console.log('clicked')
    }

    function handleChange(propDate) {
        setDate(propDate)
    }

  return (
    <View style={styles.container}>
      <Text>CalendarPicker</Text>
      <TouchableOpacity onPress={handleOnPress}>
        <Text>Open</Text>
      </TouchableOpacity>

      <Modal
        animationType='slide'
        transparent={true}
        visible={open}
      >
        <View style={StyleSheet.centeredView}>
            <View style={StyleSheet.modalView}>
                <DatePicker 
                    mode='calendar'
                    selected={date}
                    minimumDate={startDate}
                    onDateChange={handleChange}
                />


                <TouchableOpacity onPress={handleOnPress}>
                    <Text>Close</Text>
                </TouchableOpacity>
            </View>
        </View>

      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    centeredView: {
        width: '80%',
        marginHorizontal: 'auto',
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