import { distanceInWordsToNow } from 'date-fns'
import React, { Component } from 'react'
import { TouchableOpacity, View } from 'react-native'
import DateTimePicker from 'react-native-modal-datetime-picker'
import Subheading from './Subheading'

interface DatePickerProps {
  onDateChange: (date: string) => void
  date?: string
  placeholder: string
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
          <Subheading>
            {date ? `${distanceInWordsToNow(date)} ago` : placeholder}
          </Subheading>
        </TouchableOpacity>
        <DateTimePicker
          date={date ? new Date(date) : undefined}
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
