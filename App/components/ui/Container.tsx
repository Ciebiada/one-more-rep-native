import React, { ReactNode } from 'react'
import { KeyboardAvoidingView, RegisteredStyle, StyleSheet } from 'react-native'
import theme from '../../theme'

interface ContainerProps {
  children?: ReactNode
  lightBackground?: boolean
}

export default ({ children, lightBackground }: ContainerProps) => (
  <KeyboardAvoidingView
    style={[styles.container, lightBackground && styles.lightBackground]}
    behavior="padding"
  >
    {children}
  </KeyboardAvoidingView>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.palette.background,
    flex: 1,
  },
  lightBackground: {
    backgroundColor: theme.palette.backgroundSecondary,
  },
})
