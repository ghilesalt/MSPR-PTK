/* eslint-disable prettier/prettier */
import React from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image
} from "react-native";

const handleRegister = (navigation) => {
    navigation.navigate("Inscription");
}
const QRScan = (navigation) => {
    navigation.navigate("Scanner");
}

const ARScan = (navigation) => {
    navigation.navigate("Reality");
}

const Login = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageV}>
                <Image style={styles.images} source={require('./assets/Logo.jpg')}/>
            </View>
            <Text style={styles.text}> Email</Text>
            <TextInput style={styles.textInput} placeholderTextColor={"#CFCFCF"} placeholder="Entrer votre Email" />
            <Text style={styles.text} keyboardType={'email-address'}> Mot de passe</Text>
            <TextInput style={styles.textInput} placeholderTextColor={"#CFCFCF"} placeholder="Entrer votre Mot de passe" secureTextEntry={true} />
            <TouchableOpacity style={styles.button} onPress={() => QRScan(navigation)}>
                <Text style={styles.textButton} >Connexion </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={() => handleRegister(navigation)}>
                <Text style={styles.textButton}>Inscription </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 10,
        justifyContent: "center",
        height: "100%",
    },
    text:{
      paddingRight:10,
      paddingBottom:5,
      color:'grey'
      ,
    },
    button: {
        backgroundColor: "#92c74b",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center',
        padding: 10,
        marginBottom:10,
        marginTop:25,
        borderRadius: 5
    },

    button2: {
      backgroundColor: "#c26353",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: 'center',
      padding: 10,
      marginBottom:10,
      borderRadius: 5,
  },
    textButton: {
        color: "white",
        fontSize: 15,

    },
    textInput: {
        borderWidth: 1,
        fontSize: 15,
        marginBottom: 10,
        borderRadius: 5,
        padding: 5,
        
        borderColor: "black",
        color: "black"
    },
    images:{
        width: 100,
        height: 100,
        borderRadius:50,
    },
    imageV:{
        marginBottom:100,
        marginTop:-200,
        justifyContent:'center',
        alignItems: "center",
    }
})

export default Login