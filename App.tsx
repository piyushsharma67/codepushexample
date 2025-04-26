import React from 'react'
import { View, Text, Image } from 'react-native'
import Goku from './assets/images/goku.jpeg' //internally resolved as Image.resolveAssetSource({ uri: 'assets_images_goku.jpeg' });

function App() {
  console.log('Goku source:', Image.resolveAssetSource(Goku));
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the app</Text>
      <Image source={Goku} style={{ width: 200, height: 200 }} />
    </View>
  )
}

export default App