import React, { ReactNode } from 'react'
import { KeyboardAvoidingView, StyleSheet } from 'react-native'
import theme from '../../theme'

interface ContainerProps {
  children?: ReactNode
}

export default ({ children }: ContainerProps) => (
  <KeyboardAvoidingView style={styles.container} behavior="padding">
    {children}
  </KeyboardAvoidingView>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.palette.background,
    flex: 1,
  },
})
