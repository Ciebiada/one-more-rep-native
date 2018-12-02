import React from 'react'
import { StyleSheet, Text } from 'react-native'
import theme from '../../theme'
import AppText from './AppText'

interface HeadingProps {
  children: string
}

export default ({ children }: HeadingProps) => (
  <AppText>
    <Text style={styles.heading}>{children}</Text>
  </AppText>
)

const styles = StyleSheet.create({
  heading: {
    color: theme.palette.text,
    fontSize: 22,
    fontWeight: '500',
  },
})
