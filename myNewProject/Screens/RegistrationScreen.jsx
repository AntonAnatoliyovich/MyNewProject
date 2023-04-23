import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const TextInputExample = () => {
    const [text, onChangeText] = React.useState('Логін');
    const [number, onChangeNumber] = React.useState('');

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Реєстрація</Text>
            <View>
                <TextInput style={styles.input} textAlign='center' placeholder='Логін' />
            </View>
            <View>
                <TextInput style={styles.input} textAlign='center' placeholder='Електронна пошта' />
            </View>
            <View>
                <TextInput style={styles.input} textAlign='center' placeholder='Пароль' secureTextEntry={true} />
            </View>
            <TouchableOpacity style={styles.btn}>
                <Text>Зареєструватись</Text>
            </TouchableOpacity>
        </View>
        
        // <SafeAreaView style={styles.form}>
        //     <Text style={styles.text}>Реєстрація</Text>
        //     <TextInput
        //         style={styles.input}
        //         onChangeText={onChangeText}
        //         value={text}
        //     />
        //     <TextInput
        //         style={styles.input}
        //         onChangeText={onChangeNumber}
        //         value={number}
        //         placeholder="useless placeholder"
        //         keyboardType="numeric"
        //     />
        // </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    form: {
        backgroundColor: '#fff',
        // justifyContent: 'center',
        // alignItems: 'center',
        height: 549,
        left: 0,
        top: 263,
        borderRadius: 25,
    },

    title: {
        marginHorizontal: 120,
        marginTop: 92,
        marginBottom: 30,
        color: '#212121',
        fontSize: 30,
        // alignItems: 'center',
        // justifyContent: 'center',
    },

    input: {
        marginHorizontal: 20,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        height: 40,
        borderRadius: 10,
        color: '#000',
        backgroundColor: '#F6F6F6',
        marginTop: 16,
    },

    btn: {
        backgroundColor: '#FF6C00',
        height: 40,
        borderRadius: 10,
        marginTop: 43,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default TextInputExample;
