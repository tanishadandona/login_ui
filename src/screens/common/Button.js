import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const Button = ({ onPress, children, style }) => {
    return (
        <TouchableOpacity onPress={onPress}
            style={
                [styles.buttonStyle, style]}
        >
            <Text style={[styles.textStyle, style]}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    textStyle: {
        alignSelf: 'center',
        color: 'white',
        fontWeight: "700",
        fontFamily: 'Nunito',
        fontSize: 18,
        marginHorizontal:20,
        textAlign: 'center',
        
    },
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#52AAAA',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#52AAAA',
        textAlign: 'center',
       marginLeft: 10,
        textAlign: 'center',
        marginVertical: 6,
    }
})

export default Button;