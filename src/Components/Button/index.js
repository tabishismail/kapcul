import React from "react";
import { Pressable, Text, StyleSheet,Image } from "react-native";


export default function MyBtn({ children, onPress,btnStyle,txtStyle,imgStyle,source}) {
    return (
        <Pressable onPress={onPress} style={btnStyle}>
            <Image source={source} style={imgStyle}/>
            <Text style={txtStyle}>{children}</Text>
        </Pressable>)
}
const styles = StyleSheet.create({
    btn: {
        height: 43,
        width: '95%',
        backgroundColor: '#2A2AC0',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10

    },
    text: {
        color: '#fff'
    }
})