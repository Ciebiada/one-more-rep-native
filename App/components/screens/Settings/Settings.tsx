import React from 'react'
import { Alert, Button, StyleSheet } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import theme from '../../../theme'
import Container from '../../ui/Container'
import Header from '../../ui/Header'

interface SettingsProps extends NavigationScreenProps {
  clearStorage: () => void
}

const zaorajModal = (clearStorage: () => void) => () => {
  Alert.alert('Clear storage', 'Are you sure?', [
    {text: 'Cancel', style: 'cancel'},
    {text: 'Clear', onPress: clearStorage, style: 'destructive'},
  ])
}

export default ({ navigation, clearStorage }: SettingsProps) => (
  <Container lightBackground={true}>
    <Header navigation={navigation} modal={true}/>
    <Button title="Zaoraj" onPress={zaorajModal(clearStorage)}/>
  </Container>
)

const styles = StyleSheet.create({
})
