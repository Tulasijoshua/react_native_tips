import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';

export default function CommDatePicker() {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('date');

    const onChange = (e, selectedDate) => {
        setDate(selectedDate);
        setShow(false);
    }

    const showMode = (modeToShow) => {
        setShow(true);
        setMode(modeToShow);
    }
  return (
    <View>
        <Button title='Show Date Picker' onPress={() => showMode("date")} />
        <Button title='Show Date Picker' onPress={() => showMode("date")} />
        {
            show && (
                <DateTimePicker 
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    onChange={onChange}
                />
            )
        }
      <Text>CommDatePicker</Text>
    </View>
  )
}