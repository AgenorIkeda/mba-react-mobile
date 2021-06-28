import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { FlatList, BorderlessButton as Button } from 'react-native-gesture-handler';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

import { styles } from './styles';
import { getProductsList } from '../../services/apiExterna';
import Login from '../Login';

export default function ProductsList({ navigation }: any) {
    const [products, setProducts] = useState(Object);

    function Login(): void {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        });
    }

    useEffect(() => {
        getProductsList().then((items) => setProducts(items));
        navigation.setOptions({
            headerRight: () => (
                <Button
                    style={styles.logoutButton}
                    onPress={Login}
                >
                    <Text>Logout</Text>
                </Button>
            ),
        });
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                keyExtractor={(product) => product.id.toString()}
                renderItem={({ item, index }) => (
                    <View style={styles.block}>
                        <Text style={styles.title}>{item.name}</Text>

                        <View style={styles.section}>
                            <Text>Fabricante: </Text>
                            <Text style={styles.bold}>
                                {item.factory.name} 
                            </Text>
                        </View>

                        <View style={styles.section}>
                            <Text>Preço Unitário: </Text>
                            <Text style={styles.bold}>
                                R$ {item.price.toFixed(2).replace('.', ',')}
                            </Text>
                        </View>

                        <View style={styles.section}>
                            <Text>Quantidade em Estoque: </Text>
                            <Text style={styles.bold}>
                                {item.amount}
                            </Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}
