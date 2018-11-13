import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import theme from '../../theme'

interface IProps {
  header: string,
  onPress?: () => void,
  subheader?: string
}

export default ({ header, subheader, onPress }: IProps) => (
  <TouchableHighlight onPress={onPress} underlayColor="#666">
    <View style={styles.row}>
      <Text style={styles.header}>{header}</Text>
      {subheader && <Text style={styles.subheader}>{subheader}</Text>}
    </View>
  </TouchableHighlight>
)

const styles = StyleSheet.create({
  header: {
    color: '#444',
    fontSize: 18,
    fontWeight: '500',
  },
  row: {
    backgroundColor: '#fcfcfc',
    paddingHorizontal: theme.scale * 2,
    paddingVertical: theme.scale * 3,
  },
  subheader: {
    color: '#777',
    fontSize: 14,
  },
})
