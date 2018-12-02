import React from 'react'
import { StyleSheet, TextInput, TextInputProps } from 'react-native'
import theme from '../../theme'

interface InputProps extends TextInputProps {
  header?: boolean
}

export default ({ header, ...props }: InputProps) => (
  <TextInput
    style={[styles.input, header && styles.header]}
    {...props}
    selectionColor={theme.palette.accent}
    underlineColorAndroid="transparent"
    placeholderTextColor={theme.palette.textSecondary}
  />
)

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
