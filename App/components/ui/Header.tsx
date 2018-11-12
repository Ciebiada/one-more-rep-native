import React, { ReactNode } from 'react'
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'
import theme from '../../theme'

interface IProps {
  center?: ReactNode
  left?: ReactNode
  right?: ReactNode
}

export default ({center, left, right}: IProps) => (
  <SafeAreaView style={styles.notch}>
    <StatusBar barStyle="light-content" />
    <View style={styles.header}>
      <View style={styles.left}>{left}</View>
      <View style={styles.center}>{center}</View>
      <View style={styles.right}>{right}</View>
    </View>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    flex: 2,
  },
  header: {
    alignItems: 'center',
    backgroundColor: theme.palette.darkBackground,
    flexDirection: 'row',
    margin: theme.scale,
  },
  left: {
    alignItems: 'flex-start',
    flex: 1,
  },
  notch: {
    backgroundColor: theme.palette.darkBackground,
  },
  right: {
    alignItems: 'flex-end',
    flex: 1,
    marginRight: theme.scale,
  },
})
