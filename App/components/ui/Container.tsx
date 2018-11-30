import React, { ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'
import theme from '../../theme'

interface ContainerProps {
  children?: ReactNode
}

export default ({ children }: ContainerProps) => (
  <View style={styles.container}>
    {children}
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.palette.background,
    flex: 1,
  },
})
