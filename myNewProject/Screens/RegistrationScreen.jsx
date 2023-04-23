import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native';

const TextInputExample = () => {
    const [text, onChangeText] = React.useState('Логін');
    const [number, onChangeNumber] = React.useState('');

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={styles.form}>
                <Text style={styles.title}>Реєстрація</Text>
                <View>
                    <TextInput style={styles.input} textAlign='center' onChangeText={onChangeText} value={text} placeholder='Логін' />
                </View>
                <View>
                    <TextInput style={styles.input} textAlign='center' onChangeText={onChangeText} value={text} placeholder='Електронна пошта' />
                </View>
                <View>
                    <TextInput style={styles.input} textAlign='center' onChangeText={onChangeNumber} value={number} placeholder='Пароль' secureTextEntry={true} />
                </View>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnTitle}>Зареєструватись</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.btnTitle1}>Вже є акаунт? Увійти</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>

        
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
        height: 549,
        left: 0,
        top: 263,
        borderRadius: 25,
    },

    title: {
        marginTop: 92,
        marginBottom: 30,
        color: '#212121',
        fontSize: 30,
        fontWeight: 500,
        textAlign: 'center',
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
        marginBottom: 16,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    btnTitle: {
        fontSize: 16,
        fontWeight: 400,
        color: '#fff',
        textAlign: 'center',
    },

    btnTitle1: {
        fontSize: 16,
        fontWeight: 400,
        color: '#1B4371',
        textAlign: 'center',
    }
});

export default TextInputExample;
