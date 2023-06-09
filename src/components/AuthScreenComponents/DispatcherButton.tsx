import { StyleSheet, Text, View, TouchableOpacity, GestureResponderEvent, Platform, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import { colors } from '../../util/colors'

type Props = {
    title: string,
    onPress?: ((event: GestureResponderEvent) => void) | undefined,
    backgroundColorStyleType: { backgroundColor: string },
    textColorStyleType: { color: string }
}

const DispatcherButton = (props: Props) => {

    return (
        <TouchableOpacity
            style={[styles.btn, props.backgroundColorStyleType]}
            onPress={props.onPress}>
            <Text style={[styles.text, props.textColorStyleType]}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default DispatcherButton

const styles = StyleSheet.create({
    btn: {
        width: '88%',
        textAlign: 'center',
        padding: 12,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: colors.primaryBlue
    },
    text: {
        width: 85,
        height: 20,
        textAlign: 'center',
        fontSize: 16,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial',
        fontWeight: "500",
    }
})