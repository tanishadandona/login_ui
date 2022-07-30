import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import Button from "./common/Button";


const LoginScreen = () => {
  return (
    <View style={{ flex: 1, marginHorizontal: 15 }}>
      <Text style={styles.textStyle}>
        Login
      </Text>
      <Text style={{
        marginTop: 30,
        //height: 23,
        fontWeight: '700',
        fontFamily: 'Nunito',
        fontSize: 16,
        marginLeft: 5,
        color: '#2C2C2C'
      }}>
        Email Address
      </Text>
      <TextInput
        style={styles.input}
        placeholder="e.g.julietan@abc.com"
      />
      <Text style={{
        // marginTop: 0,
        //height: 23,
        marginLeft: 5,
        fontWeight: '700',
        fontFamily: 'Nunito',
        fontSize: 16,
        color: '#2C2C2C'
      }}>
        Password
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Minimum 8 characters"
      />
      <Button
        style={{
          textAlign: 'center',
          backgroundColor: '#BEC2C8',
          borderColor: '#BEC2C8',
        }}>Login </Button>

      <Text
        style={{
          alignSelf: 'center',
          textDecorationLine: 'underline',
          fontSize: 14,
          marginTop: 20,
          color: '#2C2C2C',
        }}>Forgot your password?</Text>

      <Text style={{
        fontSize: 14,
        marginHorizontal: 110,
        marginTop: 40,
        textAlign: 'center',
        fontWeight: '400',
        color: '#2C2C2C',
        marginBottom: 30
      }}> OR </Text>

      <View style={{ marginHorizontal: 4 }}>
        <Button style={{
          backgroundColor: '#1877F2',
          borderColor: '#BEC2C8',
        }} >Login with Facebook</Button>

        <Button style={{ backgroundColor: '#2C2C2C', }}>Login with Apple</Button>

        <Text style={{ textAlign: 'center' }}>by signin in,I agree to the</Text>
        <Text style={{ color: '#207171', textAlign: 'center' }}>Terms and Conditions and Privacy Policy</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Nunito',
    fontWeight: '700',
    marginLeft: 130,
    fontSize: 20,
    marginTop: 20,
  },
  input: {
    height: 40,
    marginHorizontal: 4,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 8,
    borderColor: '#EDEDED',
    marginBottom: 12,
    width: '100%'

  }
})
export default LoginScreen;