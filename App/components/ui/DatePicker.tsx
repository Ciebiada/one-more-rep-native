import { distanceInWordsToNow } from 'date-fns'
import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import DateTimePicker from 'react-native-modal-datetime-picker'
import theme from '../../theme'
import MyText from './MyText'

interface DatePickerProps {
  onDateChange: (date: string) => void
  date?: string
  placeholder?: string
}

interface State {
  datePickerVisible: boolean
}

export default class DatePicker extends Component<DatePickerProps> {
  public static defaultProps = {
    placeholder: 'Date',
  }

  public state: State = {
    datePickerVisible: false,
  }

  public render() {
    const { date, placeholder } = this.props
    const { datePickerVisible } = this.state

    return (
      <View>
        <TouchableOpacity onPress={this.showDatePicker}>
          <MyText><Text style={styles.date}>{date ? `${distanceInWordsToNow(date)} ago` : placeholder}</Text></MyText>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={datePickerVisible}
          onCancel={this.hideDatePicker}
          onConfirm={this.selectDate}
        />
      </View>
    )
  }

  private showDatePicker = () => this.setState({datePickerVisible: true})

  private hideDatePicker = () => this.setState({datePickerVisible: false})

  private selectDate = (date: Date) => {
    this.props.onDateChange(date.toJSON())
    this.hideDatePicker()
  }
}

const styles = StyleSheet.create({
  date: {
    color: theme.palette.textSecondary,
    fontSize: 14,
  },
})
