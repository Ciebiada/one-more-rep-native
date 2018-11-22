import React, { ReactNode } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import theme from '../../theme'

interface MyTextProps {
  children: ReactNode
}

export default ({ children }: MyTextProps) => (
  <Text style={styles.myText}>
    {children}
  </Text>
)

const styles = StyleSheet.create({
  myText: {
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
  },
})
