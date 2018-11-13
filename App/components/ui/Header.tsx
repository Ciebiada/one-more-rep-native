import React, { ReactNode } from 'react'
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'
import { NavigationParams, NavigationProp, NavigationRoute, NavigationScreenProp } from 'react-navigation'
import theme from '../../theme'
import IconButton from './IconButton'

interface IProps {
  center?: ReactNode
  navigation?: NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>
  right?: ReactNode
}

interface IGoBack {
  navigation: NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>
}

const GoBack = ({navigation}: IGoBack) => (
  <IconButton
    iconName="chevron-left"
    size={30}
    onPress={() => navigation.goBack()}
  />
)

export default ({center, navigation, right}: IProps) => (
  <SafeAreaView style={styles.notch}>
    <StatusBar barStyle="light-content" />
    <View style={styles.header}>
      <View style={styles.left}>
        {navigation && <GoBack navigation={navigation} />}
      </View>
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
    height: theme.scale * 7,
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
