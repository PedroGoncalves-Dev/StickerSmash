import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import ImageViewer from './components/ImageViewer';
import Button from './components/Button';

const PlaceholderImage = require('./assets/images/background-image.png')


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color: '#fff'}}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
     
     <View style={styles.ImageContainer} >
       <ImageViewer PlaceholderImage={PlaceholderImage} />
     </View>
     
     <View style={styles.footerContainer}>
      <Button label='Mude a foto'/>
      <Button label='Use está foto' />
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  }
});
