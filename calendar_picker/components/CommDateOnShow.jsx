import { View, Text } from 'react-native'
import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';


export default function CommDateOnShow() {
    const [date, setDate] = useState(new Date());

    const onChange = (e, selectedDate) => {
        setDate(selectedDate);
    }

  return (
    <View>
        <DateTimePicker 
            value={date}
            mode={'date'}
            is24Hour={true}
            onChange={onChange}
        />
        <DateTimePicker 
            value={date}
            mode={'time'}
            is24Hour={true}
            onChange={onChange}
        />
        {/* <Text>{date.toLocaleDateString()}</Text> */}
    </View>
  )
}