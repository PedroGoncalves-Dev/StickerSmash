import { StyleSheet,Image } from "react-native"

export default function ImageViewer ({PlaceholderImage}) {
     return (
       
        <Image soucer={PlaceholderImage} style={styles.image} />
     
     )
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
})