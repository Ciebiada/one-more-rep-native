import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import theme from '../../theme'

interface IProps {
  header: string,
  subheader?: string
}

export default ({header, subheader}: IProps) => (
  <View style={styles.row}>
    <Text style={styles.header}>{header}</Text>
    {subheader && <Text style={styles.subheader}>{subheader}</Text>}
  </View>
)

const styles = StyleSheet.create({
  header: {
    color: '#444',
    fontSize: 18,
    fontWeight: '500',
  },
  row: {
    backgroundColor: '#fcfcfc',
    marginVertical: theme.scale,
    paddingHorizontal: theme.scale * 2,
    paddingVertical: theme.scale * 3,
  },
  subheader: {
    color: '#777',
    fontSize: 14,
  },
})
