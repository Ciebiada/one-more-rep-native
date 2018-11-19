import React from 'react'
import { StyleSheet } from 'react-native'
import DatePicker, { DatePickerProps } from 'react-native-datepicker'
import theme from '../../theme'

export default (props: DatePickerProps) => (
  <DatePicker
    style={styles.datepicker}
    customStyles={{
      btnTextConfirm: { color: theme.palette.accent },
      dateInput: styles.dateInput,
      dateText: styles.dateText,
    }}
    showIcon={false}
    confirmBtnText="Done"
    cancelBtnText="Cancel"
    mode="datetime"
    {...props}
  />
)

const styles = StyleSheet.create({
  dateInput: {
    alignItems: 'flex-start',
    borderWidth: 0,
  },
  dateText: {
    color: theme.palette.textSecondary,
    fontSize: 14,
    height: 40,
  },
  datepicker: {
    width: '100%',
  },
})
