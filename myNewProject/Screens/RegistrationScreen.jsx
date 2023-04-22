import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput } from 'react-native';

const TextInputExample = () => {
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');

    return (
        <SafeAreaView style={styles.form}>
            <Text style={styles.text}>Реєстрація</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="useless placeholder"
                keyboardType="numeric"
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    form: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        // width: '100%',
        height: 549,
        left: 0,
        top: 263,
        borderRadius: 25,
    },

    text: {
        color: '#212121',
        fontSize: 30,
        // margin: 'auto',
    },

    input: {
        width: '80%',
        height: 40,
        margin: 20,
        borderWidth: 1,
        padding: 10,
        justifyContent: 'center',
        borderRadius: 10,
    },
});

export default TextInputExample;
