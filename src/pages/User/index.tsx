import React, { useState } from 'react';
import { View, Text, Alert, KeyboardAvoidingView, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { styles } from './styles';
import Input from '../../components/Input';
import TextField from '../../components/Text';
import { postUserRegister } from '../../services/apiExterna';
import User from '../../models/User';
import { emailValid } from '../../util/emailValid';
import { fieldValid } from '../../util/fieldValid';

export default function UserRegistration({ navigation }: any) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');

    function Login(): void {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        });
    }

    function onSubmit(): void {
        let user: User = {
            name: '',
            email: '',
            userPassword: '',
            age: 0,
            address: '',            
        };

        if (!fieldValid(name, 'O campo nome é obrigatório')) {
            return;
        }
        if (!fieldValid(email, 'O campo e-mail é obrigatório')) {
            return;
        }
        if (!emailValid(email)) {
            Alert.alert(
                'E-mail inválido',
                'E-mail informado não é válido'
            );
            return;
        }
        if (!fieldValid(password, 'Escolha uma senha')) {
            return;
        }
        if (!fieldValid(age, 'O campo idade é obrigatório')) {
            return;
        }
        if (!fieldValid(address, 'O campo endereço é obrigatório')) {
            return;
        }        

    
        user.name = name;
        user.email = email;
        user.userPassword = password;

        try {
            user.age = parseInt(age);

            if (isNaN(user.age)) {
                Alert.alert(
                    'Idade inválida',
                    'O campo "idade" aceita somente números'
                );
            }

            if (user.age < 17) {
                Alert.alert('Idade inválida', 'A "idade" deve ser maior ou igual "18".');
                return;
            }
        } catch (error) {
            Alert.alert('Idade inválida', 'Informe somente um valor numérico');
            return;
        }
        user.address = address;        

        console.log(user);
        postUserRegister(user)
            .then((result) => {
                console.log('Resultado:');
                console.log(result);
                if (!result) {
                    Alert.alert(
                        'Erro ao Cadastrar',
                        'Houve um erro ao efetuar o cadastro.\nContate o administrador.'
                    );
                    return;
                }

                Alert.alert(
                    'Cadastro Concluído',
                    'Cadastro concluído com êxito'
                );

                Login();
            })
            .catch((error) => {
                console.error('UserRegistration.onSubmit');
                console.error(error);
                Alert.alert(
                    'Erro ao Cadastrar',
                    'Houve um erro ao efetuar o cadastro.\nContate o administrador.'
                );
            });
    }

    return (
        <ScrollView>
            <KeyboardAvoidingView style={styles.scrolContainer} behavior="padding" enabled>        
                <View style={styles.container}>
                    <TextField
                        label='Nome'
                    />            
                    <Input label="Nome" value={name} onChange={setName} />

                    <TextField
                        label='E-mail'
                    />                  
                    <Input
                        label="E-mail"
                        value={email}
                        onChange={setEmail}
                        keyboardType="email-address"
                    />

                    <TextField
                        label='Password'
                    />                  
                    <Input
                        label="Password"
                        value={password}
                        onChange={setPassword}
                        isPassword
                    />

                    <TextField
                        label='Idade'
                    />      
                    <Input
                        label="Idade"
                        value={age}
                        onChange={setAge}
                        keyboardType="number-pad"
                    />

                   <TextField
                        label='Endereço'
                    />                        
                    <Input label="Endereço" value={address} onChange={setAddress} />                    

                    <TouchableOpacity
                        style={styles.button}
                        onPress={onSubmit}>
                        <Text style={styles.text}>Cadastrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={Login}>
                        <Text style={styles.text}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>            
    );
}