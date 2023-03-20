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

const handleConnection = (navigation) => {
    navigation.navigate("Connexion");
}
const SignUp = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageV}>
                <Image style={styles.images} source={require('./assets/Logo.jpg')}/>
            </View>
            <Text style={styles.text}>Entrer Email</Text>
            <TextInput style={styles.textInput}placeholderTextColor={"#CFCFCF"} placeholder="Entrer votre Email" />
            <Text style={styles.text}> Entrer Mot de passe</Text>
            <TextInput style={styles.textInput}placeholderTextColor={"#CFCFCF"} placeholder="Entrer votre Mot de passe" secureTextEntry={true} />
            <Text style={styles.text}> Confirmer Mot de passe</Text>
            <TextInput style={styles.textInput}placeholderTextColor={"#CFCFCF"} placeholder="Confirmer votre Mot de passe" secureTextEntry={true} />
            <TouchableOpacity style={styles.button2} onPress={() => handleConnection(navigation)}>
                <Text style={styles.textButton}>Enregistrer </Text>
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
    },
    button: {
        backgroundColor: "#2b9d8f",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center',
        padding: 10,
        marginBottom:10,
        marginTop:25,
        borderRadius: 5
    },

    button2: {
        backgroundColor: "#92c74b",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center',
        padding: 10,
        marginBottom:15,
        marginTop:10,
        borderRadius: 5
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

export default SignUp