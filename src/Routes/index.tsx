import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import User from '../pages/User';
import Login from '../pages/Login';
import Product from '../pages/Product';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <StatusBar style="auto" />

            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    name="User"
                    options={{
                        title: 'Cadastro de Usuários',
                    }}
                    component={User}
                />                
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        title: 'Login',                        
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Product"
                    options={{
                        title: 'Lista de Produtos',
                    }}                    
                    component={Product}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}