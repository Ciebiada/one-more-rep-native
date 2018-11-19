import React from 'react'
import { StyleSheet, TextInput, TextInputProps } from 'react-native'
import theme from '../../theme'

export default (props: TextInputProps) => (
  <TextInput style={styles.input} {...props} />
)

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.palette.separator,
    color: theme.palette.text,
    fontSize: 18,
    height: 40,
    marginVertical: theme.scale,
    paddingVertical: theme.scale,
  },
})
