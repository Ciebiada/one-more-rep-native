import React, { ReactNode } from 'react'
import { Platform, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'
import { NavigationParams, NavigationRoute, NavigationScreenProp } from 'react-navigation'
import theme from '../../theme'
import IconButton from './IconButton'

interface HeaderProps {
  center?: ReactNode
  left?: ReactNode
  right?: ReactNode,
  modal?: boolean
  navigation?: NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>
}

interface GoBackProps {
  modal?: boolean
  navigation: NavigationScreenProp<NavigationRoute<NavigationParams>, NavigationParams>
}

const GoBack = ({modal, navigation}: GoBackProps) => (
  <IconButton
    iconName={modal ? 'close' : 'chevron-left'}
    size={32}
    color={theme.palette.textSecondary}
    onPress={() => navigation.goBack()}
  />
)

export default ({center, left, modal, navigation, right}: HeaderProps) => (
  <SafeAreaView>
    <StatusBar barStyle="light-content" />
    <View style={[styles.header, !modal && styles.divider]}>
      <View style={styles.left}>
        {navigation
          ? <GoBack modal={modal} navigation={navigation} />
          : left}
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
  divider: {
    borderBottomColor: theme.palette.separator,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    paddingVertical: theme.scale,
  },
  left: {
    alignItems: 'flex-start',
    flex: 1,
    marginLeft: theme.scale,
  },
  right: {
    alignItems: 'flex-end',
    flex: 1,
    marginRight: theme.scale,
  },
})
