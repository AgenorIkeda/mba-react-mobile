import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';

import { styles } from './styles';
import Input from '../../components/Input';
import TextField from '../../components/Text';

import { postUserAuth } from '../../services/apiExterna';
import { emailValid } from '../../util/emailValid';
import { fieldValid } from '../../util/fieldValid';

export default function Login({ navigation }: any) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    async function login(): Promise<any> {
        setIsLoading(true);

        if (!emailValid(email)) {
            Alert.alert(
                'E-mail inválido',
                'E-mail informado não é válido'
            );
            return;
        }

        if (!fieldValid(password, 'Informe o password')) {
            return;
        }

        postUserAuth(email, password)
            .then((result) => {
                setIsLoading(false);

                if (!result) {
                    setIsLoading(false);
                    Alert.alert(
                        'Erro!',
                        'E-mail ou Password Inválidos!\nTente novamente.'
                    );
                    return;
                }

                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Product' }],
                });
            })
            .catch((error) => {
                console.error(error);
                Alert.alert(
                    'Erro ao Autenticar',
                    'Houve um erro ao tentar logar.\nContate o administrador.'
                );
            });
    }

    function openUserRegistration(): void {
        navigation.reset({
            index: 0,
            routes: [{ name: 'User' }],
        });
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../../assets/tlintaTles.jpg')}
            />

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

            {!isLoading ? (

                    <View>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={login}>
                            <Text style={styles.text}>Login</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={openUserRegistration}>
                            <Text style={styles.text}>Register</Text>
                        </TouchableOpacity>
                    </View>
            ) : (
                <View>
                    <ActivityIndicator
                        size="large"
                        color="green"
                    />
                </View>
            )}
        </View>
    );
}