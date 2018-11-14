import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

interface IconButtonProps {
  color?: string
  iconName: string
  onPress: () => void,
  size?: number
}

export default ({color, iconName, onPress, size = 24}: IconButtonProps) => (
  <TouchableOpacity onPress={onPress}>
    <Icon name={iconName} size={size} color={color ? color : 'white'} />
  </TouchableOpacity>
)
