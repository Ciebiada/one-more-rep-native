import React, { ReactNode } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import theme from '../../theme'

interface SectionProps {
  label?: string
  children: ReactNode
}

export default ({ label, children }: SectionProps) => (
  <View style={styles.section}>
    {label && <Text style={styles.label}>{label}</Text>}
    {children}
  </View>
)

const styles = StyleSheet.create({
  label: {
    color: theme.palette.textSecondary,
    fontSize: 14,
    fontWeight: '600',
  },
  section: {
    marginHorizontal: theme.scale * 2,
    marginTop: theme.scale * 2,
  },
})
