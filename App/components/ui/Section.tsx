import React, { ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'
import theme from '../../theme'

interface SectionProps {
  children: ReactNode
}

export default ({ children }: SectionProps) => (
  <View style={styles.section}>
    {children}
  </View>
)

const styles = StyleSheet.create({
  section: {
    marginHorizontal: theme.scale * 2,
    marginTop: theme.scale * 2,
  },
})
