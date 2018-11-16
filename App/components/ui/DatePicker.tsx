import React from 'react'
import { StyleSheet } from 'react-native'
import DatePicker, { DatePickerProps } from 'react-native-datepicker'
import theme from '../../theme'

export default (props: DatePickerProps) => (
  <DatePicker
    style={styles.datepicker}
    customStyles={{
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
    paddingVertical: theme.scale,
  },
  dateText: {
    color: theme.palette.text,
    fontSize: 18,
  },
  datepicker: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.palette.separator,
    height: 40,
    marginHorizontal: theme.scale * 2,
    marginVertical: theme.scale,
    width: '100%',
  },
})
