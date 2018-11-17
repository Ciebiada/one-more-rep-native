import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

interface IconButtonProps {
  color?: string
  iconName: string
  onPress: () => void,
  size?: number
  style?: {},
}

export default ({color, iconName, onPress, size = 24, style}: IconButtonProps) => (
  <TouchableOpacity onPress={onPress} style={style}>
    <Icon name={iconName} size={size} color={color ? color : 'white'} />
  </TouchableOpacity>
)
