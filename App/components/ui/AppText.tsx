import React, { ReactNode } from 'react'
import { Platform, StyleSheet, Text } from 'react-native'

interface AppTextProps {
  children: ReactNode
}

export default ({ children }: AppTextProps) => (
  <Text style={styles.appText}>
    {children}
  </Text>
)

const styles = StyleSheet.create({
  appText: {
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
  },
})
