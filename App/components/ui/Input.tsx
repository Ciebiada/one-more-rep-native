import React from 'react'
import { StyleSheet, Text, TextInput, TextInputProps, TouchableHighlight, View } from 'react-native'
import theme from '../../theme'

export default (props: TextInputProps) => (
  <TextInput style={styles.input} {...props} />
)

const styles = StyleSheet.create({
  input: {
    backgroundColor: theme.palette.backgroundSecondary,
    color: theme.palette.text,
    fontSize: 14,
    padding: theme.scale * 2,
  },
})
