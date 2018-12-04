import React from 'react'
import { StyleSheet, TextInput, TextInputProps } from 'react-native'
import theme from '../../theme'

export type NumberInputProps = Pick<TextInputProps, Exclude<keyof TextInputProps, 'value' | 'onChange'>> & {
  value?: number
  onChange: (text?: number) => void,
}

export default class NumberInput extends React.Component<NumberInputProps> {
  public state = {
    text: this.props.value === undefined ? '' : String(this.props.value),
  }

  public render() {
    const {onChange, value, ...textInputProps} = this.props

    return (
      <TextInput
        onChangeText={this.onChangeText}
        value={this.state.text}
        style={styles.input}
        selectionColor={theme.palette.accent}
        underlineColorAndroid="transparent"
        placeholderTextColor={theme.palette.textSecondary}
        {...textInputProps}
      />
    )
  }

  private onChangeText = (inputText: string) => {
    const text = inputText.replace(',', '.')

    if (text !== '') {
      this.props.onChange(Number(text))
    } else {
      this.props.onChange()
    }

    this.setState({text})
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 22,
    fontWeight: '500',
  },
  input: {
    color: theme.palette.text,
    fontSize: 18,
  },
})
