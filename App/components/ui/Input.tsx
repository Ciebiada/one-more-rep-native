import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import theme from '../../theme'

interface InputProps {
  value: string
  onChange: (text: string) => void
  onFocus?: () => void
  placeholder: string
}

export default ({ value, onChange, placeholder, onFocus }: InputProps) => (
  <TextInput
    autoFocus={!value}
    style={styles.input}
    value={value}
    onChangeText={onChange}
    onFocus={onFocus}
    placeholder={placeholder}
    selectionColor={theme.palette.accent}
    underlineColorAndroid="transparent"
    placeholderTextColor={theme.palette.textSecondary}
  />
)

const styles = StyleSheet.create({
  input: {
    color: theme.palette.text,
    fontSize: 18,
    fontWeight: '500',
  },
})
