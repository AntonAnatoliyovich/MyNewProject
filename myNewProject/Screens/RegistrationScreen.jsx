import React from "react";
import { StyleSheet, ImageBackground } from 'react-native';

function RegistrationScreen () {
    return
    <View style={styles.container}>
        <ImageBackground 
        source={require("../assets/images/backgroundImage.jpeg")}
        style={styles.image}
        ></ImageBackground>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    }
})

export default RegistrationScreen;
