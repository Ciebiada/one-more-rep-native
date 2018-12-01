import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import theme from '../../theme'

interface IconButtonProps {
  color?: string
  marginRight?: number
  marginLeft?: number
  iconName: string
  onPress: () => void,
  size?: number
  style?: {},
}

export default ({color, marginRight, marginLeft, iconName, onPress, size = 24, style}: IconButtonProps) => (
  <TouchableOpacity onPress={onPress} style={[style, {marginRight, marginLeft}]}>
    <Icon name={iconName} size={size} color={color ? color : 'white'} />
  </TouchableOpacity>
)
