import React, { ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'
import theme from '../../theme'

interface SectionProps {
  children: ReactNode
  align?: 'flex-start' | 'center' | 'flex-end'
}

export default ({ align = 'flex-start', children }: SectionProps) => (
  <View style={styles.section}>
    <View style={{alignItems: align}}>
      {children}
    </View>
  </View>
)

const styles = StyleSheet.create({
  section: {
    marginHorizontal: theme.scale * 2,
    marginTop: theme.scale * 2,
  },
})
