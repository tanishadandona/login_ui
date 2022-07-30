import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import Button from '../screens/common/Button';
import CardSection from "./common/CardSection";

const SignUpScreen = ({ navigation }) => {
    console.log(navigation)

    return (
        <View style={{
            justifyContent: 'center',
            position: 'absolute',
            marginTop: 265,
            marginLeft: 12,
        }}>
            <Image
                style={styles.imageStyle}
                source={require("../../assets/UpcircleLogo1.png")}
            />
            <View style={{ marginTop: 72 }}>

                <Button style={{

                    color: 'white',
                }}
                    onPress={() => navigation.navigate('LoginScreen')}>Login for existing users</Button>

                <Button style={{
                    color: '#52AAAA',
                    backgroundColor: 'white',
                    textAlign: 'center',

                }}>Sign up for new account </Button>

            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    image: {
        alignSelf: 'center',
        height: 324,
        width: 324,

    }
})
export default SignUpScreen;