import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import theme from '../../theme'

interface ListItemProps {
  header: string,
  onPress?: () => void,
  subheader?: string
}

export default ({ header, subheader, onPress }: ListItemProps) => (
  <TouchableHighlight onPress={onPress} underlayColor="#666">
    <View style={styles.row}>
      <Text style={styles.header}>{header}</Text>
      {subheader && <Text style={styles.subheader}>{subheader}</Text>}
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
    backgroundColor: theme.palette.backgroundSecondary,
    paddingHorizontal: theme.scale * 2,
    paddingVertical: theme.scale * 3,
  },
  subheader: {
    color: theme.palette.textSecondary,
    fontSize: 14,
  },
})
