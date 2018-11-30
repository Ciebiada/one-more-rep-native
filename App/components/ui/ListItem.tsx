import React from 'react'
import { StyleSheet, TouchableHighlight, View } from 'react-native'
import theme from '../../theme'
import Heading from './Heading'
import Subheading from './Subheading'

interface ListItemProps {
  header: string,
  onPress?: () => void,
  subheader?: string
}

export default ({ header, subheader, onPress }: ListItemProps) => (
  <TouchableHighlight onPress={onPress} underlayColor={theme.palette.separator}>
    <View style={styles.row}>
      <Heading>{header}</Heading>
      {subheader && <Subheading>{subheader}</Subheading>}
    </View>
  </TouchableHighlight>
)

const styles = StyleSheet.create({
  row: {
    borderBottomColor: theme.palette.separator,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginHorizontal: theme.scale * 2,
    paddingVertical: theme.scale * 3,
  },
})
