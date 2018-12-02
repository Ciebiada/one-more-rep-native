import React from 'react'
import { StyleSheet, Text } from 'react-native'
import theme from '../../theme'
import AppText from './AppText'

interface SubheadingProps {
  children: string
}

export default ({ children }: SubheadingProps) => (
  <AppText>
    <Text style={styles.subheading}>{children}</Text>
  </AppText>
)

const styles = StyleSheet.create({
  subheading: {
    color: theme.palette.textSecondary,
    fontSize: 16,
  },
})
