import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import theme from '../../theme'
import MyText from './MyText'

interface ListItemProps {
  header: string,
  onPress?: () => void,
  subheader?: string
}

export default ({ header, subheader, onPress }: ListItemProps) => (
  <TouchableHighlight onPress={onPress} underlayColor={theme.palette.separator}>
    <View style={styles.row}>
      <MyText>
        <Text style={styles.header}>{header}</Text>
      </MyText>
      {subheader && <MyText><Text style={styles.subheader}>{subheader}</Text></MyText>}
    </View>
  </TouchableHighlight>
)

const styles = StyleSheet.create({
  header: {
    color: theme.palette.text,
    fontSize: 18,
    fontWeight: '500',
  },
  row: {
    borderBottomColor: theme.palette.separator,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginHorizontal: theme.scale * 2,
    paddingVertical: theme.scale * 3,
  },
  subheader: {
    color: theme.palette.textSecondary,
    fontSize: 14,
  },
})
